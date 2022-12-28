export interface IPokemon{
    data: any
    id: number;
    name?: string;
    types: [{ type: { name: string } }];
    weight: number;
    height: number;
    stats: [{ base_stat: number; stat: { name: string } }];
  };
export interface IModal{
    data?: any;
    nome?: boolean;
    setOpenModal: (prev: boolean) => void;
    imagem?: boolean;
     };
  //(event: FormEvent) => void;