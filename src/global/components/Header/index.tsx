import { FormEvent } from 'react';
import { FormComponent } from '../Form';
import { InputComponent } from '../Form/Input';
import { Form } from '../Form/styles';
import { LogoComponent } from '../Logo'

import { Content } from "./styles";

export function HeaderComponent({pokemonFilter, pokemons}:any) {
  return (
    <Content>
      <div className="container">
        <LogoComponent />

        <Form>
          <InputComponent
            placeholder="Busque por seu pokemon..."
            onChange={(e: any) => pokemonFilter(e.target.value)}
            value={pokemons} 
            onClick={function (event: FormEvent<Element>): void {
              throw new Error('Function not implemented.');
            } }/>
        </Form>
      </div>
    </Content>
  );
}
