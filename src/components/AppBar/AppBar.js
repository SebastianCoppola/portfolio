import { useState } from 'react'
//Mui:
import { Grid, IconButton } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
//Components:
import Links from './Links'
import Config from './Config'
import { useTheme } from '@emotion/react'
import { useGlobalContext } from '../../context/Context'
import Logo from './Logo'

const AppBar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const themeProvider = useTheme()
    const { theme } = useGlobalContext()

    return (
        <Grid container alignItems='center' 
            sx={{
                position:'fixed', top: 0, left: 0, right: 0, 
                padding:'15px 25px 15px 25px', 
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex:'1000',
                ...themeProvider.themes[theme]
            }}
        >
           
            {/* LOGO */}
            <Grid item xs={6} md={2}>
                <Logo />
            </Grid>

            {/* LINKS */}
            <Grid item xs={0} md={8} sx={{display:{xs:'none',md:'block'}}} >
                <Links direction='row'/>
            </Grid>

            {/* LANGUAGE & THEME */}
            <Grid item xs={0} md={2} sx={{display:{xs:'none',md:'block'}}}>
                <Config />
            </Grid>

            {/* HAMBURGUER */}
            <Grid item xs={6} md={0} sx={{display:{sm:'block',md:'none'}}}>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={()=>setOpenMenu(!openMenu)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            {/* HAMBURGUER MENU */}
            <Grid container 
                style={{ 
                    maxHeight: openMenu ? '1000px' : '0', 
                    transition: 'max-height 0.7s ease-in-out', 
                    overflow: 'hidden' 
                }}
            >
                {openMenu && 
                    <Grid container direction='column'>
                        <Grid item>
                            <Links direction='column' setOpenMenu={setOpenMenu}/>
                        </Grid>
                        <Grid item style={{marginTop:'20px'}}>
                            <Config />
                        </Grid>
                    </Grid>
                }
            </Grid>

        </Grid>
    )
}

export default AppBar