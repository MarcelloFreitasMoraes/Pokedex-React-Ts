import { FormEvent } from 'react';
import { InputComponent } from '../Form/Input';
import { Form } from '../Form/styles';
import { LogoComponent } from '../Logo'
import { TypographicComponent } from '../Typographic';
import * as S from "./styles"

export function HeaderComponent({pokemonFilter, pokemons}:any) {
  return (
      <div className="container">
    <S.Content>
      <S.Group>
        <LogoComponent />
        <Form>
          <InputComponent
            placeholder="Search for your pokemon..."
            onChange={(e: any) => pokemonFilter(e.target.value)}
            value={pokemons} 
            onClick={function (event: FormEvent<Element>): void {
              throw new Error('Function not implemented.');
            }}
            iconSearch
            />
        </Form>
        <S.GroupLeft>
        <TypographicComponent title="All Pokemons" large />
      </S.GroupLeft> 
      </S.Group>
    </S.Content>
      </div>
  );
}
