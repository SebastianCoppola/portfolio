//Mui:
import { Button, Grid, Typography } from '@mui/material'
//Components:
import Stack from './Stack'
//Assets: 
import fotoPerfil from '../../assets/commons/foto-perfil.jpg'
import { LANG, SECTION_ID } from '../../helpers/const'
//Translation:
import { useTranslation } from 'react-i18next'
//Urls:
import { URL_GITHUB, URL_ENGLISH_CV, URL_SPANISH_CV} from '../../helpers/url'
//Context:
import { useGlobalContext } from '../../context/Context'

const AboutMe = () => {

    const { t } = useTranslation()
    const { lang } = useGlobalContext()

    return (
        <Grid container alignItems='center' sx={{marginTop:{xs:'30px', md:''}}}>
            <Grid item xs={12} md={8}>
                <Grid sx={{display:{xs:'block', md:'none'}, marginBottom:'10px'}}>
                    <img 
                        src={fotoPerfil} 
                        alt='foto perfil' 
                        style={{maxWidth:'100%', boxShadow: '1px 1px 7px #808080'}}
                    />
                </Grid>
                <Typography fontSize={15} style={{fontWeight:700}}>
                    {t("hi")}
                </Typography>
                <Typography fontSize={25} style={{fontWeight:700, color:'orange', textShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'}}>
                    {t("sebastianCoppola")}
                </Typography>
                <Typography fontSize={15} style={{textAlign:'justify', marginTop:'10px'}}>
                    {t("bio1")}
                </Typography>
                <Typography fontSize={15} style={{textAlign:'justify', marginTop:'10px'}}>
                    {t("bio2")}
                </Typography>
                <Typography fontSize={15} style={{textAlign:'justify', marginTop:'10px'}}>
                    {t("bio3")}
                </Typography>
                <Grid container style={{marginTop:'20px'}}>
                    <Stack />
                </Grid>
                <Grid container gap={2} style={{marginTop:'30px'}}>
                    <Button
                        variant='contained'
                        onClick={()=> 
                            lang === LANG.EN ? 
                                window.open(URL_ENGLISH_CV, '_blank')
                            :
                                window.open(URL_SPANISH_CV, '_blank')
                        }
                    >{t("viewCv")}</Button> 
                    <Button
                        variant='contained'
                        onClick={()=>{ 
                            window.scrollTo({
                                top: document.getElementById(SECTION_ID.CONTACT_ME).offsetTop - 100, 
                                behavior: 'smooth'
                            })
                        }}                            
                    >{t("contactMe")}</Button> 
                    <Button
                        variant='contained'
                        onClick={()=>window.open(URL_GITHUB, '_blank')}
                    >{t("gitHub")}</Button> 
                </Grid>
            </Grid>
            <Grid item xs={4} sx={{display: {xs: 'none',md: 'block'}, padding: '0 0 0 50px'}}>
                <img 
                    src={fotoPerfil} 
                    alt='foto perfil' 
                    style={{width:'100%', maxWidth:'100%', boxShadow: '1px 1px 7px #808080'}}
                />
            </Grid>
        </Grid>
    )
}

export default AboutMe