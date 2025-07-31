"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import TarjetaTarea from "@/components/ui/TarjetaTarea";
import Link from "next/link";
import { Loader } from "@/components/ui/player/Loader";

interface TarjetaTareaProps {
  id: string;
  name: string;
  description: string;
  estimatedFinishDate: string;
  status: string;
  points: string;
  columnId: number; //pensando mas adelante tendrian columnas estilo DONE TO DO IN PROGRESS , etc como Kanban, por el momento nada o 1
}

export default function TasksPage() {
  const [tareas, setTareas] = useState<TarjetaTareaProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId)
          throw new Error("No se encontró el userId en localStorage");

        const res = await fetch(`/api/tasks/user?userId=${userId}`);
        if (!res.ok) throw new Error("Error al obtener las tareas");

        const data = await res.json();
        setTareas(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "Error inesperado");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <Loader />
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex justify-center items-center min-h-screen gap-2">
        <AlertTriangle className="text-destructive w-6 h-6" />
        <p className="text-destructive">{error}</p>
      </main>
    );
  }

  return (
    <main className="flex h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-12">
        <Link href="/tasks/new" className="mt-4">
          <Button className="sm:w-60 cursor-pointer">
            <Plus className="mr-2 h-5 w-5" />
            Agregar Nueva
          </Button>
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {tareas.map((tarea) => (
          <TarjetaTarea
            key={tarea.id}
            id={tarea.id}
            name={tarea.name}
            description={tarea.description}
            estimatedFinishDate={tarea.estimatedFinishDate}
            status={tarea.status}
            points={tarea.points}
            columnId={tarea.columnId}
          />
        ))}
      </section>
    </main>
  );
}
