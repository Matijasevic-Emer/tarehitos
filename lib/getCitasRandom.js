// getRandomEmoji.js
const emojiList = [
  "🐷", "🐴", "🐑", "🐓", "🧠", "📢", "🪧", "🏠", "🌾", "⚖️", "📖", "🔥", "👀", "💥", "🐾", "🚜"
];

export const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[randomIndex];
};

const citas = [
  {
    cita: "Todos los animales son iguales, pero algunos animales son más iguales que otros.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "El hombre es el único ser que consume sin producir.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "Si los cerdos adquirieron un poder tan absoluto, fue solo porque los animales les permitieron hacerlo.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "El trabajo voluntario no es obligatorio, pero quien no lo cumpla verá reducida su ración a la mitad.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "Napoleón está siempre en lo correcto.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "La historia la escriben los vencedores.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "Lo importante no es si una cosa es verdad, sino si conviene decir que lo es.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "Los cerdos se parecían tanto a los humanos que ya no era posible distinguirlos.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "La solución a todos los problemas es trabajar más duro.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
  {
    cita: "Los animales miraban de cerdo a hombre, y de hombre a cerdo, y ya no sabían quién era quién.",
    libro: "Rebelión en la granja",
    autor: "George Orwell",
  },
];

export const getCitasRandom = () => {
  const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
  return `"${citaAleatoria.cita}" - ${citaAleatoria.libro}, ${citaAleatoria.autor}`;
};
