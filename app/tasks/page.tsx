'use client';

import { useEffect, useState } from 'react';
import TareaTarjeta from '@/components/ui/TareaTarjeta';

interface Tarea {
  id: string;
  name: string;
  description: string;
  estimatedFinishDate: string;
  status: string;
  points: string;
  columnId: number;
}

export default function TasksPage() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userId = localStorage.getItem('userId');

        if (!userId) {
          throw new Error('No se encontró el userId en localStorage');
        }

        const res = await fetch(`/api/tasks/user?userId=${userId}`);
        if (!res.ok) {
          throw new Error('Error al obtener las tareas');
        }

        const data = await res.json();
        setTareas(data);
      } catch (err: any) {
        setError(err.message || 'Error inesperado');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-muted-foreground">Cargando tareas...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-destructive">{error}</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 drop-shadow-xl">
          TareHitos
        </h1>

        <p className="text-2xl font-semibold text-gray-900 drop-shadow-xl">
          Organiza tus tareas de manera fácil y eficiente
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1024px] place-items-center">
          {tareas.map((tarea) => (
            <TareaTarjeta
              key={tarea.id}
              id={tarea.id}
              name={tarea.titulo}
              description={tarea.desc}
              estimatedFinishDate={tarea.date}
              status={tarea.isCompleted ? 'Completada' : 'Pendiente'}
              points={tarea.puntos || '0'}
              columnId={tarea.columnaId || 0}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
