import { useEffect, useState } from "react"
import { useCounter ,useTodos } from "../hooks"
import { 
    Container,  ContainerTitle ,
    Button,
    RowLeftIcon,
    RowRightIcon 
} from './'


const ErrorMessage = (props) => {
    const { message } = props // eslint-disable-line

    return ( 
        <>
            <p 
                className="w-full bg-rose-700 p-2 text-center text-white rounded" 
            >
                { message }
            </p> 
        </>
     )
}

//------------------

const Todo = ({ id, title, completed })=> ( //eslint-disable-line
    <div className="my-5 flex flex-col">
        <p className="italic">id: {id}</p>
        <p className="italic inline-block" >Titulo: { title }</p>
        <label className="italic" > 
            Completado: 
            <input type="checkbox" disabled checked={completed}/> 
        </label>
    </div>
)

//------------------

const SessionButtons = ({increment, decrement})=>  ( //eslint-disable-line
    <div className="flex justify-between mt-10">
        <Button
           onClick={()=>{decrement(1)}}
        >
           <RowLeftIcon />    
        </Button>
        <Button
            onClick={()=>{increment(1, 200)}}  
        >      
           <RowRightIcon />
        </Button>
    </div>
)

//------------------

export const CustomsHooks = ()=> {
    
    const [ idTodo, setIdTodo] = useState(1)
    const [ counter, increment, decrement, , setCounter ] = useCounter(idTodo)
    const { id, title, completed, loader, error } = useTodos(idTodo)

    useEffect(()=> {
      setIdTodo(counter) 
    }, [counter])
   
    const handlerIdTodo = (e)=> {
        e.preventDefault()
        const { value } = e.target[0]
        setIdTodo(value)
        setCounter(Number(value))
    }

    return(
        <Container>
            <ContainerTitle title='CustomHooks' />
            <p  className="italic my-1">Buscar Todos:</p>
            <form onSubmit={handlerIdTodo}>
                <input  className="border-2" type="number" placeholder="ingrese ID"/>
                <button className="bg-teal-600 p-1 text-white m-1 rounded"  >Enviar</button>
            </form>

            {loader ? <p>Cargando...</p> : <Todo { ...{ id, title, completed } } />}

            <SessionButtons {...{ increment, decrement }} />

            { error && <ErrorMessage message={error} />}
        </Container> 
    )

}
