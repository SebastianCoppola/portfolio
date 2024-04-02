//Mui;
import { Grid, Typography } from '@mui/material'
//Context:
import { useGlobalContext } from '../../context/Context'
//Translation:
import { useTranslation } from 'react-i18next'

const CursoDetail = ({ curso }) => {

    const { lang } = useGlobalContext()
    const { t } = useTranslation()

    return (
        <Grid container justifyContent='center' alignItems='center' sx={{ minHeight:'200px' }}>
            {!curso ?
                <Typography sx={{fontSize:'.9em'}}>
                    {t('selectChip')}
                </Typography>
            :
                <Grid item xs={12} md={10} container
                    sx={{
                        borderRadius:'20px',
                        boxShadow: '1px 1px 7px #808080',
                        marginTop:'20px',
                        position: 'relative',
                        overflow:'hidden'
                    }}
                >
                    <Grid item xs={12} md={4}>
                        <Grid container gap={1} sx={{padding:'20px 17px'}}>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize:'1.3em', fontWeight:700}}>
                                    {curso.title[lang]}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize:'1em', color:'orange', fontWeight:700}}>
                                    {curso.year} - {curso.academy}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize:'.9em', marginTop:'10px', textAlign:'justify'}}>
                                    {curso.description[lang]}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} container sx={{margin:0, padding:0}}>
                        {curso.img ?
                            <img 
                                src={curso.img} 
                                alt='certificado' 
                                style={{
                                    width:'100%', 
                                    height:'100%', 
                                }}
                            />
                        :
                            <Grid container alignItems='center' justifyContent='center' sx={{height:'300px', backgroundColor:'grey'}}>
                                <Typography sx={{fontSize:'.8em', color:'white'}}>
                                    {t('diplomaEnCurso')}
                                </Typography>
                            </Grid>
                        }
                    </Grid>
                </Grid>
            }


        </Grid>
    )
}

export default CursoDetail