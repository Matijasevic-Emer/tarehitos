'use client';

import { useEffect, useState } from 'react';
import { getCitasRandom } from '@/lib/getCitasRandom';

export default function CitaRotativa() {
  const [cita, setCita] = useState(getCitasRandom());
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCita(getCitasRandom());
        setFade(true);
      }, 3500); 
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-center italic text-gray-500 text-sm transition-opacity duration-500 ${
        fade ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {cita}
    </p>
  );
}
