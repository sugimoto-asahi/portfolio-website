import React from 'react';
import styles from './TheVulkanModel.module.css'
import {Card} from "@components/Card/Card.jsx";
import Paragraph from "@components/Paragraph/Paragraph.jsx";
import Spacer from "@components/Spacer/Spacer.jsx";
import List from "@components/List/List.jsx";
import {CC, CF, CK, CN, CT, I, B} from "@util/typography.jsx";
import TextLink from "@components/TextLink/TextLink.jsx";
import CodeLine from "@components/Code/CodeLine.jsx";
import Code from "@components/Code/Code.jsx";
import SvgContainer from "@components/SvgContainer/SvgContainer.jsx";
import IsometricScene from "@svg/IsometricScene.jsx";
import ScreenView from "@svg/ScreenView.jsx";
import {useLanguage} from "@i18n/LanguageContext.jsx";


function TheVulkanModel() {
    const {t} = useLanguage();
    return (
        <div className={styles.theVulkanModel}>
            <Card>
                <Paragraph size={1} className={styles.title}>{t('articles.vulkan.title')}</Paragraph>
            </Card>
            <Card>
                <Paragraph size={2}>{t('vulkan.about.title')}</Paragraph>
                <Spacer size={5}/>
                <Paragraph>{t('vulkan.about.audience.intro')}</Paragraph>

                <List>
                    <span>{t('vulkan.about.audience.1')}</span>
                    <span>{t('vulkan.about.audience.2')}</span>
                    <span>{t('vulkan.about.audience.3')}</span>
                    <span>{t('vulkan.about.audience.4')}</span>
                </List>
                <Spacer size={5}/>

                <Paragraph>{t('vulkan.about.will.intro')}</Paragraph>
                <List>
                    <span>{t('vulkan.about.will.1')}</span>
                    <span>{t('vulkan.about.will.2')}</span>
                    <span>{t('vulkan.about.will.3')}</span>
                </List>

                <Spacer/>
                <Paragraph>{t('vulkan.about.prereq')}</Paragraph>
                <Spacer/>

                <List>
                    <span><I>shader, binding, layout</I></span>
                    <span><I>framebuffer, attachment</I></span>
                    <span><I>NDC, pipeline, viewport</I></span>
                </List>
            </Card>


            <Card>
                <Paragraph size={2}>{t('vulkan.issue.title')}</Paragraph>
                <Spacer size={2}/>
                <Paragraph>{t('vulkan.issue.input')}</Paragraph>
                <Spacer size={2}/>
                <SvgContainer SvgComponent={IsometricScene}
                              style={{width: '70%'}}/>

                <Spacer size={2}/>
                <Paragraph>{t('vulkan.issue.output')}</Paragraph>
                <Spacer size={2}/>
                <SvgContainer SvgComponent={ScreenView}
                              style={{width: '70%'}}/>

                <Spacer size={2}/>
            </Card>

            <Card>
                <Paragraph size={2}>{t('vulkan.graphics.title')}</Paragraph>
                <Spacer size={2}/>
                <Paragraph><B>Vulkan</B>{t('vulkan.graphics.p1.after')}
                </Paragraph>
                <Spacer size={5}/>
                <Paragraph>{t('vulkan.graphics.p2')}</Paragraph>
                <Spacer/>
                <Paragraph>{t('vulkan.graphics.p3')}</Paragraph>
                <Spacer/>

                <Paragraph size={3}>{t('vulkan.pattern.title')}</Paragraph>
                <Spacer size={3}/>
                <Paragraph>{t('vulkan.pattern.intro')}</Paragraph>
                <Spacer/>

                <Paragraph>{t('vulkan.pattern.example')}</Paragraph>
                <Spacer/>

                <Paragraph size={4}>{t('vulkan.create.title')}</Paragraph>
                <Spacer size={4}/>
                <Paragraph>
                    {t('vulkan.create.p1.before')}<CT>Vk*</CT>{t('vulkan.create.p1.mid')}<CT>VkBuffer</CT>{t('vulkan.create.p1.after')}
                </Paragraph>
                <Spacer/>

                <Paragraph>
                    {t('vulkan.create.p2.before')}<I>{t('vulkan.create.p2.italic')}</I>{t('vulkan.create.p2.mid1')}<CT>vkCreate*</CT>{t('vulkan.create.p2.mid2')}<CT>VkBuffer</CT>{t('vulkan.create.p2.after')}<CF>vkCreateBuffer.</CF>
                </Paragraph>
                <Spacer/>

                <Paragraph>
                    {t('vulkan.create.p3.before')}<CT>Vk*CreateInfo</CT>{t('vulkan.create.p3.mid1')}<CT>VkBuffer</CT>{t('vulkan.create.p3.mid2')}<CT>VkBufferCreateInfo</CT>{t('vulkan.create.p3.after')}
                </Paragraph>
                <Spacer/>

                <Paragraph>
                    {t('vulkan.create.p4.before')}<CT>VkBuffer</CT>{t('vulkan.create.p4.after')}
                </Paragraph>
                <Spacer/>

                <Code>
                    <CodeLine><CT>VkResult</CT> <CF>vkCreateBuffer</CF>
                        (</CodeLine>
                    <CodeLine
                        indent={1}><CT>VkDevice</CT> device,</CodeLine>
                    <CodeLine indent={1}><CK>const </CK>
                        <CT>VkBufferCreateInfo*</CT> pCreateInfo,</CodeLine>
                    <CodeLine indent={1}><CK>const </CK>
                        <CT>VkAllocationCallbacks*</CT> pAllocator,</CodeLine>
                    <CodeLine
                        indent={1}><CT>VkBuffer*</CT> pBuffer);</CodeLine>
                </Code>
                <Spacer/>

                <Paragraph size={4}>{t('vulkan.createinfo.title')}</Paragraph>
                <Spacer size={4}/>
                <Paragraph>
                    {t('vulkan.createinfo.p1.before')}<CN>pCreateInfo</CN>{t('vulkan.createinfo.p1.mid1')}<CT>VkBufferCreateInfo</CT>{t('vulkan.createinfo.p1.mid2')}
                </Paragraph>
                <Spacer/>

                <Paragraph>
                    {t('vulkan.createinfo.p2.before')}<CT>Vk*CreateInfo</CT>{t('vulkan.createinfo.p2.mid1')}<CT>sType</CT>{t('vulkan.createinfo.p2.after')}
                </Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.createinfo.p3.before')}<CT>sType</CT>{t('vulkan.createinfo.p3.mid1')}<CT>sType</CT>{t('vulkan.createinfo.p3.mid2')}<CT>VkBufferCreateInfo</CT>{t('vulkan.createinfo.p3.mid3')}<TextLink
                    link="https://docs.vulkan.org/spec/latest/chapters/resources.html#VUID-VkBufferCreateInfo-sType-sType">{t('vulkan.createinfo.p3.link')}</TextLink>{t('vulkan.createinfo.p3.after')}
                </Paragraph>
                <Spacer/>
                <Code>
                    <CodeLine>
                        VUID-VkBufferCreateInfo-sType-sType
                    </CodeLine>

                    <CodeLine>
                        sType must be
                        VK_STRUCTURE_TYPE_BUFFER_CREATE_INFO
                    </CodeLine>
                </Code>
                <Spacer/>

                <Paragraph size={4}>{t('vulkan.destroy.title')}</Paragraph>
                <Spacer size={4}/>
                <Paragraph>
                    {t('vulkan.destroy.p1.before')}<I>{t('vulkan.destroy.p1.italic')}</I>{t('vulkan.destroy.p1.mid1')}<CF>vkDestroy*</CF>{t('vulkan.destroy.p1.mid2')}<CT>VkBuffer</CT>{t('vulkan.destroy.p1.after')}<CF>vkDestroyBuffer</CF>{t('vulkan.destroy.p1.end')}
                </Paragraph>
                <Spacer/>

                <Code>
                    <CodeLine><CT>void </CT>
                        <CF>vkDestroyBuffer</CF>(</CodeLine>
                    <CodeLine
                        indent={1}><CT>VkDevice</CT> device,</CodeLine>
                    <CodeLine
                        indent={1}><CT>VkBuffer</CT> buffer,</CodeLine>
                    <CodeLine indent={1}><CK>const </CK>
                        <CT>VkAllocationCallbacks*</CT> pAllocator);</CodeLine>
                </Code>

                <Spacer/>
                <Paragraph>{t('vulkan.destroy.p2')}</Paragraph>

                <Spacer/>
                <Paragraph size={4}>{t('vulkan.summary.title')}</Paragraph>
                <Spacer size={4}/>
                <Paragraph>{t('vulkan.summary.p1')}</Paragraph>
                <Spacer/>
                <Code>
                    <CodeLine><CT>VkBufferCreateInfo</CT> {'info {'} <CC>//
                        structured
                        binding declaration</CC>
                    </CodeLine>
                    <CodeLine indent={1}><CT>.sType</CT> =
                        VK_STRUCTURE_TYPE_BUFFER_CREATE_INFO,</CodeLine>
                    <CodeLine indent={1}>...</CodeLine>
                    <CodeLine>{'};'}</CodeLine>
                    <br/>
                    <CodeLine><CT>VkBuffer</CT> {'buffer{VK_NULL_HANDLE}'};</CodeLine>
                    <CodeLine>{'if ('}<CF>vkCreateBuffer</CF>{'(..., &info, ..., &buffer) ' +
                        '!= VK_SUCCESS) {'}
                    </CodeLine>
                    <CodeLine indent={1}><CC>// enter here if Vulkan tells
                        us it failed</CC></CodeLine>
                    <CodeLine
                        indent={1}><CK>throw </CK><CF>std::runtime_error</CF>{'("failed to create buffer");'}
                    </CodeLine>
                    <CodeLine>{'}'}</CodeLine>
                    <br/>
                    <CodeLine><CC>// pass buffer handle around, do
                        whatever </CC></CodeLine>

                    <br/>
                    <CodeLine><CF>vkDestroyBuffer</CF>{'(..., buffer, ...);'}
                    </CodeLine>
                </Code>

            </Card>

            <Card>
                <Paragraph size={2}>{t('vulkan.overview.title')}</Paragraph>
                <Spacer size={2}/>
                <Paragraph>{t('vulkan.overview.p1')}</Paragraph>

                <Spacer/>
                <Paragraph>{t('vulkan.overview.p2')}</Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>{t('vulkan.step1.title')}</Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step1.p1.before')}<I>{t('vulkan.step1.p1.italic1')}</I>{t('vulkan.step1.p1.mid')}<I>{t('vulkan.step1.p1.italic2')}</I>{t('vulkan.step1.p1.after')}
                </Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step1.p2.before')}<CT>VkPhysicalDevice</CT>{t('vulkan.step1.p2.mid')}
                </Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step1.p3.before')}<CT>VkDevice</CT>{t('vulkan.step1.p3.after')}
                </Paragraph>

                <Paragraph>{t('vulkan.step1.p4')}</Paragraph>
                <Spacer size={3}/>


                <Paragraph size={3}>{t('vulkan.step2.title')}</Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step2.p1.before')}<TextLink
                    link='https://docs.vulkan.org/spec/latest/chapters/VK_KHR_surface/wsi.html#_wsi_surface'
                    popupMessage='From the documentation:
                        "Native platform surface or window objects are abstracted by surface objects,
                        which are represented by VkSurfaceKHR handles."'><CT>VkSurfaceKHR</CT></TextLink>{t('vulkan.step2.p1.after')}
                </Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>{t('vulkan.step3.title')}</Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step3.p1.before')}<CT>VkSwapchainKHR</CT>{t('vulkan.step3.p1.after')}
                </Paragraph>
                <Spacer/>

                <Paragraph>
                    {t('vulkan.step3.p2.before')}<CT>VkImage</CT>{t('vulkan.step3.p2.after')}
                </Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>{t('vulkan.step4.title')}</Paragraph>
                <Spacer/>
                <Paragraph>{t('vulkan.step4.p1')}</Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step4.p2.before')}<CT>VkPipeline</CT>{t('vulkan.step4.p2.after')}
                </Paragraph>

                <Spacer size={3}/>
                <Paragraph size={3}>{t('vulkan.step5.title')}
                </Paragraph>
                <Spacer/>
                <Paragraph>
                    {t('vulkan.step5.p1.before')}<I>{t('vulkan.step5.p1.italic')}</I>{t('vulkan.step5.p1.after')}<CT>VkRenderPass</CT>{t('vulkan.step5.p1.end')}
                </Paragraph>


            </Card>
        </div>
    );

}

export default TheVulkanModel;
