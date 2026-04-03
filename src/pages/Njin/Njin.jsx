import React from 'react';
import styles from './Njin.module.css'
import {Card} from "@components/Card/Card.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import List from "@components/List/List.jsx";
import {C, CF, CK, CN, CT, I} from "@util/typography.jsx";
import Code from "@components/Code/Code.jsx";
import CodeLine from "@components/Code/CodeLine.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";

function Njin() {
    const {t} = useLanguage();
    return (
        <div className={styles.content}>
                <Card>
                    <Paragraph size={1}>{t('njin.page.title')}</Paragraph>
                    <Paragraph size={2}>{t('njin.page.subtitle')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.intro.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.page.intro.p2')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.page.intro.p3')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.page.intro.p4')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.page.intro.p5')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.overview.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('njin.page.overview.stack')}</Paragraph>
                    <List>
                        <span>{t('njin.page.stack.1')}</span>
                        <span>{t('njin.page.stack.2')}</span>
                    </List>
                    <Spacer/>
                    <Paragraph>{t('njin.page.overview.features')}</Paragraph>
                    <List>
                        <span>{t('njin.page.feature.1')}</span>
                        <span>{t('njin.page.feature.2')}</span>
                        <span>{t('njin.page.feature.3')}</span>
                        <span>{t('njin.page.feature.4')}</span>
                        <span>{t('njin.page.feature.5')}</span>
                    </List>
                    <Spacer/>
                    <Paragraph>
                        <TextLink
                            link={'https://github.com/sugimoto-asahi/njin'}>Github</TextLink>
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.page.overview.sections')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.ecs.title')}</Paragraph>
                    <Spacer size={2}/>

                    <Paragraph>
                        {t('njin.ecs.p1.before')}<I>{t('njin.ecs.p1.entity')}</I>
                        {t('njin.ecs.p1.mid')}<I>{t('njin.ecs.p1.entityid')}</I>{t('njin.ecs.p1.after')}
                    </Paragraph>

                    <Paragraph>{t('njin.ecs.p2.before')}<CT>njTransformComponent</CT>{t('njin.ecs.p2.after')}</Paragraph>
                    <Spacer/>
                    <Code>
                        <CodeLine><CK>struct</CK>{' '}
                            <CT>njTransformComponent</CT>{' {'}</CodeLine>
                        <CodeLine
                            indent={1}><CT>math::njMat4f</CT>{' '}<CN>transform</CN>;</CodeLine>
                        <CodeLine>{'}'}</CodeLine>
                    </Code>
                    <Spacer/>
                    <Paragraph>{t('njin.ecs.p3.before')}<CT>math::njMat4f</CT>{t('njin.ecs.p3.after')}</Paragraph>

                    <Paragraph>{t('njin.ecs.p4')}</Paragraph>

                    <Spacer/>
                    <Paragraph>{t('njin.ecs.p5')}</Paragraph>
                    <Spacer/>

                    <Paragraph>
                        {t('njin.ecs.p6.before')}<CT>njRenderSystem</CT>
                        {t('njin.ecs.p6.mid1')}<I>{t('njin.ecs.p6.at_least')}</I>
                        {t('njin.ecs.p6.mid2')}<I>{t('njin.ecs.p6.other')}</I>
                        {t('njin.ecs.p6.after')}
                    </Paragraph>

                    <Spacer/>

                    <MediaFrame media='/images/njin/ecs-conceptual.png'
                                caption='conceptual view of entities and their components'/>

                    <Spacer/>
                    <Paragraph><CT>njEntityManager</CT>{t('njin.ecs.p7.before')}</Paragraph>

                    <List>
                        <span>{t('njin.ecs.list.1')}</span>
                        <span>{t('njin.ecs.list.2')}</span>
                    </List>
                    <Spacer/>

                    <Paragraph>
                        {t('njin.ecs.p8.before')}<I>{t('njin.ecs.p8.archetype')}</I>{t('njin.ecs.p8.after')}
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>{t('njin.ecs.p9')}</Paragraph>
                    <Spacer/>

                    <Paragraph>{t('njin.ecs.p10')}</Paragraph>
                    <Spacer/>

                    <Paragraph>
                        {t('njin.ecs.p11.before')}<CT>njEntityManager</CT>
                        {t('njin.ecs.p11.mid')}<CF>add_component</CF>
                        {t('njin.ecs.p11.after')}<CT>njEntityManager</CT>{t('njin.ecs.p11.end')}
                    </Paragraph>
                    <Spacer/>

                    <Paragraph>{t('njin.ecs.advantages')}</Paragraph>
                    <List>
                        <span>{t('njin.ecs.adv.1')}</span>
                        <span>{t('njin.ecs.adv.2')}</span>
                    </List>
                    <Spacer/>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.renderer.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('njin.renderer.p1.before')}<CT>njRenderSystem</CT>{t('njin.renderer.p1.after')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.renderer.p2.before')}<CN>config.h</CN>{t('njin.renderer.p2.after')}</Paragraph>
                    <Spacer/>
                    <Paragraph>
                        {t('njin.renderer.p3.before')}<CN>main.cpp</CN>{t('njin.renderer.p3.mid1')}<CT>Renderer</CT>
                        {t('njin.renderer.p3.mid2')}<CT>Renderer</CT>{t('njin.renderer.p3.after')}
                    </Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.physics.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('njin.physics.p1.before')}<CT>njPhysicsSystem</CT>{t('njin.physics.p1.after')}</Paragraph>
                    <Spacer/>
                    <Paragraph>
                        {t('njin.physics.p2.before')}<TextLink
                        link={'https://github.com/erich666/GraphicsGems/blob/master/gems/BoxSphere.c'}>{t('njin.physics.p2.algorithm')}</TextLink>{t('njin.physics.p2.after')}
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.physics.p3.before')}<CN>BVH.h</CN>{t('njin.physics.p3.after')}</Paragraph>
                </Card>

                <Card>
                    <Paragraph size={2}>{t('njin.page.gltf.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('njin.gltf.p1.before')}<CT>RenderInfos</CT>{t('njin.gltf.p1.after')}</Paragraph>
                    <Spacer/>
                    <Paragraph>
                        {t('njin.gltf.p2.before')}<TextLink
                            link={'https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html'}>{t('njin.gltf.p2.spec')}</TextLink>
                        {t('njin.gltf.p2.mid')}<CT>njVertex</CT>{t('njin.gltf.p2.after')}<CN>GLTFLoader.h</CN>{t('njin.gltf.p2.end')}
                    </Paragraph>
                    <Spacer/>

                </Card>
                <Card>
                    <Paragraph size={2}>{t('njin.page.sprite.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>{t('njin.sprite.p1')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.sprite.p2')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.sprite.p3')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.sprite.p4')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.sprite.p5')}</Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.sprite.p6')}</Paragraph>
                </Card>
                <Card>
                    <Paragraph size={2}>{t('njin.page.demo.title')}</Paragraph>
                    <Spacer size={2}/>
                    <Paragraph>
                        {t('njin.demo.p1.before')}<CT>njInputSystem</CT>
                        {t('njin.demo.p1.mid')}<CT>njMovementSystem</CT>
                        {t('njin.demo.p1.mid2')}<CT>njPhysicsComponent</CT>{t('njin.demo.p1.after')}
                    </Paragraph>
                    <Spacer/>
                    <Paragraph>{t('njin.demo.p2')}</Paragraph>
                </Card>
        </div>
    );

}

export default Njin;
