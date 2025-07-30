import TareaTarjeta from "@/components/ui/TareaTarjeta";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center p-24 
  bg-[url('/assets/images/grid.png')] 
  bg-no-repeat bg-cover bg-center"
    >
      <div className="flex flex-col gap-4 items-center max-w-screen-sm mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 drop-shadow-xl">
          TareHitos
        </h1>

        <p className="text-2xl font-semibold text-gray-900 drop-shadow-xl">
          Organiza tus tareas de manera fácil y eficiente
        </p>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-[1024px] place-items-center ">
          <TareaTarjeta />
          <TareaTarjeta />
          <TareaTarjeta />
          <TareaTarjeta />
          <TareaTarjeta />
        </section>
      </div>
    </main>
  );
}
