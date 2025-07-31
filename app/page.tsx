import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Eye } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 drop-shadow-xl">
          Bienvenido
        </h1>

        <p className="text-2xl font-semibold text-gray-900 drop-shadow-xl text-center ">
          Organiza tus tareas y completa tus hitos! con{" "}
          <strong>TareHitos</strong> y gatitos🐈‍⬛
        </p>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1024px] place-items-center mt-6">
          <Button className=" sm:w-60">
            <Eye className="mr-2 h-5 w-5" />
            Entrar como Invitado
          </Button>
          <Link href="/login" className="sm:w-60">
            <Button className="sm:w-60">
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </Button>
          </Link>
          <Button className=" sm:w-60">
            <UserPlus className="mr-2 h-5 w-5" />
            Registrarse
          </Button>
        </section>
      </div>
    </main>
  );
}
