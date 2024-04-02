//Mui:
import { Grid, Tooltip, Typography } from '@mui/material'
//Icons:
import stackIcons from '../../data/stackIcons'
//Translation:
import { useTranslation } from 'react-i18next'

const Stack = () => {

    const { t } = useTranslation()

    const stack = [
        stackIcons.react,
        stackIcons.javascript,
        stackIcons.typescript,
        stackIcons.java,
        stackIcons.spring,
        stackIcons.node,
        stackIcons.mysql,
        stackIcons.mongo,
        stackIcons.mui,
        stackIcons.gitlab,
        stackIcons.github,
        stackIcons.tailwind,
        stackIcons.bootstrap,
        stackIcons.next,
        stackIcons.vite,
    ]

    const setColor = () => { return 'orange' }
    const setSize = () => { return '2em' }
    
    return (
        <>
            <Grid container>
                <Typography fontSize='.8em' style={{fontWeight:'700'}} >
                    {t("stack")}
                </Typography>
            </Grid>
            <Grid container gap={1} alignItems='center' style={{marginTop:'10px'}}>
                {stack.map((it, index) => (
                    <Tooltip title={it.title} key={index}>
                        <div><it.icon color={setColor()} size={setSize()}/></div>
                    </Tooltip>
                ))}
            </Grid>
        </>
    )
}

export default Stack