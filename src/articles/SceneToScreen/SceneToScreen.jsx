import React, {useEffect, useRef, useState} from 'react'
import styles from './SceneToScreen.module.css'
import Button from "@components/Button/Button.jsx";
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import {Card} from "@components/Card/Card.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import ScrollyTeller from "@components/ScrollyTeller/ScrollyTeller.jsx";
import animationData from '@animations/scene-to-screen.json'
import {B, C, CF, CN, CT, I} from "@util/typography.jsx";
import Math from '@components/Math/Math.jsx'
import List from "@components/List/List.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import Code from "@components/Code/Code.jsx";
import SubCard from "@components/SubCard/SubCard.jsx";

function SceneToScreen() {
    let firstTextCardRef = useRef(null);

    /* we want the scrollyteller to be the same width as the
       text cards, and also be aligned to the top of the first text card */
    const [scrollyTellerY, setScrollyTellerY] = useState(0);
    const [textCardWidth, setTextCardWidth] = useState(0);

    /*
    Ideally the scrollyteller should be positioned slightly above half
    of the window's vertical height, but it should never exceed the top
    of the first text card
     */
    const heightScalar = 0.3; // rough desired vertical position of scrollyteller
    useEffect(() => {
        const handleScroll = () => {
            if (firstTextCardRef.current) {
                let rect = firstTextCardRef.current.getBoundingClientRect();
                console.log(window.innerHeight * heightScalar);
                console.log(rect.top);
                if (rect.top < window.innerHeight * heightScalar) {
                    setScrollyTellerY(window.innerHeight * heightScalar);
                } else {
                    setScrollyTellerY(rect.top);
                }
                setTextCardWidth(rect.width);
            }
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // intersection tests for progressing the scrollyteller
    const [currentMarker, setCurrentMarker] = useState(0);
    const markerStack = useRef([]);
    const m0Ref = useRef(null);
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const m3Ref = useRef(null);
    const m4Ref = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            threshold: 1.0,
            rootMargin: '0px 0px -50% 0px'
        };
        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // console.log(`incoming intersection: ${entry.target.id}`);
                    if (!markerStack.current.includes(entry.target.id)) {
                        markerStack.current.push(entry.target.id);
                    }
                }

                if (!entry.isIntersecting) {
                    // console.log(`outgoing intersection: ${entry.target.id}`);
                    if (entry.target.id === markerStack.current[markerStack.current.length - 1]) {
                        markerStack.current.pop();
                    }
                }

                setCurrentMarker(markerStack.current[markerStack.current.length - 1]);
            });
        };
        const observer = new IntersectionObserver(callback
            , options);
        observer.observe(m0Ref.current);
        observer.observe(m1Ref.current);
        observer.observe(m2Ref.current);
        observer.observe(m3Ref.current);
        observer.observe(m4Ref.current);

        return () => {
            observer.disconnect();
        }
    }, []);


    return (
        <div className={styles.sceneToScreen}>
            {/*<div className={styles.tellerDebug}/>*/}
            <ArrowButton route='/articles' direction='left'
                         className={styles.arrowButton}/>
            <div className={styles.content}>
                <Card>
                    <Paragraph size={1} className={styles.title}>From Scene
                        to
                        Screen in Vulkan</Paragraph>
                </Card>
                <div className={styles.textCards} ref={firstTextCardRef}>
                    <Card>
                        <Paragraph size={2}>How do humans see?</Paragraph>
                        <div ref={m0Ref} id='m0'/>
                        <Spacer size={2}/>
                        <Paragraph>Humans see because they have
                            eyes.</Paragraph>
                        <Spacer/>
                        <Paragraph>Light rays reflect off objects
                            in the surroundings in random directions.
                            A small portion of the reflected rays happen to
                            coincide with the cornea in such a way that they
                            are able to enter the eye and strike the
                            retina.</Paragraph>
                        <Spacer/>
                        <Paragraph>The light ray enters the
                            cornea, traveling in a straight line until
                            it strikes the light sensitive retina. Receptor
                            cells
                            capture the signal at the struck location, before
                            sending the information to the brain.
                            The brain interprets this signal as color, or as
                            in the illustration on the right, red.
                        </Paragraph>
                        <div ref={m1Ref} id='m1'/>
                    </Card>
                    <Card>
                        <Paragraph size={2}>The screen abstraction</Paragraph>
                        <Spacer size={2}/>
                        <Paragraph>The image formed on the retina is the
                            image seen in the mind. </Paragraph>
                        <Spacer/>
                        <Paragraph>Theoretically,
                            if one were able to trigger precisely
                            the same receptors, at the same locations,
                            with the same wavelengths and intensities
                            of light, the human experiencing the image would not
                            know the difference.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            This is the fundamental goal of computer graphics.
                            The strength of computer graphics is in its
                            capability of reproducing visual experiences
                            of a physical world without the need for
                            real, physical objects.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The core question is this: where, and how,
                            should a screen filled with lights be
                            placed in front of an eye, to produce an illusion
                            of a world?
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            To begin tackling this problem, two major
                            abstractions are first made to the model of the eye.
                        </Paragraph>
                        <Spacer size={3}/>

                        <Paragraph size={3}>1. The retina</Paragraph>
                        <div ref={m2Ref} id='m2'/>
                        <Spacer/>
                        <Paragraph>Anything captured on the retina is part of
                            the final
                            image experienced. Ideally, the screen should be
                            able to target all parts of the retina, so the first
                            intuition is to have a similarly curved screen.
                        </Paragraph>

                        <Spacer/>
                        <Paragraph>
                            In practical situations, though, humans only
                            care about a much smaller cone of light entering
                            through the iris. After all, people don't
                            particularly pay attention to their peripheral
                            vision constantly.
                        </Paragraph>
                        <div ref={m3Ref} id='m3'/>

                        <Spacer/>
                        <Paragraph>Since the total change in curvature
                            across this smaller section of the eye is smaller,
                            considering it a completely flat surface is
                            feasible. This allows the screen
                            to be flat as well, giving rise to the design of
                            standard modern monitors.</Paragraph>

                        <Spacer size={3}/>
                        <Paragraph size={3}>2. The screen</Paragraph>
                        <Spacer/>
                        <Paragraph>For various historical and technical reasons,
                            screens are rectangular. This has major implications
                            for the way computer graphics is conducted, because
                            it implies that any mathematics that happens behind
                            the
                            scenes is always chosen with the end goal in mind: a
                            fixed, <I>x</I> by <I>y</I> array.
                        </Paragraph>
                    </Card>

                    <Card>
                        <Paragraph size={2}>Eye space
                        </Paragraph>
                        <Spacer size={2}/>

                        <Paragraph size={3}>Concept</Paragraph>
                        <Spacer/>

                        <div ref={m4Ref} id='m4'/>
                        <Paragraph>Consider the diagram shown on the
                            right, which represents a side-on view
                            of the scene described in earlier sections.
                            The x-axis points out of the screen.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The idea is to use a flat screen of pixels to
                            trigger visual receptors in such a way that a scene
                            with
                            depth is (reasonably) accurately perceived. To
                            achieve this,
                            a few simple assumptions are made.
                        </Paragraph>
                        <Spacer/>

                        <List>
                            <span>The coordinate system is such that the viewer's
                            eye is at <Math tex={'(0, 0)'}/></span>
                            <span>It is not known precisely how far the the viewer sits
                            from their monitor, so an arbitrary and easily adjustable
                            variable <Math tex={'n'}/> represents this distance.</span>
                            <span>The coordinate system is right-handed. The X, Y, and Z axes
                                are right, up and forward, respectively.</span>
                        </List>
                        <Spacer/>

                        <Paragraph>Let the <I>camera</I> be an object with
                            the exactly same functionality as the iris,
                            with a location exactly matching that of the
                            iris, at <Math tex={'(0, 0)'}/>.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>Let the <I>near
                            plane</I> be a plane of the exact same dimensions as
                            the monitor.
                            That is, if the user's monitor is 1920
                            pixels in width and 1080 pixels in height, then the
                            hypothetical screen is 1920 units in width and 1080
                            units in height.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The plane is located at <Math tex={'(0, n)'}/>, the
                            same distance from the viewer as the monitor.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            While constructing this system seems redundant, it
                            is relevant later.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>Pretend that there is actually an object
                            at the desired location behind the screen, then
                            project rays from the object directly to the camera.
                            Note down that the rays intersect, or
                            are <I>projected</I> onto the
                            near plane in the range <Math
                                tex={'a \\geq y \\geq -a'}/>.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            For all corresponding pixels from {' '}
                            <Math tex={'(n, 0)'}/> {' '} to <Math
                            tex={'(n, a)'}/> on the monitor, display the color
                            green.
                            Similarly, for all pixels from <Math
                            tex={'(n, 0)'}/> to <Math
                            tex={'(n, -a)'}/>, display the color red.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>In theory, the image displayed on the
                            monitor should be a perfect representation that
                            causes the viewer to perceive the object at a
                            distance <Math tex={'o'}/>,
                            directly in front of themselves. In practice,
                            small deviations (such as the fact that the assumed
                            distance {' '}
                            <Math tex={'n'}/> from the monitor is not precisely
                            accurate)
                            break the illusion, but this is not of any concern.
                            After all, there is no expectation for images
                            displayed
                            on monitors to be absolutely indistinguishable from
                            reality.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            This is the core idea behind displaying
                            3-dimensional scenes.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Suppose the user wants to view the
                            object from somewhere above, for example, from <Math
                            tex={'(n, 10)'}/>, and looking down at <Math
                            tex={'(o, 0)'}/>.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            By moving the camera and the near plane in tandem
                            such that the camera sits at <Math
                            tex={'(n, 10)'}/>, and rotating the system
                            to look down at <Math tex={'(o, 0)'}/>, the
                            programmer can capture an image as seen from above
                            on the near
                            plane. Since the near plane maps directly onto the
                            screen, there is no issue when displaying the
                            captured image on the monitor either.
                        </Paragraph>
                        <Spacer size={3}/>

                        <Paragraph size={3}>
                            View matrix
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>There is a crucial issue to consider.
                            When the camera is at <Math
                                tex={'(n, 10)'}/> and looking down at the
                            object,
                            the near plane is also slanted.

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Recall that all the items being discussed are
                            3-dimensional.

                            The coordinates captured on the near plane aren't
                            conducive for
                            mapping onto the screen. Ideally, captured
                            coordinates on the near plane
                            should look like <Math tex={'(500, 1000, z)'}/>,
                            where <Math tex={'z = n'}/> and is constant.

                            This is desirable because it is both
                            understandable and easy to program for: illuminate
                            the
                            pixel at <Math
                            tex={'(500, 1000)'}/> on the monitor.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            However, since the near plane is at an
                            angle, captured coordinates look more like <Math
                            tex={'(273.54, 1728.23, 3.73)'}/>; what's worse
                            is that
                            the z-coordinate varies across the capturing
                            surface.

                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            The solution is to, regardless of the position
                            of the camera when capturing a scene, convert the
                            entire
                            coordinate system of the scene
                            to become relative to the camera.
                            The result of this change is that the ideal
                            situation is forcibly recreated:
                            the camera will be at <Math tex={'(0, 0)'}/> by
                            virtue of the way the transformation is calculated.
                            This is discussed later.
                            As a side note, the near plane will also end up back
                            at <Math tex={'z = n'}/>. This is because the
                            system
                            was originally constructed such that the near plane
                            is precisely <Math tex={'n'}/> units away from the
                            camera;
                            the coordinate transformation is constructed to
                            "reset"
                            the system back into the ideal position, essentially
                            undoing all the
                            changes made by the programmer when positioning the
                            camera.

                        </Paragraph>
                        <Spacer/>
                        <Paragraph>Of course, a coordinate frame
                            change does
                            not affect the
                            relative position of any objects in the scene,
                            therefore the
                            visual composition of the scene remains unaffected.
                            With this technique, regardless of the camera's
                            position
                            in the scene, the captured coordinates on the near
                            plane
                            can always be displayed in a friendly manner (i.e.,
                            constant z).
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>The coordinate transform is represented with
                            a single matrix, called the <I>view matrix</I>.
                            Objects placed freely in the
                            world have their own coordinates, and the
                            coordinates are
                            interpreted as belonging in <I>world space</I>. This
                            includes the camera,
                            which is also positioned in world coordinates.

                            The desired outcome is for the camera to be
                            positioned at <Math tex={'(0, 0)'}/>,
                            while keeping the relative position of all other
                            objects to the camera unchanged.
                            This final coordinate system is called <I>eye
                                space</I>, as the camera
                            acts as a sort of virtual "eye" in the scene, and
                            the final setup is
                            such that everything is relative to this "eye" at
                            the origin.

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            It is important to remember that coordinate system
                            changes don't involve the movement of any objects in
                            the
                            scene, including the camera.
                            Rather, the only thing that changes is the
                            coordinate representation of each object.
                            The origin of the world is moving.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            Let the view matrix be <Math tex={'V'}/>.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The positioned camera has a location and a rotation.
                            Therefore, <Math tex={'V'}/> is derived from two
                            matrix components:
                            one to correct the location of the camera <Math
                            tex={'V_l'}/>, and one to
                            correct the rotation <Math tex={'V_r'}/>.

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            First, the location is considered. The camera needs
                            to be at <Math tex={'(0, 0)'}/>.

                            Let the world coordinates of the camera be <Math
                            tex={'w'}/> and
                            the eye coordinates of the camera be <Math
                            tex={'e  = (0, 0, 0, 1)'}/>.

                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} = V_l' +
                                      '\\begin{bmatrix} w_x \\\\ w_y \\\\ w_z \\\\ 1 \\end{bmatrix}'}/>

                            By observation,
                            <Math displayMode={true}
                                  tex={'V_l = \\begin{bmatrix}' +
                                      '1 & 0 & 0 & -w_x \\\\' +
                                      '0 & 1 & 0 & -w_y \\\\' +
                                      '0 & 0 & 1 & -w_z \\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}'}/>

                            This is commonly interpreted as a translation
                            by {' '}
                            <Math tex={'(-w_x, -w_y, -w_z)'}/>, but it must once
                            again be stressed that not only is the camera
                            "moving" by this
                            amount, so is every other point in the space.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            Next, the rotation is considered. While the camera
                            is now
                            situated at the origin, it is still pointing in
                            whichever direction
                            it was pointing at before the translation.

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            By convention, eye space is such that the camera's
                            "forward" vector <Math tex={'f'}/>
                            points in the direction of the negative z-axis. The
                            "up" vector <Math tex={'u'}/> of the camera will
                            point in the
                            direction
                            of the y-axis, and the "right" vector <Math
                            tex={'r'}/> (relative
                            to the camera's
                            "forward" and "up") will point in the direction of
                            the x-axis.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            This is also a simple change of basis
                            transformation;
                            to derive this component of the view matrix, each of
                            the
                            3 basis vectors as described above need to be found
                            for the camera (in world coordinates).

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The basis vector for the z-axis is tackled first.
                            Let the world coordinates of the point the camera is
                            looking at
                            be <Math tex={'p'}/>; then the forward vector of the
                            camera is <Math
                            tex={'\\frac{p - c}{\\left|p-c\\right|}'}/>,
                            that is, the vector from the camera to the point.
                            However, recall that the goal is to have the camera
                            point down the negative z-axis. This implies that
                            points in front of the camera in world space should
                            end up being expressed with a negative z-coordinate
                            in eye space.

                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            If <Math tex={'f'}/> is used as the z-axis basis
                            vector
                            as is, points in front of the camera in world space
                            will end up with positive z-coordinates instead.

                            This is because points in front of the camera
                            in world space have a z-coordinate
                            that is a positive scalar multiple of <Math
                            tex={'f'}/>.
                            To remedy this issue, the forward vector will be
                            negated when
                            used as the basis vector.

                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            The basis vector for the x-axis is calculated next.
                            A provisional up vector <Math tex={'u\''}/> is used
                            for this calculation. It
                            should be noted that this up vector is provided by
                            the programmer
                            and is not the one used as the y-axis basis vector.
                            Without this programmer-provided
                            up vector, even if the forward vector is specified,
                            the orientation of the camera is undefined. <B>It is
                            assumed that
                            the provided up vector is also normalized</B>.

                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            <Math tex={'u\''}/> and <Math tex={'f'}/> define a
                            plane, therefore <Math
                            tex={'f \\times u\' = r'}/> {' '}
                            without issue. It is for this
                            reason that the specification of the provisional
                            vector
                            does not need to be absolutely precise: it just
                            needs to be able to define a unique plane with <Math
                            tex={'f'}/> to orient the camera in space.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Note that the obtained <Math tex={'r'}/> is
                            also guaranteed to be normalized as a cross product
                            of 2 normalized vectors.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Finally, the basis vector for the y-axis is derived.
                            <Math tex={'u\''}/> cannot be used as-is, as it
                            may not be precisely orthonormal to either <Math
                            tex={'f'}/> or <Math tex={'r'}/>. The "true
                            up" <Math tex={'u'}/> is needed.
                            Fortunately, this is straightforward: <Math
                            tex={'u = r \\times f'}/>.

                            <Math displayMode={true}
                                  tex={'V_r = \\begin{bmatrix}' +
                                      'r_x & u_x & -f_x & 0 \\\\' +
                                      'r_y & u_y & -f_y & 0\\\\' +
                                      'r_z & u_z & -f_z & 0\\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}'}/>

                            Finally, the view matrix may be assembled.
                            The order of operations is important: for a point in
                            world space <Math
                            tex={'p'}/>,
                            first the point must be translated before the
                            rotation is corrected i.e.,
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'Vp &= {V_r}{V_l}p \\\\' +
                                      '&= \\begin{bmatrix}' +
                                      'r_x & u_x & -f_x & 0 \\\\' +
                                      'r_y & u_y & -f_y & 0\\\\' +
                                      'r_z & u_z & -f_z & 0\\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      '1 & 0 & 0 & -w_x \\\\' +
                                      '0 & 1 & 0 & -w_y \\\\' +
                                      '0 & 0 & 1 & -w_z \\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}p \\\\' +
                                      '&= \\begin{bmatrix}' +
                                      'r_x & u_x & -f_x & -w_x \\\\' +
                                      'r_y & u_y & -f_y & -w_y \\\\' +
                                      'r_z & u_z & -f_z & -w_z \\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}p' +
                                      '\\end{align*}'
                                  }/>
                        </Paragraph>
                    </Card>

                    <Card>
                        <Paragraph size={2}>Normalized Device
                            Coordinates</Paragraph>
                        <Spacer size={2}/>

                        <Paragraph size={3}>Concept</Paragraph>
                        <Spacer/>
                        <Paragraph>In the previous section, a system was
                            established such that any camera placed freely
                            in any scene can be converted into a standard
                            representation in eye space. From that point
                            onwards, determining
                            the corresponding pixels to illuminate on the
                            monitor
                            should be a trivial task.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            However, there are still
                            two pitfalls that need to be addressed.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            First, the near plane was defined to have the exact
                            same dimensions
                            as the user's monitor. This is a convenient
                            assumption but is impractical.
                            Not only are there innumerable monitor sizes in the
                            world,
                            the programmer or designer adjusting the camera and
                            placing objects in the
                            scene has no idea of the user's monitor size.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Second, suppose that there are multiple objects
                            in the scene instead of just one as in the example.
                            Lines are projected from each object onto the near
                            plane
                            to determine where each object should be drawn on
                            the screen.
                            But what if the two objects are positioned such
                            that,
                            relative to the camera, one object is in front of
                            the other?
                            In this case, there are projected lines from both
                            objects
                            that share the same captured coordinate on the near
                            plane.
                            The projected coordinates of the object in front
                            should always
                            be prioritized, but since the output is only in two
                            dimensions,
                            there is no way for the renderer to know this
                            information.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            To resolve both issues, the concept of <I>normalized
                            device
                            coordinates</I> is needed. NDC space is a
                            bounded
                            coordinate space
                            defined by the graphics API, and is typically
                            uniform in shape i.e., a unit cube at the origin.
                            A transformation is applied to transform
                            all points in eye space into NDC space, such that
                            all points within the viewing frustum of the camera
                            are within the bounds of the NDC space.
                            In essence, NDC space is a 3-dimensional normalized
                            container consisting of projected near plane
                            coordinates.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The NDC is mapped onto each user's screen on a
                            monitor-by-monitor
                            basis to accommodate size differences. in order to
                            find out
                            which pixels
                            on the user's monitor should be illuminated. This
                            way, the responsibility of having to know the target
                            monitor size is removed from the people who worked
                            on the scene.

                            For Vulkan, NDC space is a half-cube centred at the
                            origin,
                            where <Math tex={'x \\in [-1, 1]'}/>, <Math
                            tex={'y \\in [-1, 1]'}/>, <Math
                            tex={'z \\in [0, 1]'}/>.

                            From the <TextLink
                            link={'https://docs.vulkan.org/spec/latest/chapters/vertexpostproc.html#vertexpostproc-clipping'}
                        >documentation</TextLink>,
                        </Paragraph>

                        <SubCard>
                            <Paragraph>
                                ...the <I>view volume</I> is defined by:

                                <Math displayMode={true}
                                      tex={'\\begin{align*}' +
                                          '-w_c \\leq x_c \\leq w_c \\\\' +
                                          '-w_c \\leq y_c \\leq w_c \\\\' +
                                          'z_m \\leq z_c \\leq w_c \\\\' +
                                          '\\end{align*}'}/>

                                where
                                if <CF>VkPipelineViewportDepthClipControlCreateInfoEXT</CF>
                                <br/><C>::negativeOneToOne</C>
                                {' '}
                                is <C>VK_TRUE</C> <Math tex={'z_m'}/> is equal
                                to <Math tex={'-w_c'}/> otherwise <Math
                                tex={'z_m'}/> is equal to zero.
                            </Paragraph>
                        </SubCard>

                        <Paragraph>
                            The subscript <Math tex={'c'}/> refers to
                            coordinates in <I>clip space</I>,
                            which will be discussed later. What is important to
                            understand now, for the purpose
                            of the construction of the NDC space, is that clip
                            space is an intermediary space between world space
                            and NDC space.
                        </Paragraph>

                        <Paragraph>
                            Further down the same page,
                        </Paragraph>
                        <SubCard>
                            <Paragraph>
                                Perspective division on clip coordinates
                                yields <I>
                                normalized device coordinates</I>...
                                If a vertex in clip coordinates has a position
                                given
                                by
                                <Math displayMode={true}
                                      tex={'\\begin{bmatrix}' +
                                          'x_c \\\\' +
                                          'y_c \\\\' +
                                          'z_c \\\\' +
                                          'w_c' +
                                          '\\end{bmatrix}'}/>

                                then the vertex's normalized device coordinates
                                are
                                <Math displayMode={true}
                                      tex={'\\begin{bmatrix}' +
                                          'x_d \\\\' +
                                          'y_d \\\\' +
                                          'z_d \\end{bmatrix}' +
                                          '=' +
                                          '\\begin{bmatrix}' +
                                          '\\frac{x_c}{w_c} \\\\' +
                                          '\\frac{y_c}{w_c} \\\\' +
                                          '\\frac{z_c}{w_c}' +
                                          '\\end{bmatrix}'}
                                />
                            </Paragraph>
                        </SubCard>
                        <Spacer size={4}/>

                        <Paragraph>
                            The implication is as follows: the NDC space is
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '-1 \\leq x_d \\leq 1 \\\\' +
                                      '-1 \\leq y_d \\leq 1 \\\\' +
                                      '0 \\leq z_d \\leq 1' +
                                      '\\end{align*}'}/>
                        </Paragraph>

                        <Paragraph>
                            NDC space maps directly into screen (space).
                            But what exactly is the screen? The target surface
                            for the renderer to draw to, to display the
                            projected coordinates,
                            is not (though it can be) the entirety of the user's
                            monitor.
                            It is more likely that there is some fixed region on
                            the monitor
                            where the output image is displayed.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            In fact, before rendering even starts, the Vulkan
                            application obtains a handle to some surface
                            on the monitor from the operating system. This
                            handle
                            is <CT>VkSurfaceKHR</CT>, an opaque pointer to
                            an operating system resource.
                            The surface can be thought of as the region of
                            pixels on the monitor
                            the operating system has permitted the application
                            to control. The very browser in which this website
                            is rendered
                            is most certainly part of some similar surface as
                            well.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph size={3}>Viewport transformation</Paragraph>
                        <Paragraph>
                            A note about the precise way NDC coordinates are
                            mapped onto the surface. The information in NDC
                            space is
                            converted into a set of values and written into a
                            structure called a framebuffer.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            A framebuffer can be thought of as a collection of
                            handles to rectangular x by y buffers, each
                            typically of the
                            same dimensions as the surface. Each individual
                            buffer is known in Vulkan as a <CT>VkImage</CT>,
                            reflecting the resemblance to the common
                            idea of an image: an x by y array. Each handle is
                            known
                            as a <CT>VkAttachment</CT>.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            The <I>viewport transformation</I> is an implicit
                            but configurable step performed by Vulkan to convert
                            the
                            NDC into several sets of values. These resulting
                            values are
                            then written into separate attachments within the
                            framebuffer.
                            Finally, the buffers are used directly for the final
                            output onto the monitor
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            The easiest example to understand is that of the
                            color attachment.

                            For each point in NDC space, the viewport
                            transformation is
                            performed to obtain its <Math
                            tex={'(x, y)'}/> screen coordinate, and a color
                            value written into the color
                            attachment at that location. This color
                            value is directly displayed on the surface at <Math
                            tex={'(x, y)'}/>, completing the
                            graphics pipeline.
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            Another important and frequently present attachment
                            is the depth attachment. Each point in NDC space has
                            a z-coordinate.
                            After undergoing the viewport transformation, the
                            processed z-coordinate
                            is written into the depth attachment as a <I>depth
                            value</I>.
                            For each subsequent point processed, if the point
                            happens to end up
                            at the same <Math tex={'(x, y)'}/>
                        </Paragraph>

                        <SubCard>
                            <Paragraph>
                                The viewport transformation is determined by the
                                selected viewport's width and height in
                                pixels, <Math tex={'p_x'}/>
                                and <Math tex={'p_y'}/> respectively, and its
                                center <Math tex={'(o_x, o_y)'}/> (also in
                                pixels),
                                as well as its depth range min and max
                                determining a depth range scale value
                                <Math tex={'p_z'}/> and a depth range bias
                                value <Math tex={'o_z'}/> (defined below).
                                The vertex's framebuffer coordinates <Math
                                tex={'(x_f, y_f)'}/> are given by

                                <Math displayMode={true}
                                      tex={'\\begin{align*}' +
                                          'x_f = (\\frac{p_x}{2})x_d + o_x \\\\' +
                                          'y_f = (\\frac{p_y}{2})y_d + o_y \\\\' +
                                          'z_f = p_z \\times z_d + o_z' +
                                          '\\end{align*}'}/>
                            </Paragraph>
                        </SubCard>

                        <Paragraph>
                            Vulkan thus states that <Math
                            tex={'x_d = -1'}/> corresponds to
                            the left
                            edge of this surface, and <Math
                            tex={'x_d = 1'}/> corresponds to
                            the right edge
                            of this surface. Similarly, <Math
                            tex={'y_d = -1'}/> corresponds to the top edge of
                            this surface, and <Math
                            tex={'y_d = 1'}/> corresponds
                            to the bottom edge
                            of this surface.

                            The z-coordinate of each point in the NDC is the
                            <I> depth</I> of the point. Vulkan states that
                            a point at <Math tex={'z = 0'}/> is exactly
                            at the depth of the near plane, and a point at {' '}
                            <Math tex={'z = 1'}/> is exactly at the depth of
                            the far plane.
                            That is, relative to the camera, a point at <Math
                            tex={'z = 0.1'}/>
                            is closer to the camera than a point at <Math
                            tex={'z = 0.2'}/>.

                            The matrix that performs this transformation is
                            called the <I>projection matrix</I>.
                            The projection matrix is named as such because it
                            projects
                            points in eye space into NDC space. Note that the
                            matrix
                            encompasses two operations: first, the projection of
                            points on objects
                            onto the near plane, and second, the projection of
                            the captured points
                            on the near plane into NDC space.
                            With this abstraction for representing captured
                            coordinates,
                            the programmer is not only able to standardize the
                            representation of a scene regardless of monitor
                            size,
                            but also embed key information
                            about the depth of each point in the scene.
                            The NDC space thus provides a comprehensive
                            representation
                            that allows any GPU to interpret and display the
                            same scene,
                            and with correct front-to-back ordering as well.
                        </Paragraph>

                        <Paragraph size={3}>NDC space</Paragraph>
                        <Spacer/>
                        <Paragraph>
                            First, objects in the scene are projected onto
                            the near plane.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>The projected x and y coordinates
                            are tackled first.
                            Recall that the camera points down the negative
                            z-axis in eye space.
                            Let:
                            <Math displayMode={true} tex={'\\begin{align*}' +
                                'p_e &=  (x_e, y_e, z_e, w_e) \\\\' +
                                'p_p &=  (x_p, y_p, z_p, w_p) \\\\' +
                                'p_n &=  (x_n, y_n, z_n, w_n) \\\\' +
                                '\\end{align*}'}/>
                            where <Math tex={'p_e'}/> is the point in eye
                            space, {' '}
                            <Math tex={'p_p'}/> is the projected point on the
                            near plane, and
                            <Math tex={'p_n'}/> is the point in NDC space.
                            Let the near plane be at <Math
                                tex={'z = -n, n > 0'}/> and the far plane be
                            at {' '}
                            <Math tex={'z = -f, f > n > 0'}/>.
                            Let <Math tex={'t, b, l, r'}/> represent the top,
                            bottom, left and right edges of the near plane,
                            respectively.
                            By the ratio of similar triangles,
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '\\frac{y_p}{y_e} &= \\frac{-n}{z_e}\\' +
                                      '\\∴  y_p &= \\frac{n \\cdot y_e}{-z_e} \\tag{1}' +
                                      '\\end{align*}'}/>

                            Similarly,
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '\\frac{x_p}{x_e} &= \\frac{-n}{z_e}\\' +
                                      '\\∴  x_p &= \\frac{n \\cdot x_e}{-z_e} \\tag{2}' +
                                      '\\end{align*}'}/>

                            Next, the formula to transform <Math tex={'p_p'}/>
                            into its corresponding location in NDC space is
                            considered.
                            Vulkan states that, in NDC space, <Math
                                tex={'y = -1'}/> is
                            the top edge of the surface. This implies that <Math
                                tex={'t'}/>
                            should be mapped to <Math tex={'y = -1'}/>.
                            Therefore, <Math tex={'b'}/> should be mapped
                            to <Math tex={'y = 1'}/>.
                            This is a linear mapping problem where the mapping
                            function
                            is of the form <Math
                                tex={'y_n = My_p + B'}/>, where <Math
                                tex={'M'}/> is
                            the
                            gradient and <Math tex={'B'}/> is the intercept.
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'M &= \\frac{1 - (-1)}{b-t} \\\\' +
                                      '&= \\frac{2}{b-t} \\\\' +
                                      '\\end{align*}'
                                  }/>


                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'y_n = \\frac{2}{b-t} \\cdot y_p + B \\\\' +
                                      '\\end{align*}'}/>
                            Substituting the point <Math tex={'(b, 1)'}/>,
                            <Math displayMode={true}
                                  tex={
                                      '\\begin{align*}' +
                                      '1 &= \\frac{2}{b-t} \\cdot b  + B \\\\' +
                                      'B &= 1 - \\frac{2b}{b-t} \\\\' +
                                      '&= \\frac{b-t-2b}{b-t} \\\\' +
                                      '&= \\frac{-b-t}{b-t} \\\\' +
                                      '&= -\\frac{b+t}{b-t} \\\\' +
                                      '&= \\frac{b+t}{t-b} \\\\' +
                                      '\\end{align*}'
                                  }/>

                            <Math displayMode={true}
                                  tex={'∴ y_n = \\frac{2}{b-t} \\cdot y_p + \\frac{b+t}{t-b} \\tag{3}'}
                            />

                            Similarly, <Math tex={'x_n = Mx_p + B'}/>.
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'M &= \\frac{1-(-1)}{r-l} \\\\' +
                                      '&= \\frac{2}{r-l} \\\\' +
                                      '' +
                                      '\\end{align*}'}/>

                            <Math displayMode={true}
                                  tex={'x_n = \\frac{2}{r-l} \\cdot x_p + \\frac{r+l}{l-r}'}/>

                            Substituting the point <Math tex={'(r, 1)'}/>,
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '1 &= \\frac{2}{r-l} \\cdot r + B \\\\' +
                                      'B &= 1-\\frac{2r}{r-l} \\\\' +
                                      '&= \\frac{r-l-2r}{r-l} \\\\' +
                                      '&= \\frac{-r-l}{r-l} \\\\' +
                                      '&= -\\frac{r+l}{r-l} \\\\' +
                                      '&= \\frac{r+l}{l-r} \\\\' +
                                      '\\end{align*}'}/>

                            <Math displayMode={true}
                                  tex={'∴ x_n = \\frac{2}{r-l} \\cdot x_p + \\frac{r+l}{l-r} \\tag{4}'}
                            />

                            Combining equations 1 and 3, the function
                            mapping {' '}
                            <Math tex={'y_e'}/> to <Math
                                tex={'y_p'}/> is
                            obtained.

                            <Math displayMode={true}
                                  tex={'y_n = \\frac{2}{b-t} \\frac{n \\cdot y_e}{-z_e} + \\frac{b+t}{t-b} \\tag{5}'}/>

                            Similarly, combining equations 2 and 4, the function
                            <Math tex={'x_e'}/> to <Math tex={'x_p'}/> is
                            obtained.

                            <Math displayMode={true}
                                  tex={'x_n = \\frac{2}{r-l} \\frac{n \\cdot x_e}{-z_e} + \\frac{r+l}{l-r} \\tag{6}'}/>

                            At this junction the form of the projection matrix
                            is considered.
                            Let the 4x4 projection matrix be
                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      'x_p \\\\' +
                                      'y_p \\\\' +
                                      'z_p \\\\' +
                                      'w_p \\end{bmatrix}' +
                                      '=' +
                                      '\\begin{bmatrix}' +
                                      'm_{00} & m_{01} & m_{02} & m_{03} \\\\' +
                                      'm_{10} & m_{11} & m_{12} & m_{13} \\\\' +
                                      'm_{20} & m_{21} & m_{22} & m_{23} \\\\' +
                                      'm_{30} & m_{31} & m_{32} & m_{33} \\\\' +
                                      '\\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      'x_e \\\\' +
                                      'y_e \\\\' +
                                      'z_e \\\\' +
                                      'w_e \\\\' +
                                      '\\end{bmatrix}'
                                  }
                            />

                            Immediately an issue is apparent: <Math
                                tex='m_{00}'/> {' '}
                            needs to be <Math displayMode={true}
                                              tex={'\\frac{2n}{(r-l){(-z_e)}}'}/>

                            However, there is no way of introducing a term
                            into <Math tex={'P'}/> that performs the required
                            division operation. An identical issue arises
                            when deriving <Math tex={'m_{10}'}/> for the
                            conversion of <Math tex={'y_e'}/> to <Math
                                tex={'y_p'}/>: <Math tex={'m_{10}'}/> needs to
                            be
                            <Math displayMode={true}
                                  tex={'\\frac{2n}{(b-t){(-z_e)}}'}
                            />

                            Note that during the transformation of both
                            x and y terms, division by the same factor <Math
                                tex={'-z_e'}/>
                            is required.

                            The issue is resolved by introducing an intermediate
                            coordinate space, called <I>clip space</I>. Clip
                            space is
                            an abstract space that sits between eye space and
                            NDC space. The way clip space resolves the issue is
                            by allowing the division by <Math tex={'z_e'}/> to
                            be deferred to a later step called <I>perspective
                                division</I>.
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            First, the coordinates are transformed from eye
                            space
                            to clip space. Then, the coordinates in clip space
                            undergo
                            perspective division, becoming NDC.

                            In fact, the perspective division step is so
                            universally
                            performed that Vulkan performs this step implicitly
                            for
                            the programmer. As per the specification, for clip
                            space coordinates
                            <Math tex={'(x_c, y_c, z_c, w_c)'}/>, Vulkan will
                            automatically perform perspective division to
                            obtain NDC:
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'x_n = \\frac{x_c}{w_c} \\\\' +
                                      'y_n = \\frac{y_c}{w_c} \\\\' +
                                      'z_n = \\frac{z_c}{w_c} \\\\' +
                                      '\\end{align*}'}/>

                            With this intermediate space defined, let the 4x4
                            projection matrix be <Math tex={'P'}/>, such that
                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      'x_c \\\\' +
                                      'y_c \\\\' +
                                      'z_c \\\\' +
                                      'w_c \\\\' +
                                      '\\end{bmatrix}' +
                                      ' = ' +
                                      '\\begin{bmatrix}' +
                                      'm_{00} & m_{01} & m_{02} & m_{03} \\\\' +
                                      'm_{10} & m_{11} & m_{12} & m_{13} \\\\' +
                                      'm_{20} & m_{21} & m_{22} & m_{23} \\\\' +
                                      'm_{30} & m_{31} & m_{32} & m_{33} \\\\' +
                                      '\\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      'x_e \\\\' +
                                      'y_e \\\\' +
                                      'z_e \\\\' +
                                      'w_e \\\\' +
                                      '\\end{bmatrix}'
                                  }/>

                            <Math tex={'w_c'}/> must equal <Math tex={'z_e'}/>,
                            therefore
                            the last row of <Math tex={'P'}/> can be filled in:
                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      'x_c \\\\' +
                                      'y_c \\\\' +
                                      'z_c \\\\' +
                                      'w_c \\\\' +
                                      '\\end{bmatrix}' +
                                      ' = ' +
                                      '\\begin{bmatrix}' +
                                      'm_{00} & m_{01} & m_{02} & m_{03} \\\\' +
                                      'm_{10} & m_{11} & m_{12} & m_{13} \\\\' +
                                      'm_{20} & m_{21} & m_{22} & m_{23} \\\\' +
                                      '0 & 0 & -1 & 0 \\\\' +
                                      '\\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      'x_e \\\\' +
                                      'y_e \\\\' +
                                      'z_e \\\\' +
                                      'w_e \\\\' +
                                      '\\end{bmatrix}'
                                  }/>


                            Now, reconsidering equation 5:
                            <Math displayMode={true}
                                  tex={'\\begin{align*} y_n = \\frac{y_c}{w_c} &= ' +
                                      '\\frac{2}{b-t} \\frac{n \\cdot y_e}{-z_e} + \\frac{b+t}{t-b} \\\\' +
                                      'y_c &= \\frac{2n}{b-t} \\cdot y_e + \\frac{b+t}{t-b} \\cdot (-z_e)' +
                                      '\\end{align*}'
                                  }/>
                            and equation 6:
                            <Math displayMode={true}
                                  tex={'\\begin{align*} x_n = \\frac{x_c}{w_c} &= ' +
                                      '\\frac{2}{r-l} \\frac{n \\cdot x_e}{-z_e} + \\frac{r+l}{l-r} \\\\' +
                                      'x_c &= \\frac{2n}{r-l} \\cdot x_e + \\frac{r+l}{l-r} \\cdot (-z_e)' +
                                      '\\end{align*}'
                                  }/>

                            Now, the first two rows of <Math tex={'P'}/> can
                            also be determined.

                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      'x_c \\\\' +
                                      'y_c \\\\' +
                                      'z_c \\\\' +
                                      'w_c \\\\' +
                                      '\\end{bmatrix}' +
                                      ' = ' +
                                      '\\begin{bmatrix}' +
                                      '\\frac{2n}{r-l} & 0 & \\frac{r+l}{l-r} & 0 \\\\' +
                                      '0 & \\frac{2n}{(b-t)} & \\frac{b+t}{t-b} & 0 \\\\' +
                                      'm_{20} & m_{21} & m_{22} & m_{23} \\\\' +
                                      '0 & 0 & -1 & 0 \\\\' +
                                      '\\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      'x_e \\\\' +
                                      'y_e \\\\' +
                                      'z_e \\\\' +
                                      'w_e \\\\' +
                                      '\\end{bmatrix}'
                                  }/>

                            The final problem to tackle is the transformation
                            from <Math tex={'z_e'}/> to <Math tex={'z_c'}/>.

                            Interestingly, the previous approach for finding the
                            mapping functions for x and y don't work for z. The
                            approach first
                            found <Math tex={'x_p'}/> and <Math tex={'y_p'}/> on
                            the near plane,
                            then mapped them to the NDC bounds. Consider the
                            z-coordinate:
                            the <Math tex={'z_p = n'}/> in all situations, by
                            definition.

                            One could attempt to skip the near plane projection
                            step,
                            and instead seek a direct linear map from <Math
                            tex={'z_e'}/> to <Math
                            tex={'z_n'}/>. <Math
                            tex={'[n, f] \\rightarrow [0, 1]'}/>, so
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'z_n = \\frac{z_c}{w_c} &= \\frac{1}{f-n} \\cdot z_e + \\frac{n}{n-f} \\\\' +
                                      'z_c &= \\frac{1}{f-n} \\cdot -({z_e}^2) + \\frac{n}{n-f} \\cdot {(-z_e)} \\\\' +
                                      '\\end{align*}'}/>
                            and the same issue is encountered, where it is
                            not possible to introduce the <Math tex='{z_e}^2'/>
                            term into <Math tex='P'/>.

                            An alternative approach is desired. It is known
                            that <Math tex={'z_c'}/> is dependent on
                            neither <Math tex={'x_e'}/>
                            nor <Math tex={'y_e'}/>, thus the third row of <Math
                            tex={'P'}/> can be expressed
                            as follows:

                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      'x_c \\\\' +
                                      'y_c \\\\' +
                                      'z_c \\\\' +
                                      'w_c \\\\' +
                                      '\\end{bmatrix}' +
                                      ' = ' +
                                      '\\begin{bmatrix}' +
                                      '\\frac{2n}{r-l} & 0 & \\frac{r+l}{l-r} & 0 \\\\' +
                                      '0 & \\frac{2n}{(b-t)} & \\frac{b+t}{t-b} & 0 \\\\' +
                                      '0 & 0 & A & B \\\\' +
                                      '0 & 0 & 1 & 0 \\\\' +
                                      '\\end{bmatrix}' +
                                      '\\begin{bmatrix}' +
                                      'x_e \\\\' +
                                      'y_e \\\\' +
                                      'z_e \\\\' +
                                      'w_e \\\\' +
                                      '\\end{bmatrix}'
                                  }/>

                            Note that <Math tex={'w_e'}/> is always 1.

                            <Math displayMode={true}
                                  tex={'\\begin{align*} ' +
                                      'z_n = \\frac{z_c}{w_c} &= \\frac{A \\cdot z_e + B \\cdot w_e}{w_c} \\\\' +
                                      'z_n &= \\frac{A \\cdot z_e + B}{-z_e}' +
                                      '\\end{align*}'}/>

                            Solving a linear system with 2 variables requires
                            2 inputs. Luckily, exactly two inputs are available.

                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '0 &= \\frac{-An + B}{n}\\\\' +
                                      '1 &= \\frac{-Af + B}{f}\\\\' +
                                      'B &= An \\\\' +
                                      '∴f &= -Af + An \\\\' +
                                      '&= A(n-f) \\\\' +
                                      '\\rightarrow A &= \\frac{f}{n-f}\\\\' +
                                      '\\rightarrow B &= \\frac{fn}{n-f}' +
                                      '\\end{align*}'}/>

                            The final derived <Math tex={'P'}/> is thus

                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix}' +
                                      '\\frac{2n}{r-l} & 0 & \\frac{r+l}{l-r} & 0 \\\\' +
                                      '0 & \\frac{2n}{b-t} & \\frac{b+t}{t-b} & 0 \\\\' +
                                      '0 & 0 & \\frac{f}{n-f} & \\frac{fn}{n-f} \\\\' +
                                      '0 & 0 & -1 & 0 \\\\' +
                                      '\\end{bmatrix}'
                                  }/>


                        </Paragraph>
                    </Card>
                </div>
                <ScrollyTeller
                    width={textCardWidth}
                    height={'auto'}
                    position={{
                        left: 'calc(50vw + 2rem)',
                        top: scrollyTellerY + 'px'
                    }}
                    animationData={animationData}
                    marker={currentMarker}/>
            </div>
            <Button route='' linkText='JP'/>
        </div>
    );
}

export default SceneToScreen;
