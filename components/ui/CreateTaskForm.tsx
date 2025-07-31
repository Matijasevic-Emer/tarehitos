"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

export function CreateTaskForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedFinishDate, setEstimatedFinishDate] = useState<Date | undefined>();
  const [status, setStatus] = useState("Activa");
  const [points, setPoints] = useState("1");

  // Por ahora el usuario que esta en el local storage sera el creado y responsable de la tarea . mas adelante con una gestion de usuarios podrian ser disitinos userid
  const [tutorUser, setTutorUser] = useState("");
  const [createdUser, setCreatedUser] = useState("");
  //TODO: implementar tableros? asi podrian ser multiples tableros y cada user tendria su tablero o podria compartir, por el momento uso el tablero que cree en firebase directamente
  const [boardId, setBoardId] = useState("ZsOHlWyWibVawslmmCLC"); // Hardcodeado por el momento hasta implementar gestion de tableros

  useEffect(() => {
    const uid = localStorage.getItem("userId");
    if (uid) {
      setTutorUser(uid);
      setCreatedUser(uid);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !estimatedFinishDate || !tutorUser || !createdUser || !boardId) {
      alert("Por favor completa todos los campos obligatorios");
      console.log(name, description, estimatedFinishDate, tutorUser, createdUser, boardId);
      
      return;
    }

    const newTask = {
      name,
      description,
      status,
      estimatedStartDate: new Date().toISOString(),
      estimatedFinishDate: estimatedFinishDate.toISOString(),
      createdDate: new Date().toISOString(),
      userAssigned: "invitado", // es un valor representativo para mostrar en la card podria eliminarse y gestionar a traves de userId
      columnId: 1, // queda para mas adelante en caso de implementar un kanbam con columnas
      userInvolved: JSON.stringify([tutorUser]),
      tutorUser,
      createdUser,
      boardId,
      points,
    };
    //TODO: implementar Loader mientras envia formulario
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (res.ok) {
        router.push("/tasks");
      } else {
        const { message } = await res.json();
        alert(`Error al crear tarea: ${message}`);
        console.log(message);
        
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
    }
  };

  return (
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
            <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !estimatedFinishDate && "text-muted-foreground")}>
              <CalendarIcon className="mr-2 h-4 w-4" />
              {estimatedFinishDate ? format(estimatedFinishDate, "PPP") : <span>Elegir fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={estimatedFinishDate} onSelect={setEstimatedFinishDate} initialFocus />
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
            {/* Por ahora estos dos hardocodeado despues veo si lo hago editble o con una gestion de estados */}
            <SelectItem value="Activa">Activa</SelectItem>
            <SelectItem value="Completada">Completada</SelectItem>
          </SelectContent>
        </Select>
      </div>
    
      <div>
        <Label>Puntos</Label>
        <Input type="number" value={points} onChange={(e) => setPoints(e.target.value)} required />
      </div>

      <Button type="submit" className="w-full">
        Crear Tarea
      </Button>
    </form>
  );
}
