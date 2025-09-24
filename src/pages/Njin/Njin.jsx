import React from 'react';
import styles from './Njin.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import Button from "@components/Button/Button.jsx";
import {Card} from "@components/Card/Card.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import List from "@components/List/List.jsx";
import {C, CF, CK, CN, CT, I} from "@util/typography.jsx";
import Code from "@components/Code/Code.jsx";
import CodeLine from "@components/Code/CodeLine.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";

function Njin() {
    return (
        <div className={styles.njin}>
            <ArrowButton route='/' direction='left'
                         className={styles.arrowButton}/>

            <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>njin</Paragraph>
                    <Paragraph size={2}>is a work-in-progress
                        game engine built from scratch in C++.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>
                        njin started because I was frustrated at the difficulty
                        of reading documentation
                        on complex implementations in mature engines.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        For example, it was difficult to understand all the
                        issues
                        a complicated system like Unreal Engine's Lumen wants to
                        solve.
                        Understand a section of it felt like I needed some
                        prerequisite knowledge,
                        and since I did not know what I did not know, it because
                        difficult to follow the
                        design philosophy of such systems and come to understand
                        the right situations
                        in which to use them, and how to use them.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        If the body of graphics knowledge were a tangible
                        object,
                        then I felt as if trying to understand Graphics through
                        analysing
                        modern implementations was akin to working from the
                        top-down.
                        I wanted to understand from the bottom-up, to work
                        through the
                        same thought processes that led to the current state of
                        the art.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        Therefore, njin is a learning project for me, where I
                        attempt
                        to implement sections of a game engine with the most
                        textbook methods, slowly building my understanding
                        and working towards modern engine
                        implementations.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        My goal for this project would be to make a simple game
                        with it. The sections below discuss the design and
                        technical
                        components of njin I have tried my hand at implementing
                        thus far.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>Engine overview</Paragraph>
                    <Spacer size={2}/>

                    <Paragraph>Technical stack:</Paragraph>
                    <List>
                        <span>Written from scratch in C++(20 and up), with minimal libraries</span>
                        <span>Built with CMake</span>
                    </List>
                    <Spacer/>


                    <Paragraph>Features:</Paragraph>
                    <List>
                        <span>Compile-time ECS system</span>
                        <span>Vulkan-based renderer</span>
                        <span>Simple physics engine</span>
                        <span>GLTF asset loading</span>
                        <span>Isometric sprite rendering</span>
                    </List>

                    <Spacer/>
                    <Paragraph>
                        <TextLink
                            link={'https://github.com/sugimoto-asahi/njin'}>Github</TextLink>
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>The sections below discuss each
                        feature.</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>
                        Compile-time ECS system
                    </Paragraph>
                    <Spacer size={2}/>

                    <Paragraph>
                        The core of the engine is an ECS system operated by an
                        entity manager.
                        Any physical object in the game world is considered
                        an <I>entity</I>,
                        and identified by a unique <I>EntityID</I>. An EntityID
                        is simply an integer.
                    </Paragraph>

                    <Paragraph>Each entity can contain several components, which
                        determine its behaviour.
                        A component is a struct type that contains related data
                        fields.
                        For example, below is the definition of the transform
                        component in njin, <CT>njTransformComponent</CT>.
                    </Paragraph>
                    <Spacer/>
                    <Code>
                        <CodeLine><CK>struct</CK>{' '}
                            <CT>njTransformComponent</CT>{' {'}</CodeLine>
                        <CodeLine
                            indent={1}><CT>math::njMat4f</CT>{' '}<CN>transform</CN>;</CodeLine>
                        <CodeLine>{'}'}</CodeLine>
                    </Code>
                    <Spacer/>
                    <Paragraph>Where <CT>math::njMat4f</CT> is a custom, but
                        standard
                        4x4 matrix implementation.</Paragraph>

                    <Paragraph>A camera entity would use an instance of this
                        transform
                        component, and this determines its
                        position in the world. Similarly, the player entity
                        would use an instance of the same
                        transform component to determine its position in the
                        world.</Paragraph>

                    <Spacer/>
                    <Paragraph>
                        The idea behind this design is to decouple objects from
                        their data.
                        Game logic is performed by Systems that operate on the
                        components without full knowledge of the entities that
                        they
                        belong to.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        For example, the render system, <CT>njRenderSystem</CT>,
                        can find out where the camera is per tick by querying
                        the entity manager
                        for any entity with <I>at least</I> a transform
                        component and a camera component.
                        It doesn't matter to the render system if the returned
                        entity actually has <I>other</I> components,
                        like an input component or a physics component - as long
                        as the entity satisfies the system's
                        component requirements, the entity is for all practical
                        purposes a camera to the render system.
                        Then, the render system can simply extract the position
                        and camera settings
                        of the returned entity and calculate the view and
                        projection matrices.
                    </Paragraph>

                    <Spacer/>

                    <MediaFrame media='/images/njin/ecs-conceptual.png'
                                caption='conceptual view of entities and their components'/>

                    <Spacer/>
                    <Paragraph>
                        <CT>njEntityManager</CT> is the core interface that
                        performs
                        two functions:
                    </Paragraph>

                    <List>
                        <span>Allow the user to add new entities, and add components to existing entities</span>
                        <span>Allow systems to query for entities that have specific sets of components</span>
                    </List>
                    <Spacer/>

                    <Paragraph>
                        Since the entity manager has to answer queries per
                        system per tick, the speed at which it answers queries
                        needs to be reasonable.
                        The entity manager handles mapping entity IDs to its set
                        of components with bit signatures,
                        reducing memory overhead. Each set of components is a
                        unique bit signature,
                        better known as an <I>archetype</I> using Unity's
                        terminology. By using
                        each signature as a key in a hashmap, retrieving the
                        entities
                        matching a particular archetype query by a system is
                        trivial.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        The archetype signatures are calculated at runtime
                        instead of compile time,
                        when components are added to entities following the
                        program's sequential flow.
                        I chose to sacrifice the savings that could have been
                        made if the signatures
                        were prepared during compile-time for flexibility.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>To prepare signatures during compile time, all
                        archetypes need to be known
                        during compilation, which would imply that no new
                        components can be added to entities at runtime.
                        I felt that this was too strict a limitation for my game
                        engine.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>Finally, the <CT>njEntityManager</CT> is fully
                        templatized such that
                        there is no need for custom components to be registered
                        with any system beforehand, or follow
                        any particular data layout. The custom component
                        instance simply needs to be passed to
                        the <CF>add_component</CF> method
                        of the <CT>njEntityManager</CT>. The implementation will
                        check the type of the incoming component and calculate
                        signatures for
                        new archetypes involving the component automagically.
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>
                        All in all, this design allows for two primary
                        advantages:
                    </Paragraph>
                    <List>
                        <span>Game logic processing is much more efficient due to the spatial locality of
                            data, as components are kept close to each other in memory under the same bit key.</span>
                        <span>Introducing new features, such as new behaviours or new attributes,
                            is much easier since there are no layered class hierarchies. Wanting an entity to be affected by
                        physics, for example, is as simple as adding a physics component to that entity, making it a query target for the physics engine.</span>
                    </List>
                    <Spacer/>
                </Card>

                <Card>
                    <Paragraph size={2}>
                        Vulkan-based renderer
                    </Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>
                        A simple Vulkan renderer is implemented. The renderer is
                        hooked up
                        to the engine with <CT>njRenderSystem</CT>. A particular
                        feature of this implementation is the
                        configurability of the renderer.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        The configuration of the renderer is concentrated in a
                        single file: {' '}
                        <CN>config.h</CN>. Here, the descriptor set layouts,
                        pipelines,
                        render passes and buffers can be configured as
                        constant structs.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>In <CN>main.cpp</CN>, the user may then pick and
                        choose from
                        configured structs to include in the <CT>Renderer</CT>.
                        The <CT>Renderer</CT> class reads in the configured
                        structs
                        and sets everything up accordingly.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>
                        Simple physics engine
                    </Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>An elementary physics engine is implemented
                        that supports depenetration and simulation of rigid-body
                        dynamics.
                        The class responsible for this
                        is <CT>njPhysicsSystem</CT>.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        There is also preliminary support for collision
                        detection
                        via AABB overlap testing. New AABBs are calculated per
                        tick efficiently with Jim Arvo's <TextLink
                        link={'https://github.com/erich666/GraphicsGems/blob/master/gems/BoxSphere.c'}>algorithm</TextLink>.

                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        The AABBs are loaded into an axis-aligned BVH
                        (<CN>BVH.h</CN>).
                        The recursive partitioning is such that an an axis (X, Y
                        or Z) is chosen,
                        and a partition point is selected, such that there is an
                        equal number of
                        centroids on both sides of the partition.
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>
                        GLTF asset loading
                    </Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>An elementary GLTF asset loader is implemented
                        that functions
                        well with the renderer by loading assets into custom
                        data types (<CT>RenderInfos</CT>) easy for the
                        renderer to process. This makes it easy for the renderer
                        to pass the data in the format
                        Vulkan prefers without much extra processing.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>The implementation follows the glTF 2.0
                        <TextLink
                            link={'https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html'}>specification</TextLink>
                        outlined by Khronos. Vertices, normals, UVs and vertex
                        colors are read into <CT>njVertex</CT>. The loader is
                        in <CN>GLTFLoader.h</CN>.
                    </Paragraph>
                    <Spacer/>

                </Card>
                <Card>
                    <Paragraph size={2}>
                        Isometric sprite rendering
                    </Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>
                        An experimental but basic approach is taken in rendering
                        the demo
                        scene onto the screen. Since the first game I am
                        preparing the engine to make
                        is an isometric one, I considered an alternative
                        approach to rendering
                        compared to the typical 3D approach (although 3D
                        rendering features will,
                        of course, be implemented in the future).
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        Since the player always views the scene from the same
                        angle,
                        and the camera is always isometric, sprites can be drawn
                        onto the screen
                        instead of real textures mapped onto real meshes.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>Physics such as collision testing still take
                        place in the 3D
                        game world, but the visual representation is comprised
                        purely of sprites.</Paragraph>
                    <Spacer/>
                    <Paragraph>
                        Meshes are placed in the scene for physics purposes.
                        Then, the scene is transformed
                        into eye space, and bounding boxes for each mesh are
                        calculated. The bounding
                        boxes are rectangular and such that they are aligned
                        with the axes of the viewport
                        (purely horizontal / vertical).
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        Vertices are created at the corners of the bounding
                        boxes to form a billboard quad, then the vertices are
                        transformed back into world space via the inverse view
                        matrix. The vertices are
                        fed into the pipeline, along with sprites of correct
                        aspect ratio (this is precalculated
                        for the current orthographic camera parameters). The
                        sprites are then mapped onto the quads
                        in the shader stages.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>
                        To ensure that sprites are drawn in order from back to
                        front,
                        the painter's algorithm is used. The depth of each quad,
                        where the sprite is to be drawn, is determined
                        based on the orthogonal distance of the quad's centroid
                        from the near plane.
                    </Paragraph>
                </Card>
                <Card>
                    <Paragraph size={2}>
                        Description of demo
                    </Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>
                        The demo scene displayed upon successfully building and
                        launching the application
                        is a flat 5x5 room of stone tiles. The origin tile
                        is centred on the screen.
                        A green character rests on the stage, and can be
                        controlled with the WASD keys. The movement is handled
                        by the <CT>njInputSystem</CT> capturing user inputs each
                        tick,
                        then passing the inputs to <CT>njMovementSystem</CT>.
                        The movement system calculates the net movement
                        direction from the inputs,
                        then applies an impulse to the character in that
                        direction by editing the
                        character entity's <CT>njPhysicsComponent</CT>.
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>A separate green character is present;
                        if the player controlled character overlaps
                        this character it will be indicated in stdout. This
                        demonstrates
                        that the collision detection system is
                        working.</Paragraph>
                </Card>
            </div>
            <Button route='' linkText='JP'/>

        </div>

    );

}

export default Njin;