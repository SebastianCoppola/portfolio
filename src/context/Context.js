import { createContext, useContext, useEffect, useState } from 'react'
//Const:
import { LANG, LOCAL_STORAGE, THEME } from '../helpers/const'
//Lang:
import i18next from 'i18next'

const Context = createContext()

export const ContextProvider = ({ children }) => {

    const [lang, setLang] = useState((localStorage.getItem(LOCAL_STORAGE.LANG) ?? LANG.EN))
    const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE.THEME) ?? THEME.DARK)

    useEffect(()=>{
        i18next.changeLanguage(lang)
    },[lang])

    const handleChangeLang = () => {
        let newLang = lang === LANG.ES ? LANG.EN : LANG.ES
        setLang(newLang)
        localStorage.setItem(LOCAL_STORAGE.LANG, newLang)
    }

    const handleChangeTheme = () => {
        let newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE.THEME, newTheme)
    }

    return (
        <Context.Provider value={{ lang, handleChangeLang, theme, handleChangeTheme  }}>
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () => useContext(Context)