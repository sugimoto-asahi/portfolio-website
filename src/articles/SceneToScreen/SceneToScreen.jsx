import React, {useEffect, useRef, useState} from 'react'
import styles from './SceneToScreen.module.css'
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
import {useLanguage} from "@i18n/LanguageContext.jsx";

function SceneToScreen() {
    const {t} = useLanguage();
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
                    if (!markerStack.current.includes(entry.target.id)) {
                        markerStack.current.push(entry.target.id);
                    }
                }

                if (!entry.isIntersecting) {
                    if (entry.target.id === markerStack.current[markerStack.current.length - 1]) {
                        markerStack.current.pop();
                    }
                }

                setCurrentMarker(markerStack.current[markerStack.current.length - 1]);
            });
        };
        const observer = new IntersectionObserver(callback, options);
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
            <div className={styles.content}>
                <Card>
                    <Paragraph size={1} className={styles.title}>{t('articles.scene.title')}</Paragraph>
                </Card>
                <div className={styles.textCards} ref={firstTextCardRef}>
                    <Card>
                        <Paragraph size={2}>{t('sts.s1.title')}</Paragraph>
                        <div ref={m0Ref} id='m0'/>
                        <Spacer size={2}/>
                        <Paragraph>{t('sts.s1.p1')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s1.p2')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s1.p3')}</Paragraph>
                        <div ref={m1Ref} id='m1'/>
                    </Card>
                    <Card>
                        <Paragraph size={2}>{t('sts.s2.title')}</Paragraph>
                        <Spacer size={2}/>
                        <Paragraph>{t('sts.s2.p1')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.p2')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.p3')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.p4')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.p5')}</Paragraph>
                        <Spacer size={3}/>

                        <Paragraph size={3}>{t('sts.s2.sub1.title')}</Paragraph>
                        <div ref={m2Ref} id='m2'/>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.sub1.p1')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.sub1.p2')}</Paragraph>
                        <div ref={m3Ref} id='m3'/>
                        <Spacer/>
                        <Paragraph>{t('sts.s2.sub1.p3')}</Paragraph>

                        <Spacer size={3}/>
                        <Paragraph size={3}>{t('sts.s2.sub2.title')}</Paragraph>
                        <Spacer/>
                        <Paragraph>
                            {t('sts.s2.sub2.p1.before')}<I>x</I> by <I>y</I>{t('sts.s2.sub2.p1.after')}
                        </Paragraph>
                    </Card>

                    <Card>
                        <Paragraph size={2}>{t('sts.s3.title')}</Paragraph>
                        <Spacer size={2}/>

                        <Paragraph size={3}>{t('sts.s3.concept.title')}</Paragraph>
                        <Spacer/>

                        <div ref={m4Ref} id='m4'/>
                        <Paragraph>{t('sts.s3.p1')}</Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.p2')}</Paragraph>
                        <Spacer/>

                        <List>
                            <span>{t('sts.s3.list.1.before')}<Math tex={'(0, 0)'}/></span>
                            <span>{t('sts.s3.list.2.before')}<Math tex={'n'}/>{t('sts.s3.list.2.after')}</span>
                            <span>{t('sts.s3.list.3')}</span>
                        </List>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p3.before')}<I>{t('sts.s3.p3.italic')}</I>{t('sts.s3.p3.after.before')}<Math tex={'(0, 0)'}/>{t('sts.s3.p3.after.after')}
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            {t('sts.s3.p4.before')}<I>{t('sts.s3.p4.italic1')}</I>{t('sts.s3.p4.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p5.before')}<Math tex={'(0, n)'}/>{t('sts.s3.p5.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.p6')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p7.before')}<I>{t('sts.s3.p7.italic')}</I>{t('sts.s3.p7.after.before')}<Math tex={'a \\geq y \\geq -a'}/>{t('sts.s3.p7.after.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p8.before')}{' '}<Math tex={'(n, 0)'}/>{' '}{t('sts.s3.p8.mid1')}<Math tex={'(n, a)'}/>{t('sts.s3.p8.mid2')}<Math tex={'(n, 0)'}/>{t('sts.s3.p8.mid3')}<Math tex={'(n, -a)'}/>{t('sts.s3.p8.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p9.before')}<Math tex={'o'}/>{t('sts.s3.p9.mid')}{' '}<Math tex={'n'}/>{t('sts.s3.p9.mid2')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.p10')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p11.before')}<Math tex={'(n, 10)'}/>{t('sts.s3.p11.mid')}<Math tex={'(o, 0)'}/>{t('sts.s3.p11.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.p12.before')}<Math tex={'(n, 10)'}/>{t('sts.s3.p12.mid')}<Math tex={'(o, 0)'}/>{t('sts.s3.p12.after')}
                        </Paragraph>
                        <Spacer size={3}/>

                        <Paragraph size={3}>{t('sts.s3.view.title')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p1.before')}<Math tex={'(n, 10)'}/>{t('sts.s3.view.p1.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p2.before')}<Math tex={'(500, 1000, z)'}/>{t('sts.s3.view.p2.mid')}<Math tex={'z = n'}/>{t('sts.s3.view.p2.mid2')}<Math tex={'(500, 1000)'}/>{t('sts.s3.view.p2.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p3.before')}<Math tex={'(273.54, 1728.23, 3.73)'}/>{t('sts.s3.view.p3.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p4.before')}<Math tex={'(0, 0)'}/>{t('sts.s3.view.p4.mid')}<Math tex={'z = n'}/>{t('sts.s3.view.p4.mid2')}<Math tex={'n'}/>{t('sts.s3.view.p4.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.view.p5')}</Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.view.p6.before')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p7.before')}<Math tex={'V'}/>{t('sts.s3.view.p7.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p8.before')}<Math tex={'V'}/>{t('sts.s3.view.p8.mid')}<Math tex={'V_l'}/>{t('sts.s3.view.p8.mid2')}<Math tex={'V_r'}/>{t('sts.s3.view.p8.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p9.before')}<Math tex={'(0, 0)'}/>{t('sts.s3.view.p9.mid')}<Math tex={'w'}/>{t('sts.s3.view.p9.mid2')}<Math tex={'e  = (0, 0, 0, 1)'}/>{t('sts.s3.view.p9.after')}
                            <Math displayMode={true}
                                  tex={'\\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} = V_l' +
                                      '\\begin{bmatrix} w_x \\\\ w_y \\\\ w_z \\\\ 1 \\end{bmatrix}'}/>
                            <Math displayMode={true}
                                  tex={'V_l = \\begin{bmatrix}' +
                                      '1 & 0 & 0 & -w_x \\\\' +
                                      '0 & 1 & 0 & -w_y \\\\' +
                                      '0 & 0 & 1 & -w_z \\\\' +
                                      '0 & 0 & 0 & 1 \\end{bmatrix}'}/>
                            {t('sts.s3.view.p9.end.before')}{' '}
                            <Math tex={'(-w_x, -w_y, -w_z)'}/>{t('sts.s3.view.p9.end.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.view.p10.before')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p11.before')}<Math tex={'f'}/>{t('sts.s3.view.p11.mid')}<Math tex={'u'}/>{t('sts.s3.view.p11.mid2')}<Math tex={'r'}/>{t('sts.s3.view.p11.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s3.view.p12.before')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p13.before')}<Math tex={'p'}/>{t('sts.s3.view.p13.mid')}<Math tex={'\\frac{p - c}{\\left|p-c\\right|}'}/>{t('sts.s3.view.p13.mid2')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p14.before')}<Math tex={'f'}/>{t('sts.s3.view.p14.mid')}<Math tex={'f'}/>{t('sts.s3.view.p14.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p15.before')}<Math tex={"u'"}/>{t('sts.s3.view.p15.mid')}<B>{t('sts.s3.view.p15.bold')}</B>{t('sts.s3.view.p15.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            <Math tex={"u'"}/>{t('sts.s3.view.p16.before')}<Math tex={'f'}/>{t('sts.s3.view.p16.mid')}<Math tex={"f \\times u' = r"}/>{' '}
                            {t('sts.s3.view.p16.mid2')}<Math tex={'f'}/>{t('sts.s3.view.p16.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p17.before')}<Math tex={'r'}/>{t('sts.s3.view.p17.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s3.view.p18.before')}<Math tex={"u'"}/>{t('sts.s3.view.p18.mid')}<Math tex={'f'}/>{t('sts.s3.view.p18.mid2')}<Math tex={'r'}/>{t('sts.s3.view.p18.mid3')}<Math tex={'u'}/>{t('sts.s3.view.p18.after')}<Math tex={'u = r \\times f'}/>{t('sts.s3.view.p18.end')}<Math tex={'p'}/>{t('sts.s3.view.p18.end2')}
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
                        <Paragraph size={2}>{t('sts.s4.title')}</Paragraph>
                        <Spacer size={2}/>

                        <Paragraph size={3}>{t('sts.s4.concept.title')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s4.p1')}</Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s4.p2')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s4.p3')}</Paragraph>
                        <Spacer/>

                        <Paragraph>{t('sts.s4.p4')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s4.p5.before')}<I>{t('sts.s4.p5.italic')}</I>{t('sts.s4.p5.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s4.p6.before')}<Math tex={'x \\in [-1, 1]'}/>{t('sts.s4.p6.mid')}<Math tex={'y \\in [-1, 1]'}/>{t('sts.s4.p6.mid2')}<Math tex={'z \\in [0, 1]'}/>{t('sts.s4.p6.mid3')}{t('sts.s4.p6.link') === 'documentation'
                            ? <TextLink link={'https://docs.vulkan.org/spec/latest/chapters/vertexpostproc.html#vertexpostproc-clipping'}>documentation</TextLink>
                            : <TextLink link={'https://docs.vulkan.org/spec/latest/chapters/vertexpostproc.html#vertexpostproc-clipping'}>{t('sts.s4.p6.link')}</TextLink>}{t('sts.s4.p6.after')}
                        </Paragraph>

                        <SubCard>
                            <Paragraph>
                                {t('sts.s4.subcard1.before')}<I>{t('sts.s4.subcard1.italic')}</I>{t('sts.s4.subcard1.after.before')}

                                <Math displayMode={true}
                                      tex={'\\begin{align*}' +
                                          '-w_c \\leq x_c \\leq w_c \\\\' +
                                          '-w_c \\leq y_c \\leq w_c \\\\' +
                                          'z_m \\leq z_c \\leq w_c \\\\' +
                                          '\\end{align*}'}/>

                                {t('sts.s4.subcard1.where.before')}
                                <CF>VkPipelineViewportDepthClipControlCreateInfoEXT</CF>
                                <br/><C>::negativeOneToOne</C>
                                {' '}
                                {t('sts.s4.subcard1.where.mid')}<C>VK_TRUE</C>{t('sts.s4.subcard1.where.mid2')}<Math tex={'z_m'}/>{t('sts.s4.subcard1.where.after')}<Math tex={'-w_c'}/>{t('sts.s4.subcard1.where.end.before')}
                            </Paragraph>
                        </SubCard>

                        <Paragraph>
                            {t('sts.s4.p7.before')}<Math tex={'c'}/>{t('sts.s4.p7.mid')}<I>{t('sts.s4.p7.italic')}</I>{t('sts.s4.p7.after')}
                        </Paragraph>

                        <Paragraph>{t('sts.s4.p8')}</Paragraph>
                        <SubCard>
                            <Paragraph>
                                {t('sts.s4.subcard2.before')}<I>{t('sts.s4.subcard2.italic')}</I>{t('sts.s4.subcard2.after')}
                                <Math displayMode={true}
                                      tex={'\\begin{bmatrix}' +
                                          'x_c \\\\' +
                                          'y_c \\\\' +
                                          'z_c \\\\' +
                                          'w_c' +
                                          '\\end{bmatrix}'}/>

                                {t('sts.s4.subcard2.end')}
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
                            {t('sts.s4.p9.before')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '-1 \\leq x_d \\leq 1 \\\\' +
                                      '-1 \\leq y_d \\leq 1 \\\\' +
                                      '0 \\leq z_d \\leq 1' +
                                      '\\end{align*}'}/>
                        </Paragraph>

                        <Paragraph>{t('sts.s4.p10.before')}</Paragraph>
                        <Spacer/>
                        <Paragraph>
                            {t('sts.s4.p11.before')}<CT>VkSurfaceKHR</CT>{t('sts.s4.p11.mid')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph size={3}>{t('sts.s4.viewport.title')}</Paragraph>
                        <Paragraph>{t('sts.s4.viewport.p1')}</Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s4.viewport.p2.before')}<CT>VkImage</CT>{t('sts.s4.viewport.p2.mid')}<CT>VkAttachment</CT>{t('sts.s4.viewport.p2.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s4.viewport.p3.before')}<I>{t('sts.s4.viewport.p3.italic')}</I>{t('sts.s4.viewport.p3.after')}
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            {t('sts.s4.viewport.p4.before')}<Math tex={'(x, y)'}/>{t('sts.s4.viewport.p4.mid')}<Math tex={'(x, y)'}/>{t('sts.s4.viewport.p4.after')}
                        </Paragraph>
                        <Spacer/>

                        <Paragraph>
                            {t('sts.s4.viewport.p5.before')}<I>{t('sts.s4.viewport.p5.italic')}</I>{t('sts.s4.viewport.p5.after')}<Math tex={'(x, y)'}/>
                        </Paragraph>

                        <SubCard>
                            <Paragraph>
                                {t('sts.s4.viewport.subcard.before')}<Math tex={'p_x'}/>{t('sts.s4.viewport.subcard.mid1')}<Math tex={'p_y'}/>{t('sts.s4.viewport.subcard.mid2')}<Math tex={'(o_x, o_y)'}/>{t('sts.s4.viewport.subcard.mid3')}<Math tex={'p_z'}/>{t('sts.s4.viewport.subcard.mid4')}<Math tex={'o_z'}/>{t('sts.s4.viewport.subcard.after')}<Math tex={'(x_f, y_f)'}/>{t('sts.s4.viewport.subcard.end')}

                                <Math displayMode={true}
                                      tex={'\\begin{align*}' +
                                          'x_f = (\\frac{p_x}{2})x_d + o_x \\\\' +
                                          'y_f = (\\frac{p_y}{2})y_d + o_y \\\\' +
                                          'z_f = p_z \\times z_d + o_z' +
                                          '\\end{align*}'}/>
                            </Paragraph>
                        </SubCard>

                        <Paragraph>
                            {t('sts.s4.viewport.p6.before')}<Math tex={'x_d = -1'}/>{t('sts.s4.viewport.p6.mid1')}<Math tex={'x_d = 1'}/>{t('sts.s4.viewport.p6.mid2')}<Math tex={'y_d = -1'}/>{t('sts.s4.viewport.p6.mid3')}<Math tex={'y_d = 1'}/>{t('sts.s4.viewport.p6.mid4')}<I>{t('sts.s4.viewport.p6.italic')}</I>{t('sts.s4.viewport.p6.mid5')}<Math tex={'z = 0'}/>{t('sts.s4.viewport.p6.mid6')}{' '}<Math tex={'z = 1'}/>{t('sts.s4.viewport.p6.mid7')}<Math tex={'z = 0.1'}/>{t('sts.s4.viewport.p6.mid8')}<Math tex={'z = 0.2'}/>{t('sts.s4.viewport.p6.mid9')}<I>{t('sts.s4.viewport.p6.italic2')}</I>{t('sts.s4.viewport.p6.after')}
                        </Paragraph>

                        <Paragraph size={3}>{t('sts.s4.ndc.title')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s4.ndc.p1')}</Paragraph>
                        <Spacer/>
                        <Paragraph>{t('sts.s4.ndc.p2.before')}
                            <Math displayMode={true} tex={'\\begin{align*}' +
                                'p_e &=  (x_e, y_e, z_e, w_e) \\\\' +
                                'p_p &=  (x_p, y_p, z_p, w_p) \\\\' +
                                'p_n &=  (x_n, y_n, z_n, w_n) \\\\' +
                                '\\end{align*}'}/>
                            {t('sts.s4.ndc.p2.mid')}<Math tex={'p_e'}/>{t('sts.s4.ndc.p2.mid2')}{' '}
                            <Math tex={'p_p'}/>{t('sts.s4.ndc.p2.mid3')}
                            <Math tex={'p_n'}/>{t('sts.s4.ndc.p2.mid4')}<Math tex={'z = -n, n > 0'}/>{t('sts.s4.ndc.p2.mid5')}{' '}
                            <Math tex={'z = -f, f > n > 0'}/>{t('sts.s4.ndc.p2.mid6')}
                            <Math tex={'t, b, l, r'}/>{t('sts.s4.ndc.p2.mid7')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '\\frac{y_p}{y_e} &= \\frac{-n}{z_e}\\' +
                                      '\\∴  y_p &= \\frac{n \\cdot y_e}{-z_e} \\tag{1}' +
                                      '\\end{align*}'}/>

                            {t('sts.s4.ndc.p2.similarly')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      '\\frac{x_p}{x_e} &= \\frac{-n}{z_e}\\' +
                                      '\\∴  x_p &= \\frac{n \\cdot x_e}{-z_e} \\tag{2}' +
                                      '\\end{align*}'}/>

                            {t('sts.s4.ndc.p2.next.before')}<Math tex={'p_p'}/>{t('sts.s4.ndc.p2.next.mid')}<Math tex={'y = -1'}/>{t('sts.s4.ndc.p2.next.mid2')}<Math tex={'t'}/>{t('sts.s4.ndc.p2.next.mid3')}<Math tex={'y = -1'}/>{t('sts.s4.ndc.p2.next.mid4')}<Math tex={'b'}/>{t('sts.s4.ndc.p2.next.mid5')}<Math tex={'y = 1'}/>{t('sts.s4.ndc.p2.next.mid6')}<Math tex={'y_n = My_p + B'}/>{t('sts.s4.ndc.p2.next.mid7')}<Math tex={'M'}/>{t('sts.s4.ndc.p2.next.mid8')}<Math tex={'B'}/>{t('sts.s4.ndc.p2.next.after')}
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
                            {t('sts.s4.ndc.p2.sub.before')}<Math tex={'(b, 1)'}/>
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

                            {t('sts.s4.ndc.p2.similarly2')}<Math tex={'x_n = Mx_p + B'}/>
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'M &= \\frac{1-(-1)}{r-l} \\\\' +
                                      '&= \\frac{2}{r-l} \\\\' +
                                      '' +
                                      '\\end{align*}'}/>

                            <Math displayMode={true}
                                  tex={'x_n = \\frac{2}{r-l} \\cdot x_p + \\frac{r+l}{l-r}'}/>

                            {t('sts.s4.ndc.p2.sub2.before')}<Math tex={'(r, 1)'}/>
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

                            {t('sts.s4.ndc.p2.combine.before')}{' '}<Math tex={'y_e'}/>{t('sts.s4.ndc.p2.combine.mid')}<Math tex={'y_p'}/>{t('sts.s4.ndc.p2.combine.after')}

                            <Math displayMode={true}
                                  tex={'y_n = \\frac{2}{b-t} \\frac{n \\cdot y_e}{-z_e} + \\frac{b+t}{t-b} \\tag{5}'}/>

                            {t('sts.s4.ndc.p2.combine2.before')}<Math tex={'x_e'}/>{t('sts.s4.ndc.p2.combine2.mid')}<Math tex={'x_p'}/>{t('sts.s4.ndc.p2.combine2.after')}

                            <Math displayMode={true}
                                  tex={'x_n = \\frac{2}{r-l} \\frac{n \\cdot x_e}{-z_e} + \\frac{r+l}{l-r} \\tag{6}'}/>

                            {t('sts.s4.ndc.p3.before')}
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

                            {t('sts.s4.ndc.p3.issue.before')}<Math tex='m_{00}'/>{' '}{t('sts.s4.ndc.p3.issue.mid')}
                            <Math displayMode={true}
                                  tex={'\\frac{2n}{(r-l){(-z_e)}}'}/>

                            {t('sts.s4.ndc.p3.issue.p2.before')}<Math tex={'P'}/>{t('sts.s4.ndc.p3.issue.p2.mid')}<Math tex={'m_{10}'}/>{t('sts.s4.ndc.p3.issue.p2.mid2')}<Math tex={'m_{10}'}/>{t('sts.s4.ndc.p3.issue.p2.mid3')}<Math tex={'y_e'}/>{t('sts.s4.ndc.p2.combine.mid')}<Math tex={'y_p'}/>{': '}<Math tex={'m_{10}'}/>{t('sts.s4.ndc.p3.issue.p2.after')}
                            <Math displayMode={true}
                                  tex={'\\frac{2n}{(b-t){(-z_e)}}'}
                            />

                            {t('sts.s4.ndc.p3.note.before')}<Math tex={'-z_e'}/>{t('sts.s4.ndc.p3.note.after')}

                            {t('sts.s4.ndc.p3.clip.before')}<I>{t('sts.s4.ndc.p3.clip.italic')}</I>{t('sts.s4.ndc.p3.clip.mid')}<Math tex={'z_e'}/>{t('sts.s4.ndc.p3.clip.mid2')}<I>{t('sts.s4.ndc.p3.clip.italic2')}</I>{t('sts.s4.ndc.p3.clip.after')}
                        </Paragraph>
                        <Spacer/>
                        <Paragraph>
                            {t('sts.s4.ndc.p4.before')}<Math tex={'(x_c, y_c, z_c, w_c)'}/>{t('sts.s4.ndc.p4.after')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'x_n = \\frac{x_c}{w_c} \\\\' +
                                      'y_n = \\frac{y_c}{w_c} \\\\' +
                                      'z_n = \\frac{z_c}{w_c} \\\\' +
                                      '\\end{align*}'}/>

                            {t('sts.s4.ndc.p5.before')}<Math tex={'P'}/>{t('sts.s4.ndc.p5.after')}
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

                            <Math tex={'w_c'}/>{t('sts.s4.ndc.p6.before')}<Math tex={'z_e'}/>{t('sts.s4.ndc.p6.mid')}<Math tex={'P'}/>{t('sts.s4.ndc.p6.after')}
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


                            {t('sts.s4.ndc.p7')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*} y_n = \\frac{y_c}{w_c} &= ' +
                                      '\\frac{2}{b-t} \\frac{n \\cdot y_e}{-z_e} + \\frac{b+t}{t-b} \\\\' +
                                      'y_c &= \\frac{2n}{b-t} \\cdot y_e + \\frac{b+t}{t-b} \\cdot (-z_e)' +
                                      '\\end{align*}'
                                  }/>
                            {t('sts.s4.ndc.p8')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*} x_n = \\frac{x_c}{w_c} &= ' +
                                      '\\frac{2}{r-l} \\frac{n \\cdot x_e}{-z_e} + \\frac{r+l}{l-r} \\\\' +
                                      'x_c &= \\frac{2n}{r-l} \\cdot x_e + \\frac{r+l}{l-r} \\cdot (-z_e)' +
                                      '\\end{align*}'
                                  }/>

                            {t('sts.s4.ndc.p9.before')}<Math tex={'P'}/>{t('sts.s4.ndc.p9.after')}

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

                            {t('sts.s4.ndc.p10.before')}<Math tex={'z_e'}/>{t('sts.s4.ndc.p10.mid')}<Math tex={'z_c'}/>{t('sts.s4.ndc.p10.after')}

                            {t('sts.s4.ndc.p11.before')}<Math tex={'x_p'}/>{t('sts.s4.ndc.p11.mid')}<Math tex={'y_p'}/>{t('sts.s4.ndc.p11.mid2')}<Math tex={'z_p = n'}/>{t('sts.s4.ndc.p11.after')}

                            {t('sts.s4.ndc.p12.before')}<Math tex={'z_e'}/>{t('sts.s4.ndc.p12.mid')}<Math tex={'z_n'}/>{t('sts.s4.ndc.p12.mid2')}<Math tex={'[n, f] \\rightarrow [0, 1]'}/>{t('sts.s4.ndc.p12.after')}
                            <Math displayMode={true}
                                  tex={'\\begin{align*}' +
                                      'z_n = \\frac{z_c}{w_c} &= \\frac{1}{f-n} \\cdot z_e + \\frac{n}{n-f} \\\\' +
                                      'z_c &= \\frac{1}{f-n} \\cdot -({z_e}^2) + \\frac{n}{n-f} \\cdot {(-z_e)} \\\\' +
                                      '\\end{align*}'}/>
                            {t('sts.s4.ndc.p12.end.before')}<Math tex={'{z_e}^2'}/>{t('sts.s4.ndc.p12.end.mid')}<Math tex='P'/>{t('sts.s4.ndc.p12.end.after')}

                            {t('sts.s4.ndc.p13.before')}<Math tex={'z_c'}/>{t('sts.s4.ndc.p13.mid')}<Math tex={'x_e'}/>{t('sts.s4.ndc.p13.mid2')}<Math tex={'y_e'}/>{t('sts.s4.ndc.p13.mid3')}<Math tex={'P'}/>{t('sts.s4.ndc.p13.after')}

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

                            {t('sts.s4.ndc.p14.before')}<Math tex={'w_e'}/>{t('sts.s4.ndc.p14.after')}

                            <Math displayMode={true}
                                  tex={'\\begin{align*} ' +
                                      'z_n = \\frac{z_c}{w_c} &= \\frac{A \\cdot z_e + B \\cdot w_e}{w_c} \\\\' +
                                      'z_n &= \\frac{A \\cdot z_e + B}{-z_e}' +
                                      '\\end{align*}'}/>

                            {t('sts.s4.ndc.p15')}

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

                            {t('sts.s4.ndc.p16.before')}<Math tex={'P'}/>{t('sts.s4.ndc.p16.after')}

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
        </div>
    );
}

export default SceneToScreen;
