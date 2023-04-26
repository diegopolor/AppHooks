import { memo, useMemo } from "react";
import { useCounter } from "../hooks";
import { 
    Container, 
    ContainerTitle, 
    Button, 
    LikeIcon, 
    StarIcon, 
    ShareIcon 
} from "./";


const ShowCounter = memo(({ texto, counter })=> { //eslint-disable-line
    console.log(texto)
    return (
        <p className="my-5 m-2 italic">{ texto } { counter }</p>
    )
})

export const Memorize = () => {
    const [ likesCounter, likesIncrement ] = useCounter(0)  
    const [ favCounter, favIncrement ] = useCounter(0)   
    const [ shareCount, shareIncrement ] = useCounter(0)   
    const counters = [
        {
            texto : 'likes',
            counter : likesCounter
        },
        {
            texto: 'Favoritos',
            counter: favCounter
        },
        {
            texto: 'Compartidos',
            counter : shareCount
        }
    ]

    const suma = (a, b)=>{
        const texto = `El total es: ${a + b}`
        return texto
    }
 
    const countSumas = useMemo(()=> 
        suma(likesCounter, favCounter),
        [likesCounter, favCounter]
    )

    return (  
        <Container >
            <ContainerTitle title='UseMemo' />
            <div className="flex  justify-center italic">
                {counters.map((item, index) => 
                    <ShowCounter key={index} { ...item } /> 
                 ) 
                }
            </div>
            <p>{countSumas}</p> 
            <hr className="my-5"/>
            <div className="flex flex-row my-10">   
                <Button onClick={()=> likesIncrement(1)}>
                    <LikeIcon />
                    { likesCounter }
                </Button>
                <Button onClick={()=> favIncrement(1)} >
                    <StarIcon />
                    {favCounter}
                </Button>
                <Button onClick={()=> shareIncrement(1)} >
                    <ShareIcon />
                    { shareCount }
                </Button>
            </div>
            
        </Container>

    );
}
 
