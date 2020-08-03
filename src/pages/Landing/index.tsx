import React from 'react';

import './styles.css';

//Img
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

//Icons
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="button-container">
                    <a href="#" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </a>
                </div>

                <span className="total-connection">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>

            </div>
        </div>

    );
}

export default Landing;