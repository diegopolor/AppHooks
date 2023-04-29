import { useState } from 'react'
import { useForm } from '../hooks'
import { 
    Container,
    ContainerTitle,
    Button,
    Input,
    EditIcon,
    ReloadIcon 
} from './'



const PersonForm = ({ name, lastName, age, open, changeState, resetForm })=> ( //eslint-disable-line
    <form className="bg-white flex flex-col" >
        <Input 
            name='name' 
            onChange={changeState} 
            placeholder="Nombre"
            type="text" 
            value={name} 
        />
        <Input 
            name='lastName' 
            onChange={changeState} 
            placeholder="Apellido" 
            type="text" 
            value={lastName} 
            />
        <Input 
            name='age' 
            onChange={changeState} 
            placeholder="Edad" 
            type="number" 
            value={age} 
        />
        <div className="flex flex-row justify-between my-2">
            <Button 
                onClick={open}
            >
                Enviar
            </Button>
            <Button onClick={resetForm} >
                <ReloadIcon />
            </Button>
        </div> 
    </form>
)


export const ObjectState = ()=> {
    const [formOpen, setFormOpen] = useState(true)
    const { name, lastName, age, onInputValueForm, onResetForm }  = useForm({
        name: '',
        lastName : '',
        age: ''
    })

    const handlerFormOpen = ()=> setFormOpen(!formOpen)

    return(
        <>
            <Container> 
                <ContainerTitle title='ObjectState' />
                <h2 className="italic my-2" >Datos de persona:</h2>
                {
                    !formOpen && (
                        <>
                            <ul className="italic">
                                <li>Nombre: {name}</li>
                                <li>Apellido: {lastName} </li>
                                <li>Edad: {age}</li>
                            </ul>
                            <hr className="my-5" />
                            <button onClick={handlerFormOpen} >
                                <EditIcon />
                            </button> 
                        </>
                    )
                } 
                {formOpen && 
                    <PersonForm 
                        resetForm={onResetForm}
                        changeState={onInputValueForm} 
                        name={name} 
                        lastName={lastName} 
                        age={age} 
                        open={handlerFormOpen}
                    />
                }
            </Container>  
           
        </>
    )
}

export default ObjectState