import { Grid, Typography } from '@mui/material'

const Link = ({ title, idSection, setOpenMenu }) => {

    const scrollToSection = () => {
        let section = document.getElementById(idSection)
        let topOffset = section.offsetTop - 100
        window.scrollTo({top: topOffset, behavior: 'smooth'})
        if(setOpenMenu) setOpenMenu(false)
    }

    return (
        <Grid item>
            <Typography
                sx={{
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                }}
                onClick={scrollToSection}
            >
                { title }
            </Typography>
        </Grid>
    )
}

export default Link