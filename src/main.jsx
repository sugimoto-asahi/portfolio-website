// src/main.jsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router";
import Home from './components/Home/Home.jsx';
import '@styles/global.module.css'
import '@styles/index.css'
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import Works from "./pages/Works/Works.jsx";
import Njin from "./pages/Njin/Njin.jsx";
import RichWithinReach from "./pages/RichWithinReach/RichWithinReach.jsx";
import OogaBooga from "./pages/OogaBooga/OogaBooga.jsx";
import Articles from "./pages/Articles/Articles.jsx";
import SceneToScreen from "./articles/SceneToScreen/SceneToScreen.jsx";
import TheVulkanModel from "./articles/TheVulkanModel/TheVulkanModel.jsx";

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='/njin' element={<Njin/>}/>
                <Route path='/ooga-booga' element={<OogaBooga/>}/>
                <Route path='/rich-within-reach' element={<RichWithinReach/>}/>
                <Route path='/articles' element={<Articles/>}/>
                <Route path='/articles/scene-to-screen'
                       element={<SceneToScreen/>}/>
                <Route path='/articles/the-vulkan-model'
                       element={<TheVulkanModel/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
