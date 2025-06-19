import React from 'react'
import styles from './Works.module.css'
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import text_styles from "@styles/text.module.css";
import SubCard from "@components/SubCard/SubCard.jsx";

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
                    <Card title="Main Project">
                        <p className={text_styles.p2}>
                            This is my main project showcase. It demonstrates my
                            skills in web development
                            and design. The project involved creating a
                            responsive website with modern UI/UX principles.
                        </p>
                        <p className={text_styles.p2}>
                            Technologies used include <span
                            className={text_styles.p2Bold}>React</span>,
                            <span
                                className={text_styles.p2Bold}> CSS Modules</span>,
                            and
                            <span className={text_styles.p2Bold}> Responsive Design</span>.
                        </p>
                    </Card>
                    <div className={styles.subcardRow}>
                        <SubCard title="Project 1">
                            A smaller project focusing on frontend development
                            with React and CSS animations.
                        </SubCard>
                        <SubCard title="Project 2">
                            Another smaller project showcasing backend
                            integration with Node.js and Express.
                        </SubCard>
                    </div>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    );
}

export default Works;
