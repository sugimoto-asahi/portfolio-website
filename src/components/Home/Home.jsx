import React from 'react';
import styles from './Home.module.css';
import '@styles/global.module.css'
import text_styles from '@styles/text.module.css'
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import Sidebar from "@components/Sidebar/Sidebar.jsx"
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function Home() {
    const {lang, toggleLang, t} = useLanguage();
    return (
        <div className={styles.root}>
            <div className={styles.home}>
                <Sidebar>
                    <Button route='/' linkText={t('nav.home')} color='red'/>
                    <Button route='/about' linkText={t('nav.about')} color='red'/>
                    <Button route='/works' linkText={t('nav.works')} color='red'/>
                    <Button route='/articles' linkText={t('nav.articles')} color='red'/>
                    <Button route='/contact' linkText={t('nav.contact')} color='red'/>
                </Sidebar>
                <Card className={styles.card}>
                    <Paragraph size={1}>{t('home.greeting')}</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph size={2}>{t('home.intro')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={2}>{t('home.body1')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={2}>{t('home.body2')}</Paragraph>
                </Card>
                <Button onClick={toggleLang} type='action' linkText={lang === 'en' ? 'JP' : 'EN'} color='red'/>
            </div>
        </div>
    )
}

export default Home;
