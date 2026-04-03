import React from 'react';
import styles from './OogaBooga.module.css'
import {Card} from "@components/Card/Card.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import {B} from "@util/typography.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import List from "@components/List/List.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function OogaBooga() {
    const {t} = useLanguage();
    return (
        <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>{t('ooga.page.title')}</Paragraph>
                    <Paragraph size={2}>{t('ooga.page.subtitle')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('ooga.page.tagline')}</Paragraph>
                    <Spacer size={1}/>
                    <MediaFrame
                        media='https://www.youtube.com/watch?v=h8c9ZlKnNGM'/>
                    <Spacer size={1}/>
                    <Paragraph>
                        <B>{t('ooga.page.genre')}</B>
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>{t('ooga.page.plot')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('ooga.page.credits.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={3}>{t('ooga.page.credits.members')}</Paragraph>
                    <Paragraph>{t('ooga.page.credits.thanks')}</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph>
                        <B>{t('ooga.page.credits.role.lead_artist')}</B> {' '}
                        <TextLink link={'https://github.com/nobodyishappy'}>Tang Hao Liang</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('ooga.page.credits.role.gameplay')}</B> {' '}
                        <TextLink link={'https://sg.linkedin.com/in/quek-sze-long'}>Qwek Sze Long</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('ooga.page.credits.role.gameplay_pm')}</B> {' '}
                        <TextLink link={'https://github.com/zekone'}>Ho Khee Wei</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>{t('ooga.page.credits.role.ui_vfx')}</B>{' '}
                        Tan Juay Hee
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('ooga.page.downloads.title')}</Paragraph>
                    <Spacer size={2}/>
                    <div className={styles.downloadsContainer}>
                        <Button
                            route='/downloads/Ooga-Booga-Windows.zip'
                            type='download'
                            linkText='Windows'/>
                    </div>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('ooga.page.summary.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('ooga.page.summary.intro')}</Paragraph>
                    <Spacer/>

                    <Paragraph size={3}>{t('ooga.page.summary.contributions')}</Paragraph>
                    <List>
                        <span>{t('ooga.page.contrib.1')}</span>
                        <span>{t('ooga.page.contrib.2')}</span>
                        <span>{t('ooga.page.contrib.3')}</span>
                        <span>{t('ooga.page.contrib.4')}</span>
                        <span>{t('ooga.page.contrib.5')}</span>
                        <span>{t('ooga.page.contrib.6')}</span>
                    </List>
                    <Spacer/>

                    <Paragraph>{t('ooga.page.main_menu')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/main-menu.png'
                                caption='main menu'/>
                    <Spacer/>

                    <Paragraph>{t('ooga.page.start_area')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/start-area.png'
                                caption='start area'/>
                    <Spacer/>

                    <Paragraph>{t('ooga.page.arena_entrance')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/arena-entrance.png'
                                caption='entering the arena'/>
                    <Spacer/>
                    <Paragraph>{t('ooga.page.scavenging')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/scavenging.png'
                                caption='scavenging for three materials to make a weapon'/>
                    <Spacer/>

                    <Paragraph>{t('ooga.page.hotbar')}</Paragraph>
                    <Paragraph>{t('ooga.page.crafting')}</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/ooga-booga/fighting.png'
                                caption='fighting the mammoth with the newly crafted weapon'/>
                    <Spacer/>
                    <Paragraph>{t('ooga.page.niagara')}</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/attacked.png'
                                caption='the mammoth swinging its trunk at the caveman'/>
                </Card>
        </div>
    );
}

export default OogaBooga;
