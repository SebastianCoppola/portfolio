//Utils:
import { SECTION_ID } from "./helpers/const"
//Mui:
import { Grid } from "@mui/material"
import { useTheme } from "@emotion/react"
//Components:
import AppBar from "./components/AppBar/AppBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Education from "./components/Education/Education"
import Projects from "./components/Projects/Projects"
import ContactMe from "./components/ContactMe/ContactMe"
import Footer from "./components/Footer/Footer"
//Context:
import { useGlobalContext } from "./context/Context"

function App() {
    
    const { theme } = useGlobalContext()
    const themeProvider = useTheme()

    return (
        <Grid 
            id={SECTION_ID.HOME} 
            sx={themeProvider.themes[theme]}
        >
            <section id={SECTION_ID.HOME}>
                <AppBar />
            </section>
            <main style={{padding: '70px 30px 70px 30px'}}>
                <section id={SECTION_ID.ABOUT_ME}>
                    <Grid container justifyContent='center' sx={{height:{xs:'',md:'80vh'}}}>
                        <Grid item xs={12} md={9} container>
                            <AboutMe />
                        </Grid>
                    </Grid>
                </section>
                <section id={SECTION_ID.EDUCATION}>
                    <Grid container justifyContent='center' sx={{marginTop:'80px', height:{xs:'',md:'80vh'}}}>
                        <Grid item xs={12} md={9}>
                            <Education />
                        </Grid>
                    </Grid>
                </section>
                <section id={SECTION_ID.PROJECTS}>
                    <Grid container justifyContent='center' sx={{marginTop:'80px', height:{xs:'',md:'70vh'}}}>
                        <Grid item xs={12} md={9} container>
                            <Projects />
                        </Grid>
                    </Grid>
                </section>
                <section id={SECTION_ID.CONTACT_ME}>
                    <Grid container justifyContent='center' sx={{marginTop:'80px'}}>
                        <Grid item xs={12} md={9} container>
                            <ContactMe />   
                        </Grid>
                    </Grid>
                </section>
            </main>
            <section>
                <Footer />
            </section>
        </Grid>
    )
}

export default App
