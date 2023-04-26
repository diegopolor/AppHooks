import { Button } from "../ComponentsStyles";
import { memo } from 'react'

export const Hijo = memo(({ numero, incrementar }) => {//eslint-disable-line
    console.log('  Me volví a generar :(  ');

    return (
        <Button onClick={ () => incrementar( numero ) }>
            { numero }
        </Button>
    )
})
