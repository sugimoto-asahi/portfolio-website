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


function TheVulkanModel() {
    return (
        <div className={styles.theVulkanModel}>

            <Card>
                <Paragraph size={2}>About this article</Paragraph>
                <Spacer size={5}/>
                <Paragraph>This article is meant for:
                </Paragraph>

                <List>
                        <span>users who have a
                        level of understanding of graphics programming</span>
                    <span>have past experience with abstracted specifications
                        like OpenGL and want to see how similar concepts
                        appear in Vulkan</span>
                    <span>those who need deep renderer customisation,
                            and so want a conceptual understanding of the Vulkan rendering model</span>
                    <span>those who want to understand how Vulkan is structured,
                            so looking up documentation and features to achieve what they want is easier</span>
                </List>
                <Spacer size={5}/>

                <Paragraph>This article will:</Paragraph>
                <List>
                        <span>discuss each step of the journey from a user-defined
                            3D coordinate space to the eventual screen render</span>
                    <span>note the pitfalls and gotchas hidden deep in the specification</span>
                    <span>convince the reader of the fundamental Vulkan model
                            with illustrations and reference to documentation</span>
                </List>

                <Spacer/>
                <Paragraph>As a general description of the level of
                    understanding expected,
                    the following terms should make some sort of sense,
                    or ring some sort of bell in the reader. If the terms
                    mentioned are at least recognisable, it's probably good
                    enough.</Paragraph>
                <Spacer/>

                <List>
                    <span><I>shader, binding, layout</I></span>
                    <span><I>framebuffer, attachment</I></span>
                    <span><I>NDC, pipeline, viewport</I></span>
                </List>
            </Card>


            <Card>
                <Paragraph size={2}>The issue</Paragraph>
                <Spacer size={2}/>
                <Paragraph>
                    Suppose the input is a user-defined, arbitrary 3D
                    world:</Paragraph>
                <Spacer size={2}/>
                <SvgContainer SvgComponent={IsometricScene}
                              style={{width: '70%'}}/>

                <Spacer size={2}/>
                <Paragraph>...and the output is the corresponding render
                    from the point of view of the camera.</Paragraph>
                <Spacer size={2}/>
                <SvgContainer SvgComponent={ScreenView}
                              style={{width: '70%'}}/>

                <Spacer size={2}/>
            </Card>

            <Card>
                <Paragraph size={2}>About graphics in Vulkan</Paragraph>
                <Spacer size={2}/>
                <Paragraph><B>Vulkan</B> is a low-level graphics
                    API that provides more control to the programmer
                    than older, higher-level APIs like OpenGL or DirectX 11.
                </Paragraph>
                <Spacer size={5}/>
                <Paragraph>The Vulkan model is extremely explicit.
                    OpenGL is to Vulkan as C is to assembly.
                    That is not to say that writing Vulkan will look like
                    writing assembly; the comparison is intended to give
                    the reader an intuition regarding the drop in the level
                    of abstraction.
                </Paragraph>
                <Spacer size/>
                <Paragraph>One of the most important things the Vulkan
                    specification
                    offers is an interface for the programmer to create
                    resources on / configure the operation of GPUs in a
                    manufacturer-agnostic manner.
                </Paragraph>
                <Spacer/>

                <Paragraph size={3}>The Vulkan pattern</Paragraph>
                <Spacer size={3}/>
                <Paragraph>There is a singular, most common pattern that
                    appears when using Vulkan to manage GPU resources. This
                    section briefly
                    describes that pattern.</Paragraph>
                <Spacer/>

                <Paragraph>
                    For the example, we suppose the user wants to create a
                    buffer in
                    GPU memory.
                </Paragraph>
                <Spacer/>

                <Paragraph size={4}>Creating resources</Paragraph>
                <Spacer size={4}/>
                <Paragraph>Resources are represented
                    by opaque <CT>Vk*</CT> handles that
                    hide
                    the internal state of
                    Vulkan objects. The handle for a buffer
                    is <CT>VkBuffer</CT>.
                </Paragraph>
                <Spacer/>

                <Paragraph>To <I>create</I> resources, a Vulkan command
                    needs
                    to be called. All such commands are of the
                    form <CT>vkCreate*</CT>.
                    The command to create
                    a <CT>VkBuffer</CT> is <CF>vkCreateBuffer.</CF></Paragraph>
                <Spacer/>

                <Paragraph>When calling creation commands, virtually
                    always, a <CT>Vk*CreateInfo</CT> structure needs to be
                    set up. As demonstrated below, the creation of
                    a <CT>VkBuffer</CT> requires
                    a <CT>VkBufferCreateInfo</CT>.
                </Paragraph>
                <Spacer/>

                <Paragraph>Creation commands will also always ask the
                    programmer for a pointer to a handle
                    (here <CT>VkBuffer</CT>) in which the newly created
                    resource's
                    location is stored. This handle is the primary way in
                    which
                    programmers interact with resources after creation.
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

                <Paragraph size={4}>About create infos</Paragraph>
                <Spacer size={4}/>
                <Paragraph>Note that the <CN>pCreateInfo</CN> variable is a
                    pointer.
                    This implies that for this function call to work, there
                    needs to be a <CT>VkBufferCreateInfo</CT> variable in
                    scope. Note that after the creation command is called,
                    the "create info" variables can be destroyed
                    freely.</Paragraph>
                <Spacer/>

                <Paragraph>While the
                    fields for <CT>Vk*CreateInfo</CT> structs need
                    vary from struct to struct, they invariably have
                    an <CT>sType</CT> field.
                    This field is used by Vulkan to identify the type of the
                    structure.
                </Paragraph>
                <Spacer/>
                <Paragraph>Without the correct <CT>sType</CT>, the function
                    call will fail. Discovering the correct value for the
                    field is easy, however. The documentation always
                    mentions
                    the required value for the <CT>sType</CT> field.

                    For <CT>VkBufferCreateInfo</CT>,
                    the <TextLink
                        link="https://docs.vulkan.org/spec/latest/chapters/resources.html#VUID-VkBufferCreateInfo-sType-sType">
                        documentation</TextLink>
                    {' '} states
                    the following:
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

                <Paragraph size={4}>Destroying resources</Paragraph>
                <Spacer size={4}/>
                <Paragraph>Finally, <I>initiation</I> of object cleanup is
                    manual. Even
                    though the API facilitates the allocation of resources,
                    it does not manage the resources' lifetime. To destroy
                    objects, call the
                    corresponding <CF>vkDestroy*</CF> method. Only then
                    will Vulkan free the resource.

                    For <CT>VkBuffer</CT>, the command
                    is <CF>vkDestroyBuffer</CF>.
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
                <Paragraph>The handle obtained during creation is passed
                    to the destroy command.</Paragraph>

                <Spacer/>
                <Paragraph size={4}>Summary</Paragraph>
                <Spacer size={4}/>
                <Paragraph>Considering all of the above, an excerpt of
                    resource creation is provided below. This pattern is
                    general and ubiquitous in Vulkan.
                </Paragraph>
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
                <Paragraph size={2}>Conceptual overview</Paragraph>
                <Spacer size={2}/>
                <Paragraph>Vulkan achieves the titular goal through the
                    interoperation
                    of its many objects. Obviously the programmer must
                    assemble the graphics pipeline, but they must also
                    manually put together everything else, like the render
                    passes that use the pipeline, or the buffers to
                    back texture images.
                </Paragraph>

                <Spacer/>
                <Paragraph>The general steps needed to be taken are as
                    follows:
                </Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>1. Initialise Vulkan</Paragraph>
                <Spacer/>
                <Paragraph>The first step is to prepare fundamental objects.
                    These are the <I>physical device</I> and the <I>logical
                        device</I>.
                </Paragraph>
                <Spacer/>
                <Paragraph>The physical device can be thought of as a
                    Vulkan-capable GPU on the system.
                    It is represented by
                    the <CT>VkPhysicalDevice</CT> handle.
                    The programmer needs to query the
                    system
                    for available devices and choose one to use.
                    Furthermore,
                    the physical device needs to be verified to see if it
                    supports features the Vulkan application being built
                    intends to use (e.g., anti-aliasing).</Paragraph>
                <Spacer/>
                <Paragraph>The logical device can be though of as a
                    connection to the physical device. It is represented by
                    the <CT>VkDevice</CT> handle. It is through
                    the logical device that the physical device is
                    interfaced with.</Paragraph>

                <Paragraph>By initialising Vulkan, the user ensures that the
                    application is ready to use the selected GPU.
                </Paragraph>
                <Spacer size={3}/>


                <Paragraph size={3}>2. Obtain a drawing surface from the
                    operating system</Paragraph>
                <Spacer/>
                <Paragraph>Vulkan needs a surface to draw to. A surface can
                    be understood
                    as some window on the screen. This surface is created by
                    the operating system, then given to Vulkan to use.
                    The Vulkan object that represents this surface
                    is <TextLink
                        link='https://docs.vulkan.org/spec/latest/chapters/VK_KHR_surface/wsi.html#_wsi_surface'
                        popupMessage='From the documentation:
                            "Native platform surface or window objects are abstracted by surface objects,
                            which are represented by VkSurfaceKHR handles."'><CT>VkSurfaceKHR</CT></TextLink>.
                </Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>3. Create a swapchain</Paragraph>
                <Spacer/>
                <Paragraph>A swapchain is the Vulkan term for a set of
                    virtual framebuffers.
                    The swapchain handle is <CT>VkSwapchainKHR</CT>.
                    It is the swapchain that facilitates double-buffering.
                </Paragraph>
                <Spacer/>

                <Paragraph>Regardless of the whether double-buffering is
                    actually performed, the swapchain encapsulates a list
                    of images (pixel buffers) bound to the surface.
                    Formally, an image in vulkan is a <CT>VkImage</CT>.
                </Paragraph>
                <Spacer size={3}/>

                <Paragraph size={3}>4. Set up the graphics
                    pipeline</Paragraph>
                <Spacer/>
                <Paragraph>This is the most expansive and involved part of a
                    basic Vulkan application.
                    The programmer must manually set up the graphics
                    pipeline and prepare data structures the pipeline will
                    process. </Paragraph>
                <Spacer/>
                <Paragraph>The end product of this stage is a pipeline
                    object
                    that can be used to transform data in the pre-defined 3D
                    coordinate
                    system into screen coordinates. The derivation of the
                    entire pipeline
                    is the primary focus of this article and is discussed
                    later. The pipeline object
                    is <CT>VkPipeline</CT>.</Paragraph>

                <Spacer size={3}/>
                <Paragraph size={3}>5. Use all the assembled resources to
                    draw to the screen
                </Paragraph>
                <Spacer/>
                <Paragraph>A reasonably involved step as well, once the
                    pipeline is used it must be utilised in a <I>render
                        pass</I>.
                    A render pass coordinates all the resources
                    created and configured in the prior steps to draw to the
                    screen. The render pass object
                    is <CT>VkRenderPass</CT>.
                </Paragraph>


            </Card>
        </div>
    );

}

export default TheVulkanModel;