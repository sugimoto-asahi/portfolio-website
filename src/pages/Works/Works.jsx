import React from 'react'
import styles from './Works.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {LinkCard} from "@components/ProjectCard/LinkCard.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function Works() {
    const {lang, toggleLang, t} = useLanguage();
    return (
        <div className={styles.root}>
            <div className={styles.works}>
                <Sidebar>
                    <Button route='/' linkText={t('nav.home')} color='red'/>
                    <Button route='/about' linkText={t('nav.about')} color='red'/>
                    <Button route='/works' linkText={t('nav.works')} color='red'/>
                    <Button route='/contact' linkText={t('nav.contact')} color='red'/>
                </Sidebar>
                <div className={styles.cards}>
                    <LinkCard
                        image='https://placehold.co/600x400'
                        route='/njin'
                        className={styles.projectCard}>
                        <Paragraph size={1}>{t('works.njin.title')}</Paragraph>
                        <Paragraph size={2}>{t('works.njin.subtitle')}</Paragraph>
                        <Spacer size={1}/>
                        {t('works.njin.body')}
                    </LinkCard>

                    <LinkCard
                        route='/rich-within-reach'
                        className={styles.projectCard}>
                        <Paragraph size={1}>{t('works.rwr.title')}</Paragraph>
                        <Paragraph size={2}>{t('works.rwr.subtitle')}</Paragraph>
                        <Spacer size={1}/>
                        <MediaFrame
                            media={'images/rich-within-reach/rich-within-reach.png'}/>
                    </LinkCard>
                    <LinkCard
                              route='/ooga-booga'
                              className={styles.projectCard}
                              image='https://placehold.co/600x400'
                    >
                        <Paragraph size={1}>{t('works.ooga.title')}</Paragraph>
                        <Paragraph size={2}>{t('works.ooga.subtitle')}</Paragraph>
                        <Spacer size={1}/>
                        <MediaFrame
                            media={'/images/ooga-booga/ooga-booga-poster.jpeg'}/>
                    </LinkCard>
                </div>
                <Button onClick={toggleLang} type='action' linkText={lang === 'en' ? 'JP' : 'EN'} color='red'/>
            </div>
        </div>
    );
}

export default Works;
