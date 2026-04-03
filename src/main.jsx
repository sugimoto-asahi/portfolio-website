import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { LanguageProvider } from '@i18n/LanguageContext.jsx';
import MainLayout from '@layouts/MainLayout/MainLayout.jsx';
import DetailLayout from '@layouts/DetailLayout/DetailLayout.jsx';
import '@styles/global.module.css';
import '@styles/index.css';

// Top-level pages (get NavSidebar + LangButton from MainLayout)
import Home from './components/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Works from './pages/Works/Works.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Articles from './pages/Articles/Articles.jsx';

// Project detail pages (get ArrowButton + LangButton from DetailLayout)
import Njin from './pages/Njin/Njin.jsx';
import OogaBooga from './pages/OogaBooga/OogaBooga.jsx';
import RichWithinReach from './pages/RichWithinReach/RichWithinReach.jsx';

// Article detail pages (get ArrowButton back to /articles from DetailLayout)
import SceneToScreen from './articles/SceneToScreen/SceneToScreen.jsx';
import TheVulkanModel from './articles/TheVulkanModel/TheVulkanModel.jsx';

const router = createBrowserRouter([
    {
        // ── top-level pages: NavSidebar + LangButton ──────────────
        element: <MainLayout />,
        children: [
            { path: '/',         element: <Home /> },
            { path: '/about',    element: <About /> },
            { path: '/works',    element: <Works /> },
            { path: '/contact',  element: <Contact /> },
            { path: '/articles', element: <Articles /> },
        ],
    },
    {
        // ── detail pages: ArrowButton + LangButton ─────────────────
        element: <DetailLayout />,
        children: [
            { path: '/njin',                      element: <Njin />,           handle: { backRoute: '/works' } },
            { path: '/ooga-booga',                element: <OogaBooga />,      handle: { backRoute: '/works' } },
            { path: '/rich-within-reach',         element: <RichWithinReach />, handle: { backRoute: '/works' } },
            { path: '/articles/scene-to-screen',  element: <SceneToScreen />,  handle: { backRoute: '/articles' } },
            { path: '/articles/the-vulkan-model', element: <TheVulkanModel />, handle: { backRoute: '/articles' } },
        ],
    },
]);

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    </React.StrictMode>
);
