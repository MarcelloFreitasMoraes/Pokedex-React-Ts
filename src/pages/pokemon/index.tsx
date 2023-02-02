import Head from 'next/head'
import * as S from "../../styles/styles.pokemon"
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../global/components/Modal'
import Card from '../../global/components/Card';
import { HeaderComponent } from '../../global/components/Header';
import NotFound from '../../global/components/404';
import  { PokeballMini }  from '../../global/components/Loading';

export default function Pokemon() {

  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const pokemonLegends = (id: never[]) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        setOpenModal(true);
        setLoading(false);
      });
  };

  const getPokemons = () => {
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

  const pokemonFilter = (name: string) => {

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

  if (loading) {
    return <PokeballMini />;
  } else if (!pokemons) {
    return <div></div>;
  } else {
    return ( 
    
    <div className='container'>
      <Head>
        <title>Pokedex | All Pokemons</title>
      </Head>
          {pokemons.length > 0 ? (
      <Fragment>
      <HeaderComponent pokemonFilter={pokemonFilter} value={pokemons} /><S.Page>
            {pokemons &&
              Object.values(pokemons).map((item: any, index: any) => {
                return (
                  <div key={index} onClick={() => pokemonLegends(item.name)}>
                    <Card data={item.url} imageLoading={imageLoading} setImageLoading={setImageLoading} />
                  </div>
                );
              })}
          </S.Page>
          </Fragment>
          ) : (
            <NotFound />
          )}   
      <S.Modal>
        {openModal && (
          <Modal data={data} setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div >
  );
}
}
