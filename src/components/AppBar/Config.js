//Mui:
import { Grid } from '@mui/material'
//Components:
import ThemeSwitch from '../common/ThemeSwitch'
import LangSwitch from '../common/LangSwitch'

const Config = () => {
    return (
        <Grid container justifyContent='center' alignItems='center' gap={3}>
            <Grid item>
                <ThemeSwitch />
            </Grid> 
            <Grid item>
                <LangSwitch />
            </Grid> 
        </Grid>
    )
}

export default Config