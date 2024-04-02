import { useState } from "react"
//Mui:
import { Grid, IconButton } from "@mui/material"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material/'
//Hooks:
import { useTheme } from "@emotion/react"
import { useGlobalContext } from "../../context/Context"

const Card = ({content, boxWidth, position}) => {
    return (
        <div style={{
            width:`${boxWidth/2-15}px`,
            minWidth:`${boxWidth/2-15}px`,
            maxWidth:`${boxWidth/2-15}px`,
            display:'flex',
            justifyContent: (position === 0) ? 'flex-end' :  (position === 1) ? 'center' : (position === 2) ? 'flex-start' : 'center',
            alignItems:'center',
        }}>
            <div style={{
                width: '100% ',
                height: '100% ',
                opacity: (position === 0 || position === 2) ? '0.8' : (position === 1) ? '1' : '0',
                transform: (position === 0 || position === 2) ? 'scale(0.5)' : (position === 1) ? '' : 'scale(0)',
                marginRight: position === 0 ? '-27%' : '',
                marginLeft: position === 2 ? '-27%' : '',
                boxShadow: '1px 1px 7px #808080',
                boxSizing:'border-box',
                transition: 'all 0.3s ease-in-out'
            }}>
                { content }
            </div>
        </div>
    )
}

const Carousel = ({ data, width, activeSlide, setActiveSlide }) => {

    const themeProvider = useTheme()
    const { theme } = useGlobalContext()

    const [margin, setMargin] = useState(25)
    
    const handleBack = () => {
        setActiveSlide(activeSlide - 1)
        setMargin(margin + 50)
    }

    const handleForward = () => {
        setActiveSlide(activeSlide + 1)
        setMargin(margin - 50)
    }

    return (
        <Grid container justifyContent='center' >
            <div style={{
                width: `${width}px`,
                margin: '0 auto',
            }}>
                <div style={{
                    display:'flex',
                    padding:'10px 0',
                    gap:'15px',
                    marginLeft: `${margin}%`,
                    transition: 'margin 0.3s ease-in-out',
                }}>
                    {data.map((content, index) => {
                        return (
                            <Card 
                                key={index}
                                content={content} 
                                position={
                                    index === (activeSlide - 1) ? 0
                                        : index === activeSlide ? 1
                                        : index === (activeSlide + 1) ? 2
                                        : 3
                                }
                                boxWidth={width}
                            />
                        )
                    })}
                </div>
            </div>

            <Grid container justifyContent='center' style={{marginTop:'20px'}}>
                <IconButton
                    onClick={handleBack}
                    disabled={activeSlide === 0}
                >
                    <ArrowBackIos style={{color: themeProvider.themes[theme].color}}/>
                </IconButton>
                <IconButton
                    onClick={handleForward}
                    disabled={activeSlide === (data.length - 1)}
                >
                    <ArrowForwardIos style={{color: themeProvider.themes[theme].color}}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Carousel
