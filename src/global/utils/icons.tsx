import bug from '../assets/icons/pokemon/bug.png';
import dark from '../assets/icons/pokemon/dark.png';
import dragon from '../assets/icons/pokemon/dragon.png';
import electric from '../assets/icons/pokemon/electric.png';
import fairy from '../assets/icons/pokemon/fairy.png';
import fighting from '../assets/icons/pokemon/fighting.png';
import fire from '../assets/icons/pokemon/fire.png';
import flying from '../assets/icons/pokemon/flying.png';
import ghost from '../assets/icons/pokemon/ghost.png';
import grass from '../assets/icons/pokemon/grass.png';
import ground from '../assets/icons/pokemon/ground.png';
import ice from '../assets/icons/pokemon/ice.png';
import normal from '../assets/icons/pokemon/normal.png';
import poison from '../assets/icons/pokemon/poison.png';
import psychic from '../assets/icons/pokemon/psychic.png';
import rock from '../assets/icons/pokemon/rock.png';
import steel from '../assets/icons/pokemon/steel.png';
import water from '../assets/icons/pokemon/water.png';

const icons = {
   bug: bug,
   dark: dark, 
   dragon: dragon,
   electric: electric,
   fairy: fairy,
   fighting: fighting,
   fire: fire,
   flying: flying,
   ghost: ghost,
   grass: grass,
   ground: ground,
   ice: ice,
   normal: normal, 
   poison: poison,
   psychic: psychic,
   rock: rock,
   steel: steel, 
   water: water
} 

export function searchIcon(search: string | any[][]){
   
   if(search){
      search = Object.entries(icons).filter(icon => icon[0] === search);
      return search[0][1];
   }
}
