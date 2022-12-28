import Head from 'next/head'
import Image from 'next/image'
import * as S from "../../src/styles/styles.home"
import { TypographicComponent } from '../global/components/Typographic';
import ash from "../global/assets/ash.png";
import pokebola from "../global/assets/pokeball.png";
import router from 'next/router';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Home | Pokedex</title>
      </Head>
      <S.Main>
        <S.GroupLeft>
          <div>
            <TypographicComponent title="For test next js" small />
            <TypographicComponent title="Poke Api" large />
            <TypographicComponent title="Produced 100% by Marcelo Moraes. Login and have fun in the world
              of Pokemon." description />
            <TypographicComponent title="Click on the Pokeball to All Pokemons..." description />
            <S.Pokeball>
              <Image src={pokebola} alt="pokeball"
               width={50}
               height={50}
               onClick={() => { router.push('/pokemon') }} />
              </S.Pokeball>
          </div>
        </S.GroupLeft>
        <S.GroupRight>
          <div>
            <Image src={ash} alt="Ash"/>
          </div>
        </S.GroupRight>
      </S.Main>
    </div>
  )
}
