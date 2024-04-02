//Mui:
import { Grid, Typography } from '@mui/material'
import { Call, Email, GitHub, WhatsApp } from '@mui/icons-material'
//Translation:
import { useTranslation } from 'react-i18next'
import { URL_GITHUB } from '../../helpers/url'

const ContactMe = () => {

    const { t } = useTranslation()

    return (
        <>
            <Grid container alignItems='center'gap={2}>
                <Call fontSize='large'/>
                <Typography style={{fontSize:'1.3em', fontWeight:700}}>
                    {t('contactMe')}
                </Typography>
            </Grid>
            <Grid container direction='column' gap={2} style={{marginTop:'20px'}}>
                <Grid container gap={3}>
                    <WhatsApp fontSize='small' sx={{color:'orange'}}/>
                    <Typography style={{fontSize:'.9em'}}>
                        {t("phone")}
                    </Typography>
                </Grid>
                <Grid container gap={3}>
                    <Email fontSize='small' sx={{color:'orange'}}/>
                    <Typography style={{fontSize:'.9em'}}>
                        {t("mail")}
                    </Typography>
                </Grid>
                <Grid container gap={3}>
                    <GitHub fontSize='small' sx={{color:'orange'}}/>
                    <Typography style={{fontSize:'.9em', cursor:'pointer'}} onClick={()=>window.open(URL_GITHUB, '_blank')}>
                        {t("goToGitHub")}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactMe