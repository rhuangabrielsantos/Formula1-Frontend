import React from 'react';
import { Link } from 'react-router-dom';

import bannerImage from '../../assets/images/banner.svg';
import carsImage from '../../assets/images/cars.svg';
import flagImage from '../../assets/images/flag.svg';
import pilotImage from '../../assets/images/pilot.svg';
import rankingImage from '../../assets/images/ranking.svg';

import './styles.css';

function Home() {
    return(
        <div id="page-content">
            <aside>
                <img src={bannerImage} alt="Faixa"/>
            </aside>

            <section className="cars">
                <img src={carsImage} alt="Carros"/>
            </section>

            <section className="landing">
                <header>
                    <Link to="/login" className="login-button">LOGIN</Link>
                    <Link to="/register" className="register-button">REGISTRE-SE</Link>
                </header>

                <h1>FORMULA TG</h1>

                <section className="description">
                    <img src={flagImage} alt="Bandeira"/>
                    <span>Participe de corridas eletrizantes!</span>
                </section>

                <section className="description">
                    <span>Crie seu piloto!</span>
                    <img src={pilotImage} alt="Bandeira"/>
                </section>

                <section className="description">
                    <img src={rankingImage} alt="Bandeira"/>
                    <span>Suba no ranking!</span>
                </section>
            </section>
        </div>
    );
}

export default Home;