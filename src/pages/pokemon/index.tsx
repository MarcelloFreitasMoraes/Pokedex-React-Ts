import Head from 'next/head'
import Image from 'next/image'
import { LogoComponent } from '../../global/components/Logo'
import * as S from "./styles"
import ash from "../global/assets/ash.png";
import pokeball from "../global/assets/pokebola.png";
import { TypographicComponent } from '../../global/components/Typographic'

export default function Pokemon() {
  return (
    <div className='container'>
      <Head>
        <title>Pokedex All Pokemons</title>
      </Head>
      {/* <LogoComponent /> */}
      <S.Main>
      {/* <S.GroupLeft>
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
        <S.Pokeball>
        <Image src={pokeball} width={100} height={100} alt="Poke Ball" />
        </S.Pokeball> */}
        </S.Main>
    </div>
  )
}
