import React from "react";
import pokeball from "../../assets/pokeball.gif";

export const Pokeball = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={pokeball}
      alt="Loading"
      style={{
        width: "800px",
        margin: "auto",
        display: "block",
      }}
      loading="lazy"
    />
  );
};

export const PokeballMini = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
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