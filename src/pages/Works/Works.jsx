import React from 'react';
import styles from './Works.module.css';
import { LinkCard } from '@components/ProjectCard/LinkCard.jsx';
import MediaFrame from '@components/MediaFrame/MediaFrame.jsx';
import Paragraph from '@components/Paragraph/Paragraph.jsx';
import Spacer from '@components/Spacer/Spacer.jsx';
import { useLanguage } from '@i18n/LanguageContext.jsx';

function Works() {
    const { t } = useLanguage();
    return (
        <div className={styles.cards}>
            <LinkCard image='https://placehold.co/600x400'
                      route='/njin'
                      className={styles.projectCard}>
                <Paragraph size={1}>{t('works.njin.title')}</Paragraph>
                <Paragraph size={2}>{t('works.njin.subtitle')}</Paragraph>
                <Spacer size={1}/>
                {t('works.njin.body')}
            </LinkCard>

            <LinkCard route='/rich-within-reach'
                      className={styles.projectCard}>
                <Paragraph size={1}>{t('works.rwr.title')}</Paragraph>
                <Paragraph size={2}>{t('works.rwr.subtitle')}</Paragraph>
                <Spacer size={1}/>
                <MediaFrame media={'images/rich-within-reach/rich-within-reach.png'}/>
            </LinkCard>

            <LinkCard route='/ooga-booga'
                      className={styles.projectCard}>
                <Paragraph size={1}>{t('works.ooga.title')}</Paragraph>
                <Paragraph size={2}>{t('works.ooga.subtitle')}</Paragraph>
                <Spacer size={1}/>
                <MediaFrame media={'/images/ooga-booga/ooga-booga-poster.jpeg'}/>
            </LinkCard>
        </div>
    );
}

export default Works;
