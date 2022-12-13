import Head from 'next/head'
import * as S from "./styles"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../../global/components/Modal'
import Card from '../../global/components/Card';
import { HeaderComponent } from '../../global/components/Header';
import { TypographicComponent } from '../../global/components/Typographic';

export default function Pokemon() {

  const [pokemons, setPokemons] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);

  const pokemonLegends = (id: any) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        setOpenModal(true);
      });
  };

  const getPokemons = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then((res) => setPokemons(res.data.results))
    .catch((err) => console.log(err));
  }

  useEffect(() =>{
    getPokemons()
  },[])

  const pokemonFilter = (name:any) => {
    
    if(name === ''){
      getPokemons()
    }
    let filteredPokemons:any = []
    for(let i in pokemons){
      //@ts-ignore
      if(pokemons[i].name.includes(name)){  
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
      <HeaderComponent pokemonFilter={pokemonFilter}/>
      <S.GroupLeft>
      <TypographicComponent title="All Pokemons" large />
      </S.GroupLeft>
      <S.Page>

        {pokemons &&
          Object.values(pokemons).map((item:any, index:any) => {
          return (
            <div key={index} onClick={() => pokemonLegends(item.name)}>
              <Card data={item.url} />
            </div>
          );
        })}
      </S.Page>

      <S.Modal>
        {openModal && (
          <Modal data={data} setOpenModal={setOpenModal} />
        )}
      </S.Modal>
    </div >
  );
}
