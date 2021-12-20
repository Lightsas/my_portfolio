import React, { useState } from 'react';
import FutureDetails from './futuredetails/FutureDetails';
import react from '../../icon/react.png';
import html from '../../icon/Html.png';
import javaScript from '../../icon/js.png';
import bootstrap from '../../icon/bootstrap.png';
import node from '../../icon/Node js.png';
import mongo from '../../icon/mongodb.png';
import firebase from '../../icon/Firebase.png';
import css from '../../icon/css.png';
import reactRouter from '../../icon/React Router.png';
import expressJs from '../../icon/qgjn9fi1vff7thgbbecs.jpeg';
import sass from '../../icon/sas.png';
import MaterialUl from '../../icon/metrial.png';
import figma from '../../icon/FIgma.png';
import Git from '../../icon/Git-Icon-1788C.png';
import heroku from '../../icon/hero ku.png';

const Future = () => {

    const futureData = [
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
            img: react,
            title: 'Built With React 16.8+'
        },
        {
            img: reactRouter,
            title: 'Built With React Router'
        },
        {
            img: node,
            title: 'Built With Node.js'
        },
        {
            img: expressJs,
            title: 'Built With Express JS'
        },
        {
            img: mongo,
            title: 'Built With MongoDB'
        },
        {
            img: sass,
            title: 'Built With SASS'
        },
        {
            img: MaterialUl,
            title: 'Built With Material UI'
        },
        {
            img: figma,
            title: 'Built With Figma'
        },
        {
            img: Git,
            title: 'Built With Git'
        },
        {
            img: firebase,
            title: 'Built With Firebase',
        },
        {
            img: heroku,
            title: 'Built With Heroku',
        },
        
    ]

    return (
        <div id="future" className="container pt-5">
            <h2 className="mb-5" style={{textAlign: 'center'}}>SKILLS</h2>
            <div className="row">
                {
                    futureData.map(future => <FutureDetails future={future}></FutureDetails>)
                }
            </div>
        </div>
    );
};

export default Future;