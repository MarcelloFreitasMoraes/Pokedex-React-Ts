import Head from 'next/head'
import * as S from "./styles"
import { useEffect, useState } from 'react';
import axios from 'axios';
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
      .then((response) => setData(response.data.results));
  }, []);
  const pokemonLegends = (id: any) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setResposta(response.data);
        setOpenModal(true);
      });
  };

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

        {data &&
          Object.values(data).map((item:any, index:any) => {
          return (
            <div key={index} onClick={() => pokemonLegends(item.name)}>
              <Card data={item.url} />
            </div>
          );
        })}
      </S.Page>

      <S.Modal>
        {openModal && (
          <Modal data={resposta} setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div >
  );
}
