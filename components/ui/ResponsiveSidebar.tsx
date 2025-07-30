"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, ListTodo, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ResponsiveSidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const originalTitle = document.title;
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "¡Regresá!" : "Gracias por volver ✨";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, []);

  const closeSheet = () => setOpen(false);

  return (
    <>
      <div className="p-2 border-b flex items-center justify-between shadow-sm bg-white">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
              <SheetTitle className="text-center">Menú</SheetTitle>
            </SheetHeader>

            <nav className="mt-6 flex flex-col gap-4 items-center text-center">
              <Link
                href="/"
                onClick={closeSheet}
                className="flex items-center gap-2 text-lg cursor-pointer hover:underline"
              >
                <Home className="w-5 h-5" />
                Inicio
              </Link>

              <Link
                href="/task"
                onClick={closeSheet}
                className="flex items-center gap-2 text-lg cursor-pointer hover:underline"
              >
                <ListTodo className="w-5 h-5" />
                Tareas
              </Link>

              <Link
                href="/about"
                onClick={closeSheet}
                className="flex items-center gap-2 text-lg cursor-pointer hover:underline"
              >
                <User className="w-5 h-5" />
                Acerca de mí
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-bold">TareHitos</h1>
        <Link href="/">
        <Image
          src="/assets/images/logo.png"
          alt="Logo"
          width={32}
          height={32}
          
        />
        </Link>
      </div>
    </>
  );
}
