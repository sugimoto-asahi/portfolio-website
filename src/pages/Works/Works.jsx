import React from 'react'
import styles from './Works.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {LinkCard} from "@components/ProjectCard/LinkCard.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";

function Works() {
    return (
        <div className={styles.root}>
            <div className={styles.works}>
                <Sidebar>
                    <Button route='/' linkText='Home'/>
                    <Button route='/about' linkText='About'/>
                    <Button route='/works' linkText='Works'/>
                    <Button route='/contact' linkText='Contact'/>
                </Sidebar>
                <div className={styles.cards}>
                    <LinkCard
                        image='https://placehold.co/600x400'
                        route='/njin'
                        className={styles.projectCard}>
                        <Paragraph size={1}>njin</Paragraph>
                        <Paragraph size={2}>is an ECS game engine built from
                            scratch in C++.</Paragraph>
                        <Spacer size={1}/>
                        Built completely from scratch
                        in C++, using a minimal amount of libraries. Features
                        include a user-friendly ECS system,
                        and a highly configurable Vulkan renderer.
                        Initially intended as a learning experience,
                        it has taken on a life of its own over time.
                        Its feature set is now sufficient to support a
                        simple game project.
                    </LinkCard>

                    <LinkCard
                        route='/rich-within-reach'
                        className={styles.projectCard}>
                        <Paragraph size={1}>Rich Within Reach</Paragraph>
                        <Paragraph size={2}>is a scam education game, made in
                            Unity</Paragraph>
                        <Spacer size={1}/>
                        <MediaFrame
                            media={'public/assets/rich-within-reach.png'}/>
                    </LinkCard>
                    <LinkCard title='Ooga Booga'
                              description='is an arena boss battle, made in Unreal Engine'
                              route='/ooga-booga'
                              className={styles.projectCard}
                              image='https://placehold.co/600x400'
                    >
                        <Paragraph size={1}>Ooga Booga</Paragraph>
                        <Paragraph size={2}>is an arena boss battle, made in
                            Unreal Engine</Paragraph>
                        {/*You are a caveman. Roam the arid lands, scavenging for*/}
                        {/*resources to craft weapons*/}
                        {/*to take down the woolly mammoth threatening your*/}
                        {/*village.*/}
                    </LinkCard>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    );
}

export default Works;
