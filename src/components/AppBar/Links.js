//Mui:
import { Grid } from '@mui/material'
//Components:
import Link from './Link'
//Utils:
import { SECTION_ID } from '../../helpers/const'
//Translation:
import { useTranslation } from 'react-i18next'

const Links = ({ direction, setOpenMenu }) => {

    const { t } = useTranslation()

    return (
        <Grid container justifyContent='center' alignItems='center' direction={direction} gap={3}>
            <Link title={t('home')} idSection={SECTION_ID.HOME} setOpenMenu={setOpenMenu}/>
            <Link title={t('aboutMe')} idSection={SECTION_ID.ABOUT_ME} setOpenMenu={setOpenMenu}/>
            <Link title={t('education')} idSection={SECTION_ID.EDUCATION} setOpenMenu={setOpenMenu}/>
            <Link title={t('projects')} idSection={SECTION_ID.PROJECTS} setOpenMenu={setOpenMenu}/>
            <Link title={t('contactMe')} idSection={SECTION_ID.CONTACT_ME} setOpenMenu={setOpenMenu}/>
        </Grid>
    )
}

export default Links