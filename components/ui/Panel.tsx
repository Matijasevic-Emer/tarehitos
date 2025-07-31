"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, LogIn, UserPlus, LogOut, Backpack } from "lucide-react";

export default function Panel() {
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUid(localStorage.getItem("uid"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("uid");
    setUid(null);
  };

  const handleGuest = () => {
    //TODO: uso el id de invitado hardcodeado hasta que se agregue la gestion de usuarios con Login
    //TODO: en lugar de usar localStorage deberia usar redux o context o algo equivalente en NextJS
    localStorage.setItem("uid", "Ppj1R2wDDYgeishZNJEp6DPl1OO2");
    setUid("Ppj1R2wDDYgeishZNJEp6DPl1OO2");
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-20">
      {uid ? (
        <>
          <Link href="/tasks" className="sm:w-60">
            <Button variant={"outline"} className="sm:w-60 cursor-pointer ">
              <Backpack className="mr-2 h-5 w-5" />
              Mis Tareas
            </Button>
          </Link>
          <Button className="sm:w-60 cursor-pointer" onClick={handleLogout}>
            <LogOut className="mr-2 h-5 w-5" />
            Cerrar Sesión
          </Button>
        </>
      ) : (
        <>
          <Button className="sm:w-60 cursor-pointer" onClick={handleGuest}>
            <Eye className="mr-2 h-5 w-5" />
            Entrar como Invitado
          </Button>
          {/* TODO: Agregar login y registro por el momento uso el user creado a mano en firebase como invitado */}
          {/* <Link href="/login" className="sm:w-60">
            <Button className="sm:w-60 cursor-pointer ">
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </Button>
          </Link>
          <Link href="/register" className="sm:w-60">
            <Button className="sm:w-60 cursor-pointer">
              <UserPlus className="mr-2 h-5 w-5" />
              Registrarse
            </Button>
          </Link> */}
        </>
      )}
    </div>
  );
}
