import React from 'react';
import styles from './RichWithinReach.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import {Card} from "@components/Card/Card.jsx";
import Button from "@components/Button/Button.jsx";
import text_styles from '@styles/text.module.css'
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import {B} from "@util/typography.jsx";
import List from "@components/List/List.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function RichWithinReach() {
    const {lang, toggleLang, t} = useLanguage();
    return (
        <div className={styles.richWithinReach}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>{t('rwr.page.title')}</Paragraph>
                    <Paragraph size={2}>{t('rwr.page.subtitle')}</Paragraph>
                </Card>


                <Card>
                    <Paragraph size={2}>{t('rwr.page.tagline')}</Paragraph>
                    <Spacer size={1}/>
                    <MediaFrame
                        media='https://www.youtube.com/watch?v=fu57lGoPLKQ'
                    />
                    <Spacer size={1}/>
                    <Paragraph>
                        {t('rwr.page.genre.prefix')}<span
                        className={text_styles.pBold}>{t('rwr.page.genre.bold')}</span>{t('rwr.page.genre.suffix')}
                    </Paragraph>
                    <Spacer size={5}/>
                    <Paragraph>
                        <span className={text_styles.pBold}>{t('rwr.page.macs.bold')}</span>
                        {t('rwr.page.macs.body')}<span
                        className={text_styles.pBold}>{t('rwr.page.macs.cta')}</span>
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('rwr.page.credits.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={3}>{t('rwr.page.credits.members')}</Paragraph>
                    <Paragraph>{t('rwr.page.credits.thanks')}</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph>
                        <B>{t('rwr.page.credits.role.lead')}</B> {' '}
                        <TextLink link={'https://github.com/bryanlzl'}>Bryan Lim Zhen Lun</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('rwr.page.credits.role.prog_coord')}</B> {' '}
                        <TextLink link={'https://github.com/TuWeile'}>Tu Weile</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('rwr.page.credits.role.prog_pm')}</B> {' '}
                        <TextLink link={'https://github.com/wurbly'}>Victor Ong Wei De</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('rwr.page.credits.role.ui')}</B>{' '}
                        <TextLink link={'https://sg.linkedin.com/in/xinyeelee'}>Lee Xinyee</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('rwr.page.credits.role.3d')}</B>{' '}
                        Tan Juay Hee
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('rwr.page.downloads.title')}</Paragraph>
                    <Spacer size={2}/>
                    <div className={styles.downloadsContainer}>
                        <Button
                            route='/downloads/Rich-Within-Reach-Windows.zip'
                            type='download'
                            linkText='Windows'/>
                        <Button
                            route='/downloads/Rich-Within-Reach-Mac.zip'
                            type='download'
                            linkText='Mac'/>
                    </div>
                </Card>


                <Card>
                    <Paragraph size={2}>{t('rwr.page.summary.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('rwr.page.summary.intro')}</Paragraph>
                    <Spacer/>
                    <Paragraph size={3}>{t('rwr.page.summary.contributions')}</Paragraph>
                    <List>
                        <span>{t('rwr.page.contrib.1')}</span>
                        <span>{t('rwr.page.contrib.2')}</span>
                        <span>{t('rwr.page.contrib.3')}</span>
                    </List>
                    <Spacer/>
                    <Paragraph>{t('rwr.page.main_menu')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/main-menu.png'
                                caption='main menu screen'/>
                    <Spacer/>
                    <Paragraph>{t('rwr.page.start_game')}</Paragraph>
                    <Spacer/>
                    <MediaFrame
                        media='/images/rich-within-reach/tutorial-start.png'
                        caption='first tutorial screen'/>
                    <Spacer/>
                    <Paragraph>{t('rwr.page.play_begins')}</Paragraph>
                    <Spacer/>

                    <MediaFrame media='images/rich-within-reach/begin-play.png'
                                caption='play begins'/>
                    <Spacer/>
                    <Paragraph>{t('rwr.page.play_intro')}</Paragraph>
                    <List>
                        <span>{t('rwr.page.models.1')}</span>
                        <span>{t('rwr.page.models.2')}</span>
                        <span>{t('rwr.page.models.3')}</span>
                        <span>{t('rwr.page.models.4')}</span>
                        <span>{t('rwr.page.models.5')}</span>
                        <span>{t('rwr.page.models.6')}</span>
                        <span>{t('rwr.page.models.7')}</span>
                        <span>{t('rwr.page.models.8')}</span>
                        <span>{t('rwr.page.models.9')}</span>
                        <span>{t('rwr.page.models.10')}</span>
                        <span>{t('rwr.page.models.11')}</span>
                        <span>{t('rwr.page.models.12')}</span>
                    </List>
                    <Spacer/>
                    <Paragraph>{t('rwr.page.progression')}</Paragraph>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/coffee-table.png'
                        caption='the newspaper'/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.ransomware')}</Paragraph>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/ransomware-scams.png'
                        caption='description of ransomware scams'/>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/ransomware-scams.png'
                        caption='the work desk'/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.laptop')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/laptop.png'
                                caption='the laptop'/>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/emails.png'
                                caption={'the player\'s inbox'}/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.legit_email')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/legitimate.png'
                                caption={'a legitimate email'}/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.scam_email')}</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/rich-within-reach/scam.png'
                                caption={'a scam email'}/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.phone')}</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/rich-within-reach/phone.png'
                                caption={'messages for the player'}/>
                    <Spacer/>

                    <Paragraph>{t('rwr.page.goal')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('rwr.page.experience.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('rwr.experience.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.experience.p2')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.experience.p3')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.experience.p4')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.experience.p5')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('rwr.page.standards.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('rwr.standards.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.p2')}</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph size={3}>{t('rwr.standards.coord.title')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.coord.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.coord.p2')}</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph size={3}>{t('rwr.standards.tex.title')}</Paragraph>
                    <Paragraph>{t('rwr.standards.tex.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.tex.p2')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.tex.p3')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.standards.tex.p4')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('rwr.page.modeling.title')}</Paragraph>
                    <Spacer size={2}/>

                    <Paragraph>{t('rwr.modeling.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.modeling.p2')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.modeling.p3')}</Paragraph>
                    <Spacer/>
                    <Paragraph>
                        {t('rwr.modeling.p4.before')}<TextLink
                            link={'https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-22-baking-normal-maps-gpu'}>{t('rwr.modeling.p4.baking')}</TextLink>{t('rwr.modeling.p4.after')}
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>{t('rwr.modeling.p5')}</Paragraph>
                </Card>
            </div>

            <Button onClick={toggleLang} type='action' linkText={lang === 'en' ? 'JP' : 'EN'}/>
        </div>);
}

export default RichWithinReach;
