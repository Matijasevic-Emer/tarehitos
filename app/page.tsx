import Panel from "@/components/ui/Panel";

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
        <Panel />
      </div>
    </main>
  );
}
