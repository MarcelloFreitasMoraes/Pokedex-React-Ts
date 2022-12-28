import Head from 'next/head'
import * as S from "./styles"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../global/components/Modal'
import Card from '../../global/components/Card';
import { HeaderComponent } from '../../global/components/Header';
import { TypographicComponent } from '../../global/components/Typographic';
import NotFound from '../../global/components/404';
//import { Pokeball } from '../../global/components/Loading';

export default function Pokemon() {

  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pokemonLegends = (id: any) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        setOpenModal(true);
      });
  };

  const getPokemons = () => {
    setLoading(true);
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .then((res) => {
        setPokemons(res.data.results)
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPokemons()
  }, [])

  const pokemonFilter = (name: any) => {

    if (name === '') {
      getPokemons()
    }
    let filteredPokemons: any = []
    for (let i in pokemons) {
      //@ts-ignore
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }
    setPokemons(filteredPokemons)
  }
  return (
    <div className='container'>
      <Head>
        <title>Pokedex | All Pokemons</title>
      </Head>
      <HeaderComponent pokemonFilter={pokemonFilter} value={pokemons} />
      <S.GroupLeft>
        <TypographicComponent title="All Pokemons" large />
      </S.GroupLeft>

      {/* {loading ? (
        <Pokeball />
      ) : (        
        <> */}
          {pokemons.length > 0 ? (
            <S.Page>
              {pokemons &&
                Object.values(pokemons).map((item: any, index: any) => {
                  return (
                    <div key={index} onClick={() => pokemonLegends(item.name)}>
                      <Card data={item.url} />
                    </div>
                  );
                })}
            </S.Page>
          ) : (
            <NotFound />
          )}
        {/* </>
      )} */}
      <S.Modal>
        {openModal && (
          <Modal data={data} setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div >
  );
}
