//Mui:
import { IconButton } from '@mui/material'
import { makeStyles } from '@mui/styles'
//Context:
import { useGlobalContext } from '../../context/Context'
//Utils:
import { LANG } from '../../helpers/const'
//Icons:
import SpainFlag from '../../assets/lang/spain-flag.png'
import UsaFlag from '../../assets/lang/usa-flag.png'

const useStyles = makeStyles({
    activeLang: {
        height: '25px',
        opacity: 1,
        animation: '$themeAnimation 0.5s ease-in-out',
    },
    '@keyframes themeAnimation': {
       '0%': {opacity: 0, transform: 'scale(0) rotate(720deg)'},
       '50%': {opacity: 0.5, transform: 'scale(0.5) rotate(360deg)'},
       '100%': {opacity: 1, transform: 'scale(1) rotate(0deg)'},
    },
})

const LangSwitch = () => {

    const { lang, handleChangeLang } = useGlobalContext()

    const classes = useStyles()

    return (
        <IconButton onClick={handleChangeLang}>
            {lang === LANG.ES &&
                <img src={UsaFlag} alt='usa-flag' className={classes.activeLang}/>
            }
            {lang === LANG.EN &&
                <img src={SpainFlag} alt='spain-flag' className={classes.activeLang}/>
            }
        </IconButton>
    )
}

export default LangSwitch