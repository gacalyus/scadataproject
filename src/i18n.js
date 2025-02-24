import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from "i18next-http-backend";


i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        lng: 'tr',
    })

export default i18n;