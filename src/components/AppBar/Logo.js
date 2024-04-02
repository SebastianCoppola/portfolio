import { useState } from 'react'
//Mui:
import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
//Utils:
import { SECTION_ID } from '../../helpers/const'

const useStyles = makeStyles({
    hoverAnimation: {
        transition: 'transform 0.5s ease-in-out',
        animation: '$rotateAnimation 0.5s ease-in-out',
    },
    '@keyframes rotateAnimation': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(720deg)',
        },
    },
})

const Logo = () => {

    const classes = useStyles()

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 500)
        let section = document.getElementById(SECTION_ID.HOME)
        section.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Grid container justifyContent={{ sm: 'flex-start', md: 'center' }}>
            <Typography
                fontSize='1.6em'
                sx={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer'
                }}
                className={isClicked ? classes.hoverAnimation : ''}
                onClick={handleClick}
            >
                SC
            </Typography>
        </Grid> 
    )
}

export default Logo