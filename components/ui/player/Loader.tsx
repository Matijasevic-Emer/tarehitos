// app/components/Loader.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./bluecat.json";

export const Loader = () => (
  <div className="flex flex-col items-center justify-center h-[80vh]">
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "150px", width: "150px" }}
    />
    <div className="animate-spin rounded-full border-t-4 border-b-4 border-primary w-8 h-8 mt-4" />
    <p className="text-lg text-muted-foreground mt-4">
      Cargando datos, por favor espera...
    </p>
  </div>
);
