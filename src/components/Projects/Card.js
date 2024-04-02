//Mui:
import { Button, Grid, Tooltip, Typography } from "@mui/material"
//Translation:
import { useTranslation } from "react-i18next"
//Context:
import { useGlobalContext } from "../../context/Context"

const Card = ({ content, disabled }) => {

    const { t } = useTranslation()
    const { lang } = useGlobalContext()

    return (
        <Grid style={{padding:'0 0 15px 0'}}>
            <Grid container>
                <img src={content.img} alt='card-img' style={{width:'100%', height:'auto'}}/>
            </Grid>
            <Grid style={{marginTop:'10px', padding:'0 15px'}}>
                <Grid container direction='column' justifyContent='space-between' style={{height:'100%', width:'100%'}}>
                    <Grid item>
                        <Typography style={{fontSize:'1em', fontWeight:'700'}}>
                            {content.title}
                        </Typography>
                        <Typography style={{fontSize:'.8em'}}>
                            {content.description[lang]}
                        </Typography>
                    </Grid>                
                    <Grid item container gap={1} style={{marginTop:'15px'}}>
                        {content?.stack?.map((it, index) => (
                            <Tooltip title={it.title} key={index}>
                                <div><it.icon color={'orange'} size={'2em'}/></div>
                            </Tooltip>
                        ))}
                    </Grid>
                    <Grid item container gap={1} style={{marginTop:'20px'}}>
                        <Button 
                            size='small' 
                            variant='contained' 
                            style={{fontSize:'.7em'}} 
                            disabled={disabled || !content.url}
                            onClick={()=>window.open(content.url, '_blank')}
                        >
                            {t("visitSite")}
                        </Button>
                        <Button 
                            size='small' 
                            variant='contained' 
                            style={{fontSize:'.7em'}} 
                            disabled={disabled || !content.gitHub}
                            onClick={()=>window.open(content.gitHub, '_blank')}
                        >
                            
                            {t("repository")}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Card