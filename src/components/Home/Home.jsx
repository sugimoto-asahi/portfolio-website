import React, {useState} from 'react';
import styles from './Home.module.css';
import '@styles/global.module.css'
import text_styles from '@styles/text.module.css'
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import Sidebar from "@components/Sidebar/Sidebar.jsx"

function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.home}>
                <Sidebar>
                    <Button route='/' linkText='Home'/>
                    <Button route='/about' linkText='About'/>
                    <Button route='/works' linkText='Works'/>
                    <Button route='/contact' linkText='Contact'/>
                </Sidebar>
                <Card title="Hi." className={styles.card} type='title'>
                    <p className={text_styles.p2}>I'm Tan Juay Hee, an aspiring
                        game
                        developer.</p>
                    <p className={text_styles.p2}>This is my portfolio and
                        homepage for my works, or works
                        that
                        I've been involved in.</p>
                    <p className={text_styles.p2}> Use the navigation panel on
                        the left to explore. </p>
                </Card>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    )
}

export default Home;
