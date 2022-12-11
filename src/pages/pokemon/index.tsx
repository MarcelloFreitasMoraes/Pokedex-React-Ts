import Head from 'next/head'
import Image from 'next/image'
import * as S from "./styles"
import { Key, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Modal from '../../global/components/Modal'
import Card from '../../global/components/Card';
import { HeaderComponent } from '../../global/components/Header';
import { TypographicComponent } from '../../global/components/Typographic';

export default function Pokemon() {

  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => setData(response.data));
  }, []);
  const pokemonLegends = (id: any) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setResposta(response.data);
        setOpenModal(true);
      });
  };
  console.log(data, 'data');

  return (
    <div className='container'>
      <Head>
        <title>Pokedex | All Pokemons</title>
      </Head>
      <HeaderComponent />
      <S.GroupLeft>
      <TypographicComponent title="All Pokemons" large />
      </S.GroupLeft>
      <S.Page>

        {data?.results?.map((item: { name: any; url: any; }, index: Key | null | undefined) => {
          return (
            <div key={index} onClick={() => pokemonLegends(item.name)}>
              <Card data={item.url} />
            </div>
          );
        })}
      </S.Page>

      <S.Modal>
        {openModal && (
          <Modal
            nome={resposta?.name}
            tipo={resposta && resposta?.types[0]?.type?.name}
            hp={resposta && resposta?.stats[0].base_stat}
            ataque={resposta && resposta?.stats[1].base_stat}
            defesa={resposta && resposta?.stats[2].base_stat}
            ataqueEspecial={resposta && resposta?.stats[3].base_stat}
            defesaEspecial={resposta && resposta?.stats[4].base_stat}
            velocidade={resposta && resposta?.stats[5].base_stat}
            imagem={resposta?.sprites?.other["official-artwork"]?.front_default}
            alt=""
            setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div >
  );
}
