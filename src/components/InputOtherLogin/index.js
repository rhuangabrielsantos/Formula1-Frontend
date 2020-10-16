import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function InputOtherLogin(props) {
    return (
        <Link to="#" className="button">
            <img src={props.icon} alt="icone"/>
            <h1>{props.label}</h1>
        </Link>
    );
}

export default InputOtherLogin;