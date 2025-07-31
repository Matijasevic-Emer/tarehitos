// app/components/Loader.tsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./bluecat.json";

export const Loader = () => (
  <div className="flex flex-col items-center justify-center h-[80vh]">
    <p className="text-lg text-muted-foreground mt-4">
      Cargando datos, por favor espera...
    </p>
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "150px", width: "150px" }}
    />
    
  </div>
);
