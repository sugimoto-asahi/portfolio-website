import React, {useState} from 'react';
import styles from './Home.module.css';
import '@styles/global.module.css'
import text_styles from '@styles/text.module.css'
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import Sidebar from "@components/Sidebar/Sidebar.jsx"
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";

function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.home}>
                <Sidebar>
                    <Button route='/' linkText='Home'/>
                    <Button route='/about' linkText='About'/>
                    <Button route='/works' linkText='Works'/>
                    <Button route='/articles' linkText='Articles'/>
                    <Button route='/contact' linkText='Contact'/>
                </Sidebar>
                <Card className={styles.card}>
                    <Paragraph size={1}>Hi.</Paragraph>
                    <Spacer size={1}/>
                    <Paragraph size={2}>I'm Tan Juay Hee, an aspiring game
                        developer.</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={2}>This is my portfolio and
                        homepage for my works, or works
                        that I've been involved in.</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={2}> Use the navigation panel on
                        the left to explore.</Paragraph>
                </Card>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    )
}

export default Home;
