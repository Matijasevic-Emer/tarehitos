import { CreateTaskForm } from "@/components/ui/CreateTaskForm";

export default function NewTaskPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-xl mx-auto mt-20 px-4 bg-white rounded-xl">
        <h1 className="text-2xl font-semibold mb-6">Crear Nueva Tarea</h1>
        <CreateTaskForm />
      </div>
    </main>
  );
}
