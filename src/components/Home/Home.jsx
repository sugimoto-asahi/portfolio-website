import React from 'react';
import styles from './Home.module.css';
import { Card } from '@components/Card/Card.jsx';
import Paragraph from '@components/Paragraph/Paragraph.jsx';
import Spacer from '@components/Spacer/Spacer.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';

function Home() {
    const { t } = useLanguage();
    return (
        <Card className={styles.card}>
            <Paragraph size={1}>{t('home.greeting')}</Paragraph>
            <Spacer size={1}/>
            <Paragraph size={2}>{t('home.intro')}</Paragraph>
            <Spacer size={2}/>
            <Paragraph size={2}>{t('home.body1')}</Paragraph>
            <Spacer size={2}/>
            <Paragraph size={2}>{t('home.body2')}</Paragraph>
        </Card>
    );
}

export default Home;
