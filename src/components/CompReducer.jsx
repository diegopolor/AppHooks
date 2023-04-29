import { useEffect } from 'react';
import { Button, Container, ContainerTitle, Input } from './ComponentsStyles';
import { useForm } from '../hooks';
import { useSounds } from '../hooks/useSounds';

const SoundsForm = ({ onAddData })=> { //eslint-disable-line
    const { id, name, duration, onInputValueForm, onResetForm } = useForm({
        id: new Date().getTime() * 3,
        name: '',
        duration: ''
    })

    const submit = (e)=> {
        e.preventDefault()
        onAddData({ id, name, duration })
        onResetForm()
    }

    return(
        <form onSubmit={submit} className="my-5">
            <h2> Ingresar nueva canción: </h2>
            <Input placeholder ='Nombre'  name='name' value={name} onChange={onInputValueForm} />
            <Input placeholder ='Duración' name='duration' value={duration} onChange={onInputValueForm} />
            <div className="flex justify-center mt-5">
                <Button>Enviar</Button>
                <Button onClick={onResetForm}>Borrar</Button>
            </div>           
        </form>
    )
}

export const CompReducer = () => {

    const { sounds, onAddSong, onDeleteSond } = useSounds([])

    useEffect(()=> {  
        localStorage.setItem('sounds', JSON.stringify( sounds ))
    }, [sounds])

    return (
        <Container>
            <ContainerTitle title='Reducer'/>
            <SoundsForm onAddData={onAddSong} />
            <hr />
            <p className="italic my-5" >Lista de canciones: </p>
            {
                sounds && sounds.map && sounds.map(({ id, name, duration })=> (
                    <div key={id} >
                        <ul className="m-5 border-2 p-5">
                            <li><span className="italic font-semibold">ID:</span>  { id } </li>
                            <li><span className="italic font-semibold">Nombre:</span> { name } </li>
                            <li><span className="italic font-semibold">Duración:</span>  { duration } </li>
                            <div className="mt-5">
                                <Button onClick={()=>{  onDeleteSond(id) }}>  Borrar </Button>
                            </div>
                        </ul>             
                    </div>
                ))
            }  
        </Container>
    );
}
 
