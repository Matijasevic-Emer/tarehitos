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
    // Podés agregar navegación o feedback visual si querés
  };

  const handleGuest = () => {
    localStorage.setItem("uid", "Ppj1R2wDDYgeishZNJEp6DPl1OO2");
    setUid("Ppj1R2wDDYgeishZNJEp6DPl1OO2");
    // Podés agregar navegación o feedback visual si querés
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-40">
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
