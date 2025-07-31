"use client";
import Image from "next/image";

//No puedo usar lotitiefiles en NextJS porque me rompe el build en el deploy ..
// import { Player } from "@lottiefiles/react-lottie-player";
// import animationData from "./bluecat.json";

export const Loader = () => (
  <div className="flex flex-col items-center justify-center h-[80vh]">
    
    {/* <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "150px", width: "150px" }}
    /> */}
    <div className="flex justify-center">
      <Image
        src="/assets/images/loader.png"
        alt="Cargando..."
        width={200}
        height={200}
      />
    </div>
    <p className="text-lg text-muted-foreground mt-4">
      Cargando datos, por favor espera...
    </p>
    <div className="animate-spin h-5 w-5 border-b-2 border-primary rounded-full"></div>
  </div>
);

// export default Loader;
