import { useRef, useState } from 'react'
//Mui:
import { Grid, IconButton, Typography } from '@mui/material'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
//Emotion:
import { useTheme } from '@emotion/react'
//Context
import { useGlobalContext } from '../../context/Context'

const Chip = ({element, selected, setSelected}) => {

    const { lang } = useGlobalContext()

    const isSelected = () => {
        return element.id === selected?.id
    }
        
    return (
        <Grid 
            onClick={() => setSelected(selected?.id === element.id ? null : element)}
            style={{
                border:'1px solid grey', 
                borderRadius:'10px', 
                cursor:'pointer',
                padding: '5px 7px', 
                backgroundColor: isSelected() ? 'orange' : '', 
                boxShadow: isSelected() ? '1px 1px 7px #808080' : '',
                transition: 'boxShadow 0.2s ease-in-out, backgroundColor 0.2s ease-in-out',
            }}
        >
            <Typography noWrap 
                sx={{
                    fontSize: '.9em',
                    fontWeight:700
                }}
            >
                {element.title[lang]}
            </Typography>
        </Grid>
    )
}

const Marquesina = ({ data, selected, setSelected }) => {

    const { theme } = useGlobalContext()
    const themeProvider = useTheme()
    const containerRef = useRef(null)

    const [marginLeft, setMarginLeft] = useState(0)
    const [isLastChipVisible, setIsLastChipVisible] = useState(false)

    const handleScroll = (newMargin) => {
        setMarginLeft(newMargin)
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect()
            const lastChipRect = containerRef.current.firstChild.lastChild.getBoundingClientRect()
            setIsLastChipVisible(lastChipRect.right <= containerRect.right)
        }
    }

    return (
        <Grid container direction='row'>
            <Grid item xs={1} container justifyContent='center' alignItems='center'>
                <IconButton
                    onClick={() => handleScroll(marginLeft + 15)}
                    disabled={marginLeft === 0}
                >
                    <ArrowBackIos style={{color: themeProvider.themes[theme].color}}/>
                </IconButton>
            </Grid>
            <Grid item xs={10} container justifyContent='center' alignItems='center' sx={{margin: '0 auto', overflow:'hidden'}}  ref={containerRef}>
                <Grid 
                    container 
                    gap={2}
                    wrap='nowrap'
                    
                    sx={{
                        marginLeft: marginLeft,
                        transition: 'margin 0.5s ease-in-out'
                    }}
                >
                    {data.map((it, index) => ( 
                        <Chip 
                            key={index} 
                            element={it}
                            selected={selected}
                            setSelected={setSelected}
                        /> 
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={1} container justifyContent='center' alignItems='center'>
                <IconButton
                    onClick={() => handleScroll(marginLeft - 15)}
                    disabled={isLastChipVisible}
                >
                    <ArrowForwardIos style={{color: themeProvider.themes[theme].color}}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Marquesina