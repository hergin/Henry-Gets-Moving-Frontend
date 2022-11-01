import React from "react";
import {Link} from "react-router-dom";
import back from '../../Assets/BackArrow.svg';
import './BackArrow.scss';

interface BackArrowProps {
    route: string;
}

export default function BackArrow({route}: BackArrowProps) {
    return (
        <div className="back-arrow">
            <Link to={route}>
                <img src={back} alt="Back"/>
                <p>Back</p>
            </Link>
        </div>
    );
}