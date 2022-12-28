import React from "react";
import Image from "next/image";
import pokeball from "../../assets/pokeball.gif";

export const Pokeball = () => {
  return (
    <Image
      src={pokeball}      
      alt="Loading"
    />
  );
};