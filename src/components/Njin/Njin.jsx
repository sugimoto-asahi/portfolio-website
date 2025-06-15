import React from 'react';
import './Njin.module.css';
import '../../global.module.css';
import styles from './Njin.module.css';
import Paragraph from "../Text/Paragraph/Paragraph.jsx";
import TitleAndTextCard from "../TitleAndTextCard/TitleAndTextCard.jsx";
import {Link} from "react-router";
import List from "../Text/List/List.jsx";
import ListItem from "../Text/List/ListItem.jsx";

export function Njin() {
    return (
        <div className={styles['root']}>
            <div className={styles['title']}>
                <h1>Njin</h1>
            </div>
            <TitleAndTextCard title="INTRODUCTION" titleLevel={1}>
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
                <Paragraph>Over time, the project is slowly growing into
                    a viable game engine. The current development target is
                    producing an
                    isometric game. This page serves as the
                    landing page for all things njin.
                    The architecture, features, design philosophy,
                    implementation
                    articles, roadmap for the engine, and more, are described.
                    Use the navigation bar on the left to navigate to the
                    desired section. </Paragraph>
            </TitleAndTextCard>

            <TitleAndTextCard title="FEATURES"
                              titleLevel={1}>
                <List>
                    <ListItem>Simple physics engine
                        <ListItem>abc</ListItem>
                    </ListItem>
                </List>
            </TitleAndTextCard>

        </div>
    );
}
