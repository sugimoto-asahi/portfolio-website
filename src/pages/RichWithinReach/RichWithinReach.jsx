import React from 'react';
import styles from './RichWithinReach.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import text_styles from '@styles/text.module.css'
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";

function RichWithinReach() {
    return (
        <div className={styles.richWithinReach}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>Rich Within Reach</Paragraph>
                    <Paragraph size={2}>is a 6-month game
                        project
                        built in Unity in a team of 4.</Paragraph>
                </Card>


                <Card>
                    <Paragraph size={2}>You are an entrepreneur.</Paragraph>
                    <Spacer size={1}/>
                    <MediaFrame
                        media='https://www.youtube.com/watch?v=fu57lGoPLKQ'/>
                    <Spacer size={1}/>
                    <Paragraph>
                        Rich Within Reach is a <span
                        className={text_styles.pBold}>scam education game.</span> Both
                        business opportunities and scams present themselves via
                        the
                        phone, the daily newspaper, and emails. The player must
                        navigate
                        carefully, accepting business offers while avoiding
                        scams. In the
                        process, the game teaches the player to recognise the
                        way scams
                        show up in the real world.
                    </Paragraph>
                    <Spacer size={5}/>
                    <Paragraph>
                        <span className={text_styles.pBold}>You are Macs</span>,
                        a wealthy investor presented with numerous "investment"
                        opportunities. Are these legitimate
                        investment opportunities that will bring Macs a step
                        closer to retirement,
                        or scams that will drain him of his hard-earned
                        fortune? <span
                        className={text_styles.pBold}>Your call.</span>
                    </Paragraph>
                </Card>
            </div>

            <Button route='' linkText='JP'/>
        </div>);
}

export default RichWithinReach;
