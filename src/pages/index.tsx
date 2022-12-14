import Head from 'next/head'
import Image from 'next/image'
import * as S from "../../src/styles/styles.home"
import { TypographicComponent } from '../global/components/Typographic';
import ash from "../global/assets/ash.png";
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
            <Image src={ash} alt="Ash" onClick={() => {router.push('/pokemon')}}/>
          </div>          
        </S.GroupRight>        
        </S.Main>
    </div>
  )
}
