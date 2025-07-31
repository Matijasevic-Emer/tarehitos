"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCredential.user.uid;
      localStorage.setItem("uid", uid);

      const res = await fetch(`/api/users/uid/${uid}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "No se pudo obtener el usuario");
      }

      localStorage.setItem("userId", data.id);
      localStorage.setItem("teamId", data.teamId);

      router.push("/"); // Redirige a la home
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-8">
      <h1 className="text-xl font-semibold text-gray-900 drop-shadow-xl pb-9">
        Iniciar Sesión
      </h1>

      {error && (
        <Alert variant="destructive" className="w-full max-w-sm mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full max-w-sm gap-4"
      >
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="usuario@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Iniciar sesión</Button>
      </form>

      <Button
        variant="outline"
        className="mt-4"
        onClick={() => router.push("/register")}
      >
        Registrarse
      </Button>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        😉 Si no deseas registrarte, podés acceder como{" "}
        <strong>invitado@correo.com</strong> con contraseña{" "}
        <strong>invitado</strong>.
      </p>
    </div>
  );
}
