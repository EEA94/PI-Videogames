import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/LandingPage.module.css';
import logoHenry from '../assets/logoHenry.png'

export default function LandingPage(){

    return (
        <div className={styles.landing}>
            <img src={logoHenry} alt='logo'/>
            <div className={styles.header}>
                <Link to='/home'><span>HOME</span></Link>
                <Link to='/home'><span>SEARCH</span></Link>
                <Link to='/videogame'><span>CREATE</span></Link>
            </div>
            <div className={styles.description}>
                <h1>COME GET YOUR GAME!</h1>
                <p>Search for a video game by its name. Create your video game.<br/>
                    Filter them according to their genre, their origin 'rawg api' or 'created'.<br/>
                    Sort them alphabetically by name or rating and access their details.</p>
                <Link to='/home'><button className={styles.button}><span>START</span></button></Link>
            </div>
            
        </div>
    )
}