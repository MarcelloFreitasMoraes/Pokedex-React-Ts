import Head from 'next/head'
import Image from 'next/image'
import { LogoComponent } from '../global/components/Logo'
import * as S from "../../src/styles/styles.home"
import { TypographicComponent } from '../global/components/Typographic';
import ash from "../global/assets/ash.png";

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Pokedex</title>
      </Head>
      {/* <LogoComponent /> */}
      <S.Main>
      <S.GroupLeft>
          <div>
            <TypographicComponent title="For test next js" small />
            <TypographicComponent title="Poke Api" large />

            <TypographicComponent title="Produced 100% by Marcelo Moraes. Login and have fun in the world
              of pokemon" description />            
          </div>
        </S.GroupLeft>

        <S.GroupRight>
          <div>
            <Image src={ash} width={425} height={425} alt="Ash" />
          </div>
        </S.GroupRight>

        </S.Main>
    </div>
  )
}
