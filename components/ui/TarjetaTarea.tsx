"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { TrashIcon, PencilIcon } from "lucide-react";
import { toast } from "sonner";

interface TarjetaTareaProps {
  id: string;
  name: string;
  description: string;
  estimatedFinishDate: string;
  status: string;
  points: string;
  columnId: number;
}

const TarjetaTarea = ({
  id,
  name,
  description,
  estimatedFinishDate,
  status,
  points,
  columnId,
}: TarjetaTareaProps) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/tasks/edit/${id}`);
  };

  const handleDelete = async () => {
    const confirmed = confirm("¿Estás seguro de que deseas eliminar esta tarea?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error al eliminar tarea");

      toast.success("Tarea eliminada correctamente");
      router.refresh(); // o callback para actualizar la lista
    } catch (error) {
      toast.error("No se pudo eliminar la tarea");
      console.error(error);
    }
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-amber-700">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{description}</CardDescription>
      </CardHeader>

      <CardContent className="text-sm space-y-2">
        <p>
          <strong>Estado:</strong> {status}
        </p>
        <p>
          <strong>Pts:</strong> {points} | <strong>Columna:</strong> {columnId}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Fin estimado: {new Date(estimatedFinishDate).toLocaleDateString()}</span>
        <div className="flex gap-2">
          <Button className="cursor-pointer" size="sm" variant="outline" onClick={handleEdit}>
            <PencilIcon className="w-4 h-4 mr-1" />
            Editar
          </Button>
          <Button className="cursor-pointer" size="sm" variant="destructive" onClick={handleDelete}>
            <TrashIcon className="w-4 h-4 mr-1" />
            Borrar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TarjetaTarea;
