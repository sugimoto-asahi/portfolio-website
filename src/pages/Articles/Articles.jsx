import React from 'react'
import styles from './Articles.module.css'
import Button from "@components/Button/Button.jsx";
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import {LinkCard} from "@components/ProjectCard/LinkCard.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";

function Articles() {

    return (
        <div className={styles.articles}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>
            <div className={styles.content}>
                <LinkCard route='/articles/scene-to-screen'>
                    <Paragraph size={2}>From scene to screen in
                        Vulkan</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph>
                        What does it take to render an arbitrary
                        representation of a scene to the screen? In other words,
                        how do we make computers display things like we see with
                        our own eyes?
                        A mathematical discussion of the practical journey from
                        a user-defined world representation to colored
                        pixels in Vulkan.
                    </Paragraph>
                </LinkCard>
                <LinkCard route='/articles/the-vulkan-model'>
                    <Paragraph size={2}>The Vulkan model</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph>
                        Vulkan is a complex specification. This article
                        builds a mental model of the way Vulkan operates
                        with an intuitive explanation supplemented with
                        illustrations.
                    </Paragraph>
                </LinkCard>
            </div>
            <Button route='' linkText='JP'/>
        </div>
    );

}

export default Articles;
