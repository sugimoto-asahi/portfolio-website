import React from 'react';
import styles from './OogaBooga.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import {B} from "@util/typography.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import List from "@components/List/List.jsx";

function OogaBooga() {
    return (
        <div className={styles.oogaBooga}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>Ooga Booga</Paragraph>
                    <Paragraph size={2}>is a 4-month game
                        project built in Unreal Engine in a team of
                        4.</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>You are a caveman.</Paragraph>
                    <Spacer size={1}/>
                    <MediaFrame
                        media='https://www.youtube.com/watch?v=h8c9ZlKnNGM'/>
                    <Spacer size={1}/>
                    <Paragraph>
                        Rich Within Reach is an <B>arena boss battle</B>.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        You are Krag. Roam the arid lands, scavenging for
                        resources to craft weapons to take down the woolly
                        mammoth
                        threatening your village.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>Credits</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={3}>Team Members</Paragraph>
                    <Paragraph>This project would not have been possible without
                        the hard work of my teammates.</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph>
                        <B>Team Lead, 3D Artist</B> {' '}
                        <TextLink link={'https://github.com/nobodyishappy'}>Tang
                            Hao
                            Liang
                        </TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>Gameplay Programmer</B> {' '}
                        <TextLink
                            link={'https://sg.linkedin.com/in/quek-sze-long'}>Qwek
                            Sze Long
                        </TextLink>
                    </Paragraph>

                    <Paragraph>
                        <B>Gameplay Programmer, Project Manager</B> {' '}
                        <TextLink link={'https://github.com/zekone'}>Ho Khee Wei
                        </TextLink>
                    </Paragraph>


                    <Paragraph>
                        <B>UI Programmer, 2D & VFX Artist</B>{' '}
                        Tan Juay Hee
                    </Paragraph>

                </Card>

                <Card>
                    <Paragraph size={2}>Downloads</Paragraph>
                    <Spacer size={2}/>
                    <div className={styles.downloadsContainer}>
                        <Button
                            route='src/assets/downloads/Ooga-Booga-Windows.zip'
                            type='download'
                            linkText='Windows'/>
                    </div>
                </Card>

                <Card>
                    <Paragraph size={2}>Summary of game</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>The following is a summary of the all the primary
                        components of the game. A list of my contributions is
                        provided, along with
                        indications of where they appear in game.</Paragraph>
                    <Spacer/>

                    <Paragraph size={3}>List of my contributions:</Paragraph>
                    <List>
                        <span>Designed most UI elements and icons</span>
                        <span>Used UMG to create the UI</span>
                        <span>Exposed UI events for gameplay programmers to
                        call to update UI</span>
                        <span>Create Niagara effects for Mammoth attacks and set up the
                        corresponding sockets and animation timing to match gameplay</span>
                        <span>Created a simple poster for the game</span>
                        <span>Composed simple background music for the game</span>
                    </List>
                    <Spacer/>

                    <Paragraph>The first screen the player sees upon launching
                        the executable
                        is the main menu.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/main-menu.png'
                                caption='main menu'/>
                    <Spacer/>

                    <Paragraph>On clicking the "Start" button, the player is
                        brought into the game.
                        They begin in a safe zone that leads to the main arena,
                        where they can
                        familiarise themselves with the controls.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/start-area.png'
                                caption='start area'/>
                    <Spacer/>

                    <Paragraph>Once the player is ready to begin play, they may
                        move
                        up the screen into the main arena.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/arena-entrance.png'
                                caption='entering the arena'/>
                    <Spacer/>
                    <Paragraph>
                        The player must avoid the mammoth chasing them,
                        while scavenging for materials in different locations
                        on the map.
                    </Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/scavenging.png'
                                caption='scavenging for three materials to make a weapon'/>
                    <Spacer/>

                    <Paragraph>The hotbar and material icons were designed by me
                        and implemented
                        with UMG. I also exposed an API to the gameplay
                        programmers such that
                        when the player picks up an item it will reflect
                        correctly in the hotbar. Other
                        APIs I exposed include changing the health bar according
                        to the caveman's current health. This allowed
                        programmers to update
                        the visual indication of the player's health when they
                        were damaged by a mammoth attack.</Paragraph>
                    <Paragraph>Once enough materials are collected, the player
                        can
                        craft a weapon and attempt to beat the mammoth. There
                        are many different
                        weapons to be discovered.</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/ooga-booga/fighting.png'
                                caption='fighting the mammoth with the newly crafted weapon'/>
                    <Spacer/>
                    <Paragraph>I used Niagara effects for the mammoth's attacks,
                        timing it to its attack animations and making sure the
                        size of the effects match
                        the actual hitboxes of the attacks.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/ooga-booga/attacked.png'
                                caption='the mammoth swinging its trunk at the caveman'/>
                </Card>
            </div>
            <Button route='' linkText='JP'/>
        </div>

    );
}

export default OogaBooga;