import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './es.json'
import en from './en.json'

i18n.use(initReactI18next).init({
    defaultLanguage: 'en',
    resources:{
        es: {
            translation : es
        },
        en: {
            translation : en
        },
    },
})

export default i18n
