import Head from 'next/head'
import Image from 'next/image'
import * as S from "../../src/styles/styles.home"
import { TypographicComponent } from '../global/components/Typographic';
import ash from "../global/assets/ash.png";
import pokeball from "../global/assets/pokebola.png";
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
            <TypographicComponent title="Click on the Pokeball to continue..." description />            
          </div>
        </S.GroupLeft>

        <S.GroupRight>
          <div>
            <Image src={ash} width={425} height={425} alt="Ash" />
          </div>          
        </S.GroupRight>
        <S.Pokeball onClick={() => {router.push('/pokemon');
            }}>
        <Image src={pokeball} width={100} height={100} alt="Poke Ball" />
        </S.Pokeball>
        </S.Main>
    </div>
  )
}
