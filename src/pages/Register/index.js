import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/back-icon.png';
import googleIcon from '../../assets/images/google-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';

import pilotImg from '../../assets/images/pilot.svg';
import carImg from '../../assets/images/car.svg';

import InputOtherLogin from '../../components/InputOtherLogin';

import './styles.css';

function Register() {
    const [registerContentClassName, setRegisterContentClassName] = useState(
        'register-content'
    );

    const [otherContentClassName, setOtherContentClassName] = useState(
        'other-register-content'
    );

    const [detailsContentClassName, setDetailsContentClassName] = useState(
        'hidden'
    );

    function nextRegisterPage(event) {
        event.preventDefault();

        setRegisterContentClassName('hidden')
        setOtherContentClassName('hidden')

        setDetailsContentClassName('details-register-content')
    }

    function backRegisterPage(event) {
        event.preventDefault();

        setRegisterContentClassName('register-content')
        setOtherContentClassName('other-register-content')

        setDetailsContentClassName('hidden')
    }

    return(
        <div id="container">
            <div className={registerContentClassName}>
                <Link to="/" className="back-icon">
                    <img src={backIcon} alt="Back" />
                </Link>

                <h1>Registre-se</h1>

                <div className="inputs">
                    <div className="input-content">
                        <h2>E-mail</h2>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className="input-content">
                        <h2>Senha</h2>
                        <input type="password" name="password" id="password"/>
                    </div>

                    <button className="continue-button" onClick={nextRegisterPage}>
                        {'>'}
                    </button>
                </div>
            </div>
            <div className={otherContentClassName}>
                <div className="inputs">
                    <InputOtherLogin 
                        label="Registro com Google"
                        icon={googleIcon}
                    />

                    <InputOtherLogin 
                        label="Registro com Facebook"
                        icon={facebookIcon}
                    />

                    <InputOtherLogin 
                        label="Registro com Twitter"
                        icon={twitterIcon}
                    />
                </div>
            </div>
            <div className={detailsContentClassName}>
                <div className="header">
                    <a href="/register" className="back-icon" onClick={backRegisterPage}>
                        <img src={backIcon} alt="Back" />
                    </a>

                    <h1>Perfil</h1>
                </div>

                <div className="main">
                    <div className="pilot-container">
                        <div className="pilot-content">
                            <button className="continue-button" onClick={() => {}}>
                                {'<'}
                            </button>

                            <img src={pilotImg} alt="piloto"/>

                            <button className="continue-button" onClick={() => {}}>
                                {'>'}
                            </button>
                        </div>
                        
                        <h2>Aparência</h2>
                    </div>

                    <div className="car-container">
                        <div className="car-content">
                            <button className="continue-button" onClick={() => {}}>
                                {'<'}
                            </button>

                            <img src={carImg} alt="car"/>

                            <button className="continue-button" onClick={() => {}}>
                                {'>'}
                            </button>
                        </div>
                        
                        <h2>Carro</h2>
                    </div>
                </div>

                <div className="pilot-name-content" >
                    <h2>Nome do Piloto</h2>
                    <input type="name" name="name" id="name"/>

                    <button type="submit" className="go-button" >
                        Go!!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;