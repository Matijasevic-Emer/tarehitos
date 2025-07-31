// app/tasks/edit/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const EditTaskPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedFinishDate, setEstimatedFinishDate] = useState<Date | undefined>();
  const [status, setStatus] = useState("Activa");
  const [points, setPoints] = useState("1");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`/api/tasks/${id}`);
        if (!res.ok) throw new Error("No se pudo cargar la tarea");
        const task = await res.json();

        setName(task.name);
        setDescription(task.description);
        setEstimatedFinishDate(new Date(task.estimatedFinishDate));
        setStatus(task.status);
        setPoints(task.points);
      } catch (err) {
        alert("Error al cargar la tarea");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask = {
      name,
      description,
      status,
      estimatedFinishDate: estimatedFinishDate?.toISOString(),
      points,
    };

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (res.ok) {
        router.push("/tasks");
      } else {
        const data = await res.json();
        alert(`Error al actualizar la tarea: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
    }
  };

  if (loading) return <p className="text-center">Cargando tarea...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center">
    <div className="max-w-xl mx-auto mt-10 px-4 bg-white rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Editar Tarea</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label>Nombre</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div>
          <Label>Descripción</Label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <div>
          <Label>Fecha estimada de finalización</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !estimatedFinishDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {estimatedFinishDate ? format(estimatedFinishDate, "PPP") : <span>Elegir fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={estimatedFinishDate}
                onSelect={setEstimatedFinishDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label>Estado</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Activa">Activa</SelectItem>
              <SelectItem value="Completada">Completada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Puntos</Label>
          <Input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Guardar Cambios
        </Button>
      </form>
    </div>
  </main>
  );
};

export default EditTaskPage;
