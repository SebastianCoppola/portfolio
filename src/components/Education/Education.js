//Mui:
import { Grid, Typography } from '@mui/material'
import { MenuBook } from '@mui/icons-material'
//Translation:
import { useTranslation } from 'react-i18next'
//Components:
import CursosBox from './CursosBox'

const Education = () => {

    const { t } = useTranslation()

    return (
        <>
            <Grid container alignItems='center' gap={2}>
                <MenuBook fontSize='large'/>
                <Typography style={{fontSize:'1.3em', fontWeight:700}}>
                    {t('education')}
                </Typography>
            </Grid>
            <Grid container justifyContent='center' alignItems='flex-start' style={{marginTop:'20px'}}>
                <CursosBox />
            </Grid>
        </>
    )
}

export default Education