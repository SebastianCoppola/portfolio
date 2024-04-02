import { useState } from 'react'
//Mui:
import { Grid, Typography, useMediaQuery } from '@mui/material'
import { WorkHistory } from '@mui/icons-material/'
//Components:
import Carusel from './Carousel'
import Card from './Card'
//Data:
import projectsData from '../../data/projects'
//Translation:
import { useTranslation } from 'react-i18next'

const Projects = () => {

    const { t } = useTranslation()
    
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <>
            <Grid container alignItems='center'gap={2}>
                <WorkHistory fontSize='large'/>
                <Typography style={{fontSize:'1.3em', fontWeight:700}}>
                    {t('projects')}
                </Typography>
            </Grid>
            <Grid container justifyContent='center' style={{marginTop:'20px', overflow:'hidden'}}>
                <Carusel 
                    width={ useMediaQuery('(max-width:600px)') ? 600 : 800}
                    data={projectsData.map((content, index) => (
                        <Card content={content} disabled={index !== activeSlide}/>
                    ))} 
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            </Grid>
        </>
    )
}

export default Projects