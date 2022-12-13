import { useState, useEffect } from "react";
import * as S from './styles.card'
import axios from "axios";
// import { searchIcon } from "../../utils/icons";

export default function Card({ data }:any) {
    const [poke, setPoke] = useState()

    const InfoAllPoke = (url: any) => {
        useEffect(() => {
            axios
                .get(url)
                .then((response) => {
                    setPoke(response.data);

                })
        }, [url]);
        return poke
    }

    const call = InfoAllPoke(data)

    const typePower = (Background: any) => {
        switch (Background) {
            case 'fire': return 'var(--bg-poke-color-dark-fire)';
            case 'water': return 'var(--bg-poke-color-dark-water)';
            case 'grass': return 'var(--bg-poke-color-dark-grass)';
            case 'bug': return 'var(--bg-poke-color-dark-grass)';
            case 'dragon': return 'var(--bg-poke-color-dark-dragon)';
            case 'electric': return 'var(--bg-poke-color-dark-electric)';
            case 'dark': return 'var(--bg-poke-color-dark-dark)';
            case 'flying': return 'var(--bg-poke-color-dark-flying)';
            case 'normal': return 'var(--bg-poke-color-dark-normal)';
            case 'fighting': return 'var(--bg-poke-color-dark-fighting)';
            case 'rock': return 'var(--bg-poke-color-dark-rock)';
            case 'ice': return 'var( --bg-poke-color-dark-ice)';
            case 'steel': return 'var(--bg-poke-color-dark-steel)';
            case 'poison': return 'var(--bg-poke-color-dark-poison)';
            case 'ghost': return 'var(--bg-poke-color-dark-ghost)';
            case 'psychic': return 'var(--bg-poke-color-dark-psychic)';
            case 'ground': return 'var(--bg-poke-color-dark-ground)';
            case 'fairy': return 'var(--bg-poke-color-dark-fairy)'
            default: '#98bbb7'
        }        
    };

    // const typeHandler = () => {
    //     if (types[1]) {
    //       return types[0].type.name + " | " + types[1].type.name;
    //     }
    //     return types[0].type.name;
    //   };
   console.log(call,`call`);
   
    return (
        <>
            <S.Card cor={(typePower(call && call?.types && call?.types[0]?.type?.name))} >
                <S.Name>{call?.name}</S.Name><br/>
                {/* <span></span> */}
                <S.WidImg>
                <S.Image src={call?.['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} />
                {/* <img src={searchIcon(call?.types[0].type.name)} alt="icon" /> */}
                </S.WidImg>
            </S.Card>

        </>

    )

}