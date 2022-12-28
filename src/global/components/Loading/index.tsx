import React from "react";
import Image from "next/image";
import pokeball from "../../assets/pokeball.gif";
import * as S from "./styles"

  export default function Pokeball() {
  return (
    <S.Loading>
      <Image
      src={pokeball}      
      alt="Loading"
    />
    </S.Loading>
 
  );
};

export const PokeballMini = () => {
  return (
    <Image
      src={pokeball}
      alt="Loading"
      style={{
        width: "12rem",
        margin: "auto",
        display: "block",
      }}
      loading="lazy"
    />
  );
};