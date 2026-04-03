import React from 'react'
import styles from './Articles.module.css'
import {LinkCard} from "@components/ProjectCard/LinkCard.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function Articles() {
    const {t} = useLanguage();
    return (
        <div className={styles.articles}>
            <div className={styles.content}>
                <LinkCard route='/articles/scene-to-screen'>
                    <Paragraph size={2}>{t('articles.scene.title')}</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph>{t('articles.scene.body')}</Paragraph>
                </LinkCard>
                <LinkCard route='/articles/the-vulkan-model'>
                    <Paragraph size={2}>{t('articles.vulkan.title')}</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph>{t('articles.vulkan.body')}</Paragraph>
                </LinkCard>
            </div>
        </div>
    );

}

export default Articles;
