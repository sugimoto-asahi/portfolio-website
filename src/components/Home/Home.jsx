import React, {useState} from 'react';
import logo from '../../logo.svg';
import './Home.css';
import '../../global.module.css'
import Button from '../Button/Button.jsx';
import {LargeCard} from '../LargeCard/LargeCard.jsx';
import Hero from "../Hero/Hero.jsx";

function Home() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        // Home page content
        <div className="root">
            <h1 className="vertical-kanji">陈睿熙</h1>

            <main className="app-main">
                <LargeCard title={"njin"}
                           description={"A custom game engine / framework written from scratch in C++" +
                               "with a focus on ease of extensibility and include-what-you-use. "}/>
                <section className="game-projects">
                    <h2 className="section-title">Lorem Ipsum Dolor</h2>
                    <div className="projects-grid">
                        <div className="project-card"
                             onClick={() => setCurrentPage('fantasy-quest')}>
                            <div
                                className="project-image placeholder"></div>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor</p>
                            <div className="card-overlay">
                                    <span
                                        className="view-project">Lorem Ipsum</span>
                            </div>
                        </div>
                        <div className="project-card"
                             onClick={() => setCurrentPage('mecha-warriors')}>
                            <div
                                className="project-image placeholder"></div>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor</p>
                            <div className="card-overlay">
                                    <span
                                        className="view-project">Lorem Ipsum</span>
                            </div>
                        </div>
                        <div className="project-card"
                             onClick={() => setCurrentPage('kawaii-creatures')}>
                            <div
                                className="project-image placeholder"></div>
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor</p>
                            <div className="card-overlay">
                                    <span
                                        className="view-project">Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-me">
                    <h2 className="section-title">Lorem Ipsum Dolor</h2>
                    <div className="about-content">
                        <div className="avatar-container">
                            <div className="avatar placeholder"></div>
                        </div>
                        <div className="bio">
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in
                                voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit
                                anim id est laborum.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="App-footer">
                <p>© 2023 Anime Game Developer | Lorem ipsum dolor
                    <a href="#" className="social-link">Twitter</a> |
                    <a href="#" className="social-link">GitHub</a> |
                </p>
            </footer>
        </div>
    )
}

export default Home;
