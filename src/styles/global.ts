import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Colors
        --yellow: #ffcc01;
        --blue: rgb(49, 102, 177);
        --red-600: #ec3237;
        --light: #ffffff;
        --black: #000000;
        --blue-dark: #0a0f19;
        --blue-darksky: #5E6D8C;
        --gradient: linear-gradient(to right, var(--blue), var(--yellow));
        --bg-poke-color-dark-normal: #a5a5a5    ;
  --bg-poke-color-dark-fighting: rgba(221, 88, 88, 0.835);
  --bg-poke-color-dark-flying: rgba(175, 100, 225, 0.667);
  --bg-poke-color-dark-poison: rgba(165, 92, 205, 0.835);
  --bg-poke-color-dark-ground: rgba(235, 207, 142, 0.511);
  --bg-poke-color-dark-rock: rgba(203, 140, 95, 0.749);
  --bg-poke-color-dark-bug: #aedf78;
  --bg-poke-color-dark-ghost: rgba(203, 142, 235, 0.835);
  --bg-poke-color-dark-steel: rgba(145, 148, 146, 0.835);
  --bg-poke-color-dark-fire: #e95c4d;
  --bg-poke-color-dark-water: #43ccff;
  --bg-poke-color-dark-grass: #00ca91;
  --bg-poke-color-dark-electric: rgba(235, 230, 142, 0.835);
  --bg-poke-color-dark-psychic: #8a0532;
  --bg-poke-color-dark-ice: rgba(142, 235, 234, 0.835);
  --bg-poke-color-dark-dragon: rgba(149, 95, 203, 0.831);
  --bg-poke-color-dark-dark: rgba(148, 147, 144, 0.928);
  --bg-poke-color-dark-fairy: #f87ea7;
  --bg-poke-color-dark-unknown: rgba(247, 243, 233, 0.928);
  --bg-poke-color-dark-shadow: rgba(247, 233, 243, 0.928);

        //Fonts
        --font-family-title: "Pokemon Solid", sans-serif;
        --font-family-text: 'Poppins', sans-serif;
        --font-size-large: 3rem;
        --font-size-medium: 2rem;
        --font-size-regular: 1rem;
        --font-size-small: .8rem;

        //Others
        --border-r: 0.25rem;        
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }
    body {
        width: 100%;
        max-width: 1920px;
        background-color: var(--blue-dark);
    }
    textarea, button, select, input, span, a, h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-title);
    }
    h1, h2 {
        font-family: var(--font-family-title);
        font-size: 30px;        
    }
    p {
        font-family: var(--font-family-text);
        color: var(--light);
    }
    a {
        color: inherit;
    }
    .container {
        max-width: 1140px;
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
    }
`;
