import React from 'react';
import './Njin.module.css';
import '../../global.module.css';
import styles from './Njin.module.css';
import TextCard from "../TextCard/TextCard.jsx";
import Paragraph from "../Text/Paragraph/Paragraph.jsx";
import Title from "../Text/Title/Title.jsx";

export function Njin() {
    return (
        <div className={styles['root']}>
            <div className={styles['title']}>
                <h1>Njin</h1>
            </div>
            <div className={styles['intro']}>
                <div className={styles['intro__title']}>
                    <Title level={1}>INTRODUCTION</Title>
                </div>
                <TextCard>
                    <Paragraph>
                        Njin (stylised njin) is a custom game engine
                        / framework written from scratch in C++. The
                        project was started in late 2024, and is actively in
                        development.
                    </Paragraph>
                    <Paragraph>
                        The project was initially intended as a learning
                        experience
                        -
                        the more I used modern commercial engines like Unreal
                        Engine
                        and Unity,
                        the more I noticed the depth of the abstractions they
                        provide.
                    </Paragraph>
                    <Paragraph>
                        It became difficult to understand how to use these
                        engines
                        to
                        implement a very specific behaviour I wanted. The deeper
                        I
                        dove the more
                        I realised how out of grasp the inner workings of these
                        engines were. That's when I decided to write my own game
                        engine
                        from scratch, to understand how engines work and what
                        they
                        actually do,
                        so that I can manipulate them effortlessly to fit my
                        vision.
                    </Paragraph>
                </TextCard>
            </div>
        </div>
    );
}
