import React from 'react'
import styles from './About.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import text_styles from "@styles/text.module.css";
import SubCard from "@components/SubCard/SubCard.jsx";

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
                    <Card title="Education">
                        <p>
                        <span className={text_styles.p2}>I graduated from the National
                        University
                        of Singapore with a Bachelor's Degree </span>
                            <span
                                className={text_styles.p2Bold}>in Computer Science</span>
                            <span className={text_styles.p2}>.</span>
                        </p>
                        <p>
                            <span className={text_styles.p2}> My specialisation was in </span>
                            <span
                                className={text_styles.p2Bold}>Computer Graphics and Games</span>
                            <span className={text_styles.p2}>.</span>
                        </p>
                        <div className={styles.subcardContainer}>
                            <SubCard title="Unreal Engine">6-month team game
                                project + 6 months personal experience</SubCard>
                            <SubCard title="Placeholder 1">Description for
                                placeholder skill 1</SubCard>
                            <SubCard title="Unity">6-month team game
                                project</SubCard>
                            <SubCard title="Placeholder 2">Description for
                                placeholder skill 2</SubCard>
                        </div>
                    </Card>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>);
}

export default About;
