import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    };


    return (
        <div onChange={changeLanguage} style={{
            color: '#fff',
            fontSize: '1rem',
        }}>
            <input type="radio" value="en" name="language" defaultChecked /> {t('english')}
            <input type="radio" value="pl" name="language"/> {t('polish')}
        </div>
    )
};

export default LanguageSelector