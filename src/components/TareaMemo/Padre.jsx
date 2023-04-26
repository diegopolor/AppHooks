import { useCallback, useState } from 'react';
import { Hijo } from './Hijo'
import { Container, ContainerTitle } from '../';


export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValor((current)=> current + num )
        },
    [])
    
    return (
        <Container>
            <ContainerTitle title='Tarea Memo'/>
            <p className='italic'>Evitar que se vuelva a renderizar el componente hijo</p>
            <p className='italic'> Total: { valor } </p>
            <hr />
            <div className='flex w-full'>
                {
                    numeros.map( numero => (
                        <Hijo 
                            key={ numero }
                            numero={ numero }
                            incrementar={ incrementar }
                        />
                    ))
                }
            </div>
        </Container>
    )
}
