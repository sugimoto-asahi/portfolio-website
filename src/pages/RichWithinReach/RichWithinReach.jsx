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

function RichWithinReach() {
    return (
        <div className={styles.richWithinReach}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>Rich Within Reach</Paragraph>
                    <Paragraph size={2}>is a 4-month game
                        project
                        built in Unity in a team of 5.</Paragraph>
                </Card>


                <Card>
                    <Paragraph size={2}>You are an entrepreneur.</Paragraph>
                    <Spacer size={1}/>
                    <MediaFrame
                        media='https://www.youtube.com/watch?v=fu57lGoPLKQ'
                    />
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

                <Card>
                    <Paragraph size={2}>Credits</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph size={3}>Team Members</Paragraph>
                    <Paragraph>This project would not have been possible without
                        the hard work of my teammates.</Paragraph>
                    <Spacer size={3}/>
                    <Paragraph>
                        <B>Team Lead, Gameplay Programmer</B> {' '}
                        <TextLink link={'https://github.com/bryanlzl'}>Bryan Lim
                            Zhen
                            Lun</TextLink>
                    </Paragraph>
                    <Paragraph>
                        <B>Gameplay Programmer, Team Coordination</B> {' '}
                        <TextLink link={'https://github.com/TuWeile'}>Tu
                            Weile</TextLink>
                    </Paragraph>

                    <Paragraph>
                        <B>Gameplay Programmer, Project Manager</B> {' '}
                        <TextLink link={'https://github.com/wurbly'}>Victor Ong
                            Wei De
                        </TextLink>
                    </Paragraph>

                    <Paragraph>
                        <B>UI Designer, 2D Artist</B>{' '}
                        <TextLink link={'https://sg.linkedin.com/in/xinyeelee'}>Lee
                            Xinyee</TextLink>
                    </Paragraph>

                    <Paragraph>
                        <B>3D Artist</B>{' '}
                        Tan Juay Hee
                    </Paragraph>


                </Card>

                <Card>
                    <Paragraph size={2}>Downloads</Paragraph>
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
                    <Paragraph size={2}>Summary of game</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>The following is summary of all the primary
                        components
                        of the game. A list of my contributions is provided,
                        along with
                        indications of where they appear in game. Technical
                        discussion regarding the things I learned about graphics
                        and assets
                        in game development
                        are in the subsequent sections.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph size={3}>List of my contributions:</Paragraph>
                    <List>
                        <span>Establishment of an asset pipeline for 3D models and textures,
                        ensuring smooth import into Unity</span>
                        <span>Standardisation of assets such that programmers have an easier time working with them</span>
                        <span>Creation of all 3D models and their textures</span>
                    </List>
                    <Spacer/>
                    <Paragraph>The first screen the player sees upon launching
                        the executable is the main
                        menu.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/main-menu.png'
                                caption='main menu screen'/>
                    <Spacer/>
                    <Paragraph>On clicking the "Start Game" button, the player
                        is immediately brought to the start of the tutorial.
                        The tutorial is advanced by navigating with the buttons
                        on the left and right side of the screen. The tutorial
                        may be ended
                        with the button in the top left corner.
                    </Paragraph>
                    <Spacer/>
                    <MediaFrame
                        media='/images/rich-within-reach/tutorial-start.png'
                        caption='first tutorial screen'/>
                    <Spacer/>
                    <Paragraph>Upon ending the tutorial, play
                        begins.</Paragraph>
                    <Spacer/>

                    <MediaFrame media='images/rich-within-reach/begin-play.png'
                                caption='play begins'/>
                    <Spacer/>
                    <Paragraph>The player controls Macs, the 2D human. He is an
                        entrepreneur
                        who just started his own investment business. The play
                        area is the small office he works in.
                        All 3D models and textures in the room were created by
                        me. The comprehensive list of models (and their
                        textures) contributed are:
                    </Paragraph>
                    <List>
                        <span>Stone walls</span>
                        <span>Window with pane</span>
                        <span>Old chair</span>
                        <span>Coffee table</span>
                        <span>Flower pot</span>
                        <span>Bookshelf</span>
                        <span>Desk</span>
                        <span>Laptop</span>
                        <span>Phone</span>
                        <span>Stack of papers</span>
                        <span>Office chair</span>
                        <span>Floor</span>
                    </List>
                    <Spacer/>
                    <Paragraph>The player progresses through the day, looking
                        for source of "information" to further their
                        investment business. In order to succeed, they must
                        avoid scams to avoid losing their hard earned money,
                        and pick up leads to generate revenue. There are several
                        sources of information the player can interact
                        with. The player can learn about what these sources are,
                        as well as types of scams,
                        from the newspaper on the coffee table.</Paragraph>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/coffee-table.png'
                        caption='the newspaper'/>
                    <Spacer/>

                    <Paragraph>For example, one type of scam is the ransomware
                        scam, hidden in things like emails and that, when
                        installed, take control of the
                        user's computer and demand money from them.</Paragraph>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/ransomware-scams.png'
                        caption='description of ransomware scams'/>
                    <Spacer/>

                    <MediaFrame
                        media='/images/rich-within-reach/ransomware-scams.png'
                        caption='the work desk'/>
                    <Spacer/>

                    <Paragraph>The player can use their laptop to browse emails
                        for opportunities.</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/laptop.png'
                                caption='the laptop'/>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/emails.png'
                                caption={'the player\'s inbox'}/>
                    <Spacer/>

                    <Paragraph>Replying to a legitimate email increases the
                        player's profits...</Paragraph>
                    <Spacer/>
                    <MediaFrame media='/images/rich-within-reach/legitimate.png'
                                caption={'a legitimate email'}/>
                    <Spacer/>

                    <Paragraph>While replying to a scam email loses the player's
                        money, or worse.</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/rich-within-reach/scam.png'
                                caption={'a scam email'}/>
                    <Spacer/>

                    <Paragraph>The phone, accessed from the bottom right of the
                        screen,
                        also contains opportunities and scams, but this time in
                        the form of SMSes.</Paragraph>
                    <Spacer/>

                    <MediaFrame media='/images/rich-within-reach/phone.png'
                                caption={'messages for the player'}/>
                    <Spacer/>

                    <Paragraph>The player navigates through each work day,
                        constantly trying to beat their high score
                        and learning about the way scams look and how they show
                        up. After playing, the player is expected to have a
                        greater
                        sense of awareness and be more vigilant when browsing
                        online.</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>Experience</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>
                        My major was Computer Science, and I was specialised in
                        Computer Graphics and Games,
                        so the fact that I contributed little to no code to this
                        project may come as a surprise.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>Indeed, my daily coursework revolved heavily
                        around the
                        mathematics of rendering, animation and 3D graphics. In
                        fact, this project was one of two semester-long (~3.5
                        months)
                        courses in the School of Computing in which
                        students had free reign in the design and development of
                        any game of their choosing.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        On this rare occasion, students from almost any faculty
                        were
                        allowed to participate in the course, forming teams of
                        game developers
                        that consisted of capable project managers from business
                        schools, artists from
                        design schools, and computer science student
                        programmers. My team consisted of three computer science
                        masters
                        students and me. However, none of my teammates had any
                        experience developing games,
                        let alone any experience with game engines.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>Therefore, I took this as an opportunity to learn
                        about an aspect of game development
                        that is as important as programming, but that is often
                        considered rather separate from it: the creative aspect.
                        Two of my teammates took on the role of fresh gameplay
                        programmers learning about Unity for the first time, and
                        the remaining teammate
                        joined me in working on the artistic aspects of the
                        game.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>I took on two primary responsibilities. First,
                        the role of advisor to the team regarding the
                        general
                        organisation and standardisation of the project, since I
                        was more familiar with game engines.
                        Second, learning and experiencing the process of asset
                        creation -
                        the creation of artistic data - data I was already used
                        to manipulating
                        on a daily basis, but clueless as to how it was made in
                        the first place. I was hopeful that by learning about
                        this process
                        I would come to understand the issues the "other side"
                        runs into, and change the way I approach game
                        development by anticipating issues and smoothing
                        communication,
                        since I would be able to see things better from the
                        creative
                        perspective as well.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>On standards and
                        organisation</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>More often than not I found myself reading
                        pre-existing codebases,
                        like Unreal Engine with its intricate web of decades-old
                        subsystems, or sample game projects
                        to learn more about how people built games with
                        different engines. They all came with their own
                        code styles and standards, but it never really occurred
                        to me how much thought went into them to make sure the
                        project remains maintainable and flexible over
                        time.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        I first took stock of the software we decided on using.
                        For 3D modelling, Blender was the cheap and effective
                        choice.
                        Texturing would be done in Substance Painter and
                        Substance Designer.
                        Unity was the target engine.
                    </Paragraph>
                    <Spacer size={3}/>

                    <Paragraph size={3}>Coordinate systems</Paragraph>
                    <Spacer/>

                    <Paragraph>
                        The first problem I encountered was that of coordinate
                        systems.
                        Each software uses its own coordinate system.
                        Blender is right-handed, -Y forward; Substance is
                        right-handed,
                        +Z forward; Unity is left-handed, +Z forward.
                        There was a need to ensure that as the model passes
                        through each
                        application, it needs to face in a consistent direction.
                        Finally,
                        when it is imported into Unity, it needs to be oriented
                        in a consistent way,
                        and the texture needs to be applied correctly on the
                        model as well.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>To create a sense of consistency within the
                        project
                        and reduce mental load, I enforced that our game
                        world would have a forward direction of +Z, following
                        Unity's conventions,
                        and that the front face of any model or sprite imported
                        into the engine must also face +Z without any rotational
                        correction applied post import. This proved to be
                        helpful in preventing hierarchical issues
                        when we later decided that the laptop should rest on the
                        table (i.e. a child of the table). It also helped
                        greatly in allowing us to point the camera towards the
                        table consistently and animate it without strange
                        changes in movement.</Paragraph>

                    <Spacer size={3}/>
                    <Paragraph size={3}>Texture formats</Paragraph>
                    <Paragraph>There are a few interesting things I learned
                        about creating and exporting textures.
                        PNGs created by Photoshop had some issue with their
                        alpha channels when imported into Unity. I recalled the
                        time
                        I was experimenting with Unreal Engine and came across a
                        similar issue. While a tedious but correct solution
                        could be
                        figured out by carefully setting export settings or
                        using plugins to preserve the alpha channel properly
                        during export and import,
                        I decided to prioritise reducing unnecessary
                        dependencies.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>My consideration was that this was just a
                        small project and would not become
                        overly complex, so using a more primitive and stable
                        TARGA format would save us headaches down the road.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>Another small roadblock was that Substance
                        exported roughness maps but
                        Unity expects smoothness maps, so I made sure to do the
                        inversion in Substance first before exporting.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>Lastly, I introduced a naming scheme for all
                        assets
                        to be used in the game engine, taking inspiration from
                        the Unreal Engine style guide. Any material would have
                        to bear a prefix M,
                        any texture had to have a prefix T, and the textures
                        would be sorted by suffix as well:
                        metallic smoothness maps would be suffixed MS, which
                        helped remind all of us of the nature
                        of the texture maps (not roughness but smoothness!) and
                        reduced the time it took
                        for us to find the right texture for the occasion.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>3D modeling and texturing</Paragraph>
                    <Spacer size={2}/>

                    <Paragraph>Before working on this project I already had a
                        brief idea of how models were made.
                        3D artists would manipulate vertices in some program and
                        create faces, and the vertex and face data
                        would be written to a file and imported into an engine,
                        and the engine would make small adjustments like
                        recalculating normals
                        before passing them to the GPU for shading.</Paragraph>

                    <Spacer/>
                    <Paragraph>Actually making the models myself with Blender
                        was a whole new experience in itself.
                        Before the experience, I would nod in approval at the
                        words "low polygon count", but it was not
                        until after the experience that I could confidently
                        explain what exactly modelers did to shave down vertex
                        counts.
                        Before the experience I knew what baking was - it was
                        some process to make low polygon models look like high
                        polygon ones.
                        It was not until after the experience that I could
                        visualise in my head the baking process and intuitively
                        understand the beautiful use of math behind it.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        Learning a new program like Blender was frustrating but
                        rewarding at the same time.
                        Dragging vertices around and filling in the faces one by
                        one was so time consuming and so amateurish that
                        it became much easier to understand the techniques 3D
                        modelers have used for decades to speed up their
                        workflow and keep models
                        clean and aligned. They helped me understand exactly why
                        the
                        models passed to gameplay programmers and level
                        designers look they way they do,
                        are organised the way they are.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        Even though our game didn't require such fidelity in our
                        textures,
                        I found it enlightening to experiment with creating
                        high-poly models and baking them
                        down into low-poly ones to see how the results changed.
                        In a way, participating in this creative
                        work of 3D modeling and texturing led me to a better
                        technical understanding of 3D graphics. I read up on
                        things
                        I never would have known about or thought about
                        researching,
                        such as the extensive work gone into developing {' '}
                        <TextLink
                            link={'https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-22-baking-normal-maps-gpu'}>baking
                            algorithms</TextLink>.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>While the models and textures I made were not
                        commercially viable,
                        it granted me insight into many invisible processes:
                        simple and small algorithms for
                        detecting backwards faces; splitting and joining edges;
                        projecting and wrapping meshes onto other meshes;
                        becoming a 3D modeler for 3 months has helped me
                        appreciate the importance of tooling that graphics
                        programmers produce.
                        These unseen scripts that we take for granted make it
                        feasible for artists to realise their
                        vision.</Paragraph>
                </Card>
            </div>

            <Button route='' linkText='JP'/>
        </div>);
}

export default RichWithinReach;
