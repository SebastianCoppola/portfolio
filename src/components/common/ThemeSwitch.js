//Context:
import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useGlobalContext } from '../../context/Context'
//Mui:
import { LightMode, DarkMode } from '@mui/icons-material'
//Utils:
import { THEME } from '../../helpers/const'

const useStyles = makeStyles({
    activeTheme: {
        opacity: 1,
        animation: '$themeAnimation 0.5s ease-in-out',
    },
    '@keyframes themeAnimation': {
       '0%': {opacity: 0, transform: 'scale(0) rotate(720deg)'},
       '50%': {opacity: 0.5, transform: 'scale(0.5) rotate(360deg)'},
       '100%': {opacity: 1, transform: 'scale(1) rotate(0deg)'},
    },
})

const ThemeSwitch = () => {

    const { theme, handleChangeTheme } = useGlobalContext()

    const classes = useStyles()

    return (
        <IconButton onClick={handleChangeTheme}>
            {theme === THEME.DARK && 
                <LightMode 
                    // fontSize='medium'
                    style={{color:'#ffff'}}
                    className={classes.activeTheme}
                />
            }
            {theme === THEME.LIGHT && 
                <DarkMode 
                    // fontSize='medium'
                    style={{color:'black'}}
                    className={classes.activeTheme}
                />
            }
        </IconButton>
    )
}

export default ThemeSwitch