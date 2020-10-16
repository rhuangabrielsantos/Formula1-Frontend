import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/back-icon.png';
import googleIcon from '../../assets/images/google-icon.png';
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';

import InputOtherLogin from '../../components/InputOtherLogin';

import './styles.css';

function Login() {
    return(
        <div id="container">
            <Link to="/">
                <img src={backIcon} alt="Back" className="back-icon" />
            </Link>

            <div className="login-content">
                <h1>Login</h1>

                <div className="inputs">
                    <div className="input-content">
                        <h2>E-mail</h2>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className="input-content">
                        <h2>Senha</h2>
                        <input type="password" name="password" id="password"/>
                    </div>

                    <input type="submit" className="submit-button" value="Entrar"/>
                </div>
            </div>
            <div className="other-login-content">
                <div className="inputs">
                    <InputOtherLogin 
                        label="Entrar com Google"
                        icon={googleIcon}
                    />

                    <InputOtherLogin 
                        label="Entrar com Facebook"
                        icon={facebookIcon}
                    />

                    <InputOtherLogin 
                        label="Entrar com Twitter"
                        icon={twitterIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;