//Mui:
import { useTheme } from '@emotion/react'
import { Grid, Typography } from '@mui/material'
//Translation:
import { useTranslation } from 'react-i18next'
import { useGlobalContext } from '../../context/Context'

const Footer = () => {

    const { t } = useTranslation()
    const { theme } = useGlobalContext()
    const themeProvider = useTheme()

    return (
        <Grid container alignItems='center' justifyContent='center'
            sx={{
                position:'static', bottom: 0, left: 0, right: 0, 
                padding:'15px 25px 15px 25px', 
                boxShadow: '-4px -4px -6px rgba(0, 0, 0, 0.1)',
                ...themeProvider.themes[theme]
            }}
        >
            <Typography style={{fontSize:'.9em', textAlign:'center'}} >
                { t('copyright') }
            </Typography>
        </Grid>
    )
}

export default Footer