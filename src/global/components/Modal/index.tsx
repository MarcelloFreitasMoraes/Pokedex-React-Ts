import React from 'react'
import { IModal } from '../../types/pokemon'
import NotFound from '../404'
import * as S from './styles.modal'

export default function Modal({ data, nome, imagem, setOpenModal }: IModal) {
    
    return (
        <S.Container>
            <S.Content >
                {!nome &&
                    <S.Typography>
                        <p>Nome:{data?.name}</p>
                        <p>Tipo:{data?.types[0]?.type?.name} <span>|{data?.types[1]?.type?.name}</span></p>
                        <p>HP:{data?.stats[0].base_stat}</p>
                        <p>Ataque:{data?.stats[1].base_stat}</p>
                        <p>Defesa:{data?.stats[2].base_stat}</p>
                        <p>Ataque-Especial:{data?.stats[3].base_stat}</p>
                        <p>Defesa-Especial:{data?.stats[4].base_stat}</p>
                        <p>Velocidade:{data?.stats[5].base_stat}</p>
                    </S.Typography>
                }
                {!imagem ? (
                    <div>
                        <S.Image src={data?.sprites?.other["official-artwork"]?.front_default}/>
                    </div>

                ) : (
                    <NotFound/>
                )}
                {!nome &&
                <S.Bot>
                    <S.Modality onClick={() => setOpenModal(false)}>X</S.Modality>
                </S.Bot>
                }   
            </S.Content >
        </S.Container>
    )
}