import { useRef } from 'react';
import { Button, Container, ContainerTitle } from './ComponentsStyles';

export const CompUseRef = () => {
    const inputRef = useRef()

    const showInputRef = ()=> {
        const { value } = inputRef.current
        alert(value)
    }

    return ( 
        <Container >
            <ContainerTitle title='UseRef'/>
            <input className='border-2 rounded m-2' ref={inputRef} type='text' />
            <Button 
                onClick={showInputRef}
            >
                Mostrar Log
            </Button>
        </Container>
     );
}
 
