import React, {useState} from 'react';
import styles from './Contact.module.css';
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import text_styles from "@styles/text.module.css";
import '@styles/global.module.css';
import Paragraph from "@components/Paragraph/Paragraph.jsx";

function Contact() {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        // Handle sending the message
        console.log('Message sent:', message);
        setMessage('');
    };

    return (
        <div className={styles.root}>
            <div className={styles.contact}>
                <Sidebar>
                    <Button route='/' linkText='Home'/>
                    <Button route='/about' linkText='About'/>
                    <Button route='/works' linkText='Works'/>
                    <Button route='/contact' linkText='Contact'/>
                </Sidebar>
                <div className={styles.cards}>
                    <Card>
                        <Paragraph size={1}>Get in Touch</Paragraph>
                        <Paragraph size={2}>
                            Feel free to send me a message and I'll get back to
                            you as soon as possible.
                        </Paragraph>
                        <div className={styles.messageContainer}>
                            <div className={styles.messageInputContainer}>
                                <textarea
                                    className={styles.messageInput}
                                    placeholder="Type your message here..."
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    className={styles.sendButtonContainer}
                                    linkText="Send"
                                    onClick={handleSend}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <Button route='' linkText='JP'/>
            </div>
        </div>
    );
}

export default Contact;
