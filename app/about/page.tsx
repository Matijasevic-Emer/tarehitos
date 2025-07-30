import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-justify break-words hyphens-auto text-primary">Acerca de mí</h1>

      <div className="flex justify-center">
        <Image
          src="/assets/images/perfil.png"
          alt="Foto de perfil"
          width={200}
          height={200}
          className="rounded-full shadow-lg border-4 border-primary object-cover"
        />
      </div>

      <Card>
        <CardContent className="p-6 text-justify break-words hyphens-auto space-y-4 text-gray-900">
          <p className="text-md">
            ¡Hola! Soy <strong>Emerson Matijasevic</strong> y esta aplicación llamada <strong>TareHitos</strong> fue desarrollada como parte del challenge de ingreso a la <strong>Academia ForIT</strong>.
          </p>
          <p className="text-md">
            Está construida con <strong>Next.js</strong>, <strong>TailwindCSS</strong> y <strong>shadcn/ui</strong>. Es la primera vez que uso Next.js y lo hice con muchas ganas de aprender algo nuevo.
          </p>
          <p className="text-md">
            Estoy muy emocionado por esta oportunidad, y honestamente, ¡me encantaría que me acepten! Quiero seguir creciendo, aprender nuevas tecnologías y conseguir un trabajo como desarrollador.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-justify break-words hyphens-auto space-y-2 text-gray-900">
          <h2 className="text-xl font-semibold text-primary">Universidad 👨🏻‍🎓🏛️</h2>
          <p className="text-sm">
            Estudié <strong>Ingeniería en Sistemas de Información</strong> en la <strong>UNIVERSIDAD TECNOLÓGICA NACIONAL - Regional Resistencia</strong>, Argentina.
          </p>
          <p className="text-sm">
            Terminé de cursar y aprobé mi proyecto final. Actualmente me faltan solo 8 materias para obtener el título de Ingeniero.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-justify break-words hyphens-auto space-y-2 text-gray-900">
          <h2 className="text-xl font-semibold text-primary">Experiencia Laboral 💼💻</h2>
          <p className="text-sm">
            Desde 2018 trabajo con <strong>GeneXus</strong>, y estoy certificado como <strong>Analista Senior (Gx15)</strong>.
          </p>
          <p className="text-sm">
            He trabajado con versiones desde la <strong>Evo2</strong> y también con herramientas como <strong>Wpp</strong> y <strong>WppMobile</strong>.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 text-justify break-words hyphens-auto space-y-2 text-gray-900">
          <h2 className="text-xl font-semibold text-primary">Mi Norte 🧭🔭</h2>
          <p className="text-sm">
            Me gustaría desarrollarme como <strong>Fullstack Developer</strong> con tecnologías como <strong>Ruby</strong>, <strong>Java</strong> o <strong>JavaScript</strong>.
          </p>
          <p className="text-sm">
            Ya tuve contacto con estos lenguajes y quiero profesionalizarme en ellos para trabajar formalmente como developer.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
