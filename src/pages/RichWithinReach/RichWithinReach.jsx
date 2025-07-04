import React from 'react';
import styles from './RichWithinReach.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import text_styles from '@styles/text.module.css'

function RichWithinReach() {
    return (
        <div className={styles.richWithinReach}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card
                    title='Rich Within Reach'
                    type='title'><p className={text_styles.p2}>is a 6-month game
                    project
                    built in Unity in a team of 4.</p>
                </Card>


                <Card title='You are an entrepreneur.' type='content'>
                    <p>
                        <span
                            className={text_styles.p}>Rich Within Reach is a </span>
                        <span
                            className={text_styles.pBold}>scam education game. </span>
                        <span>
                        Both business opportunities and scams present themselves via the
                        phone, the daily newspaper, and emails. The player must navigate
                        carefully, accepting business offers while avoiding scams. In the
                        process, the game teaches the player to recognise the way scams
                        show up in the real world.</span>
                    </p>
                    <p>
                        <span className={text_styles.pBold}>
                            You are Macs</span>

                        <span className={text_styles.p}>
                            , a wealthy investor presented with numerous “investment” opportunities. Are these legitimate
                            investment opportunities that will bring Macs a step closer to retirement,
                            or scams that will drain him of his hard-earned fortune?
                        </span>

                        <span className={text_styles.pBold}>
                            Your call.
                        </span>

                    </p>
                </Card>
            </div>

            <Button route='' linkText='JP'/>
        </div>);
}

export default RichWithinReach;