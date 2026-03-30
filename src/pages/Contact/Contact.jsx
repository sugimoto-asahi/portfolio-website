import React, {useState} from 'react';
import styles from './Contact.module.css';
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import text_styles from "@styles/text.module.css";
import '@styles/global.module.css';
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function Contact() {
    const {lang, toggleLang, t} = useLanguage();
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
                    <Button route='/' linkText={t('nav.home')} color='red'/>
                    <Button route='/about' linkText={t('nav.about')} color='red'/>
                    <Button route='/works' linkText={t('nav.works')} color='red'/>
                    <Button route='/contact' linkText={t('nav.contact')} color='red'/>
                </Sidebar>
                <div className={styles.cards}>
                    <Card>
                        <Paragraph size={1}>{t('contact.title')}</Paragraph>
                        <Paragraph size={2}>{t('contact.body')}</Paragraph>
                        <div className={styles.messageContainer}>
                            <div className={styles.messageInputContainer}>
                                <textarea
                                    className={styles.messageInput}
                                    placeholder={t('contact.placeholder')}
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Button
                                    className={styles.sendButtonContainer}
                                    linkText={t('contact.send')}
                                    onClick={handleSend}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <Button onClick={toggleLang} type='action' linkText={lang === 'en' ? 'JP' : 'EN'} color='red'/>
            </div>
        </div>
    );
}

export default Contact;
