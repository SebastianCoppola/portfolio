import { useState } from 'react'
//Mui:
import { Grid } from '@mui/material'
//Components:
import Marquesina from './Marquesina'
import CursoDetail from './CursoDetail'
//Data:
import cursosData from '../../data/cursos'

const CursosBox = () => {

    const [selected, setSelected] = useState(null)

    return (
        <>
            <Grid container >
                <Marquesina 
                    data={cursosData} 
                    selected={selected} 
                    setSelected={setSelected}
                />
            </Grid>
            <Grid container justifyContent='center' sx={{marginTop:'25px'}}>
                <CursoDetail curso={selected} />
            </Grid>
        </>
    )
}

export default CursosBox