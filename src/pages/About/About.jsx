import React from 'react'
import styles from './About.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import text_styles from "@styles/text.module.css";
import SubCard from "@components/SubCard/SubCard.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";

function About() {
    return (
        <div className={styles.root}>
            <div className={styles.about}>
                <Sidebar>
                    <Button route='/' linkText='Home'/>
                    <Button route='/about' linkText='About'/>
                    <Button route='/works' linkText='Works'/>
                    <Button route='/contact' linkText='Contact'/>
                </Sidebar>
                <div className={styles.cards}>
                    <Card>
                        <Paragraph size={1}>Education</Paragraph>
                        <Spacer size={1}/>
                        <Paragraph size={2}>
                            I graduated from the National University
                            of Singapore with a Bachelor's Degree
                            <span className={text_styles.p2Bold}>
                                in Computer Science
                            </span>.
                        </Paragraph>
                        <Spacer size={2}/>
                        <Paragraph size={2}>
                            My specialisation is in
                            <span className={text_styles.p2Bold}>
                                Computer Graphics and Games
                            </span>.
                        </Paragraph>
                    </Card>
                    <Card>
                        <Paragraph size={1}>Skills</Paragraph>
                        <Spacer size={1}/>
                        <div className={styles.subcardContainer}>
                            <div className={styles.subcardRow}>
                                <SubCard title="C++">4 years of modern C++(11
                                    and
                                    up)</SubCard>
                                <SubCard title="Graphics">1 year of OpenGL + 1
                                    year
                                    of
                                    Vulkan</SubCard>
                            </div>
                            <div className={styles.subcardRow}>
                                <SubCard title="Web">Enough JS/HTML/CSS to make
                                    this website</SubCard>
                                <SubCard title="Scripting">Python, Lua,
                                    bash</SubCard>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <Paragraph size={1}>Tools</Paragraph>
                        <Spacer size={1}/>
                        <div className={styles.subcardContainer}>
                            <div className={styles.subcardRow}>
                                <SubCard title="Unreal Engine">6-month team game
                                    project + 6 months personal
                                    experience</SubCard>
                                <SubCard title="Unity">6-month team game
                                    project</SubCard>
                            </div>
                            <div className={styles.subcardRow}>
                                <SubCard title="Linux">4 years of working
                                    with
                                    the OS and GNU tools</SubCard>
                                <SubCard title="C++ Toolchains">CMake,
                                    vcpkg, both MSVC and gcc</SubCard>
                            </div>
                        </div>
                    </Card>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>);
}

export default About;
