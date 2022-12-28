import Head from 'next/head'
import Image from 'next/image'
import * as S from "../../src/styles/styles.home"
import { TypographicComponent } from '../global/components/Typographic';
import ash from "../global/assets/ash.png";
import pokebola from "../global/assets/pokeball.png";
import router from 'next/router';
import { InputComponent } from '../global/components/Form/Input';
import { useState } from 'react';
import axios from 'axios';
import Modal from '../global/components/Modal';

export default function Home() {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const pokemonLegends = (id: never[]) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        setOpenModal(true);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };

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
            <InputComponent
              onClick={() => pokemonLegends(data)}
              onChange={(e: any) => setData(e.target.value)}
              placeholder={"Search for your pokemon..."}
              value={undefined}
              iconSearch
            />
          </div>

        </S.GroupLeft>
        <S.GroupRight>
          <div>
            <Image src={ash} alt="Ash" />
          </div>
        </S.GroupRight>
      </S.Main>
      <S.Modal>
        {openModal && (
          <Modal data={data} setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div>
  )
}
