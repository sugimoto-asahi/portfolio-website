import React from 'react'
import styles from './Works.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {ProjectCard} from "@components/ProjectCard/ProjectCard.jsx";

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
                    <ProjectCard title='njin'
                                 description='is an ECS game engine built from scratch in C++.'
                                 image='https://placehold.co/600x400'
                                 route='/njin'
                                 className={styles.projectCard}>Built
                        completely
                        from scratch in C++, using a minimal amount of
                        libraries. Features include a user-friendly ECS
                        system,
                        and a highly configurable Vulkan renderer.
                        Initially intended as a learning experience,
                        it has taken on a life of its own over time.
                        Its feature set is now sufficient to support a
                        simple
                        game project.
                    </ProjectCard>

                    <ProjectCard title='Rich Within Reach'
                                 description='is a scam education game, made in Unity'
                                 route='/rich-within-reach'
                                 className={styles.projectCard}
                                 image='public/assets/rich-within-reach.png'
                    >
                    </ProjectCard>
                    <ProjectCard title='Ooga Booga'
                                 description='is an arena boss battle, made in Unreal Engine'
                                 route='/ooga-booga'
                                 className={styles.projectCard}
                                 image='https://placehold.co/600x400'
                    >
                        You are a caveman. Roam the arid lands, scavenging for
                        resources to craft weapons
                        to take down the woolly mammoth threatening your
                        village.
                    </ProjectCard>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    );
}

export default Works;
