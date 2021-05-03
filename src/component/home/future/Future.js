import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import FutureDetails from './futuredetails/FutureDetails';
import react from '../../icon/react.png';
import html from '../../icon/Html.png';
import javaScript from '../../icon/js.png';
import bootstrap from '../../icon/bootstrap.png';
import node from '../../icon/Node js.png';
import mongo from '../../icon/mongodb.png';
import firebase from '../../icon/Firebase.png';
import css from '../../icon/css.png';

const Future = () => {

    const futureData = [
        {
            img: react,
            title: 'Built With React 16.8+'
        },
        {
            img: html,
            title: 'Built With Express.JS'
        },
        {
            img: css,
            title: 'Built With CSS'
        },
        {
            img: javaScript,
            title: 'Built With JavaScript'
        },
        {
            img: bootstrap,
            title: 'Built With Bootstrap'
        },
        {
            img: node,
            title: 'Built With Node.js'
        },
        {
            img: mongo,
            title: 'Built With MongoDB'
        },
        {
            img: firebase,
            title: 'Built With Firebase',
        },
        
    ]

    return (
        <div className="container">
            <h1> <FaReact />This is future</h1>
            <div className="row">
                {
                    futureData.map(future => <FutureDetails future={future}></FutureDetails>)
                }
            </div>
        </div>
    );
};

export default Future;