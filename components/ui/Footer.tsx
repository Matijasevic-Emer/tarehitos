import { Github, Linkedin, Mail, Globe, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t bg-muted text-muted-foreground py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">Corrientes, Argentina</p>
        </div>
          <p className="text-sm">by <span className="font-semibold">ematijasevic🦦</span></p>

        <div className="flex gap-4 items-center justify-center">
          <Link href="https://github.com/Matijasevic-Emer" target="_blank">
            <Github className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="https://www.linkedin.com/in/emerson-matijasevic/" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="https://ematijasevic.com.ar/" target="_blank">
            <Globe className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link href="mailto:matijasevic.emerson@gmail.com" target="_blank">
            <Mail className="h-5 w-5 hover:text-primary transition" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=543794404726&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Phone className="h-5 w-5 hover:text-primary transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
