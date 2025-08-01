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
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUid(localStorage.getItem("uid"));
    }
  }, []);
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
            <SheetHeader className="flex flex-col items-center gap-2">
              {uid ? (
                <Image
                  src="/assets/images/logo-on.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              ) : (
                <Image
                  src="/assets/images/logo-on.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              )}
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
              {uid && (
                <Link
                  href="/tasks"
                  onClick={closeSheet}
                  className="flex items-center gap-2 text-lg cursor-pointer hover:underline"
                >
                  <ListTodo className="w-5 h-5" />
                  Tareas
                </Link>
              )}
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
        <Link href="/">
          <h1 className="text-lg font-bold cursor-pointer">TareHitos</h1>
        </Link>
        <Link href="/">
          {uid ? (
            <Image
              src="/assets/images/logo-on.png"
              alt="Logo"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src="/assets/images/logo-on.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
    </>
  );
}
