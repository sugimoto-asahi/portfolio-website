import React from 'react';
import styles from './About.module.css';
import { Card } from '@components/Card/Card.jsx';
import text_styles from '@styles/text.module.css';
import SubCard from '@components/SubCard/SubCard.jsx';
import Paragraph from '@components/Paragraph/Paragraph.jsx';
import Spacer from '@components/Spacer/Spacer.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';

function About() {
    const { t } = useLanguage();
    return (
        <div className={styles.cards}>
            <Card>
                <Paragraph size={1}>{t('about.education.title')}</Paragraph>
                <Spacer size={1}/>
                <Paragraph size={2}>
                    {t('about.education.body1')}
                    {' '}<span className={text_styles.p2Bold}>{t('about.education.body1.bold')}</span>.
                </Paragraph>
                <Spacer size={2}/>
                <Paragraph size={2}>
                    {t('about.education.body2')}
                    {' '}<span className={text_styles.p2Bold}>{t('about.education.body2.bold')}</span>.
                </Paragraph>
            </Card>
            <Card>
                <Paragraph size={1}>{t('about.skills.title')}</Paragraph>
                <Spacer size={1}/>
                <div className={styles.subcardContainer}>
                    <SubCard title='C++'>{t('about.skills.cpp')}</SubCard>
                    <SubCard title='Graphics'>{t('about.skills.graphics')}</SubCard>
                    <SubCard title='Web'>{t('about.skills.web')}</SubCard>
                    <SubCard title='Scripting'>{t('about.skills.scripting')}</SubCard>
                </div>
            </Card>
            <Card>
                <Paragraph size={1}>{t('about.tools.title')}</Paragraph>
                <Spacer size={1}/>
                <div className={styles.subcardContainer}>
                    <SubCard title='Unreal Engine'>{t('about.tools.unreal')}</SubCard>
                    <SubCard title='Unity'>{t('about.tools.unity')}</SubCard>
                    <SubCard title='Linux'>{t('about.tools.linux')}</SubCard>
                    <SubCard title='C++ Toolchains'>{t('about.tools.toolchains')}</SubCard>
                </div>
            </Card>
        </div>
    );
}

export default About;
