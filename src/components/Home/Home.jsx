import React, {useState} from 'react';
import logo from '../../logo.svg';
import './Home.css';
import '../../global.module.css'
import Button from '../Button/Button.jsx';
import {Card} from '../Card/Card.jsx';
import Hero from "../Hero/Hero.jsx";

function Home() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        // Home page content
        <div className="root">
            <h1 className="vertical-kanji">陈睿熙</h1>

            <main className="home">
                <div className='project-cards'>
                    <Card title={"njin"}
                          description={"A custom game engine / framework written from scratch in C++" +
                              "with a focus on ease of extensibility and include-what-you-use. "}
                          route={'njin'}/>
                    <div className='small-cards'>
                        <Card title={"Rich Within Reach"}
                              description={"A scam education game made in Unity."}
                              route={'njin'}
                              imageUrl={'./assets/rich-within-reach.png'}/>
                        <Card title={"Ooga Booga"}
                              description={"A boss arena battle made in Unreal Engine."}
                              route={'njin'}
                              imageUrl={'./assets/rich-within-reach.png'}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
