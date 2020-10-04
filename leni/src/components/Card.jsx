import React, { useState } from 'react';
import style from './Card.module.css';

export default function Card (prop){
    if (prop.name){
        return (
            <div className={style.carta}>
                <h3>{prop.name}</h3>
                <img src={prop.img} alt="pokemon"/>
            </div>
        );
    } else {
        return (
            <div>No hay pokemon</div>
        )
    }

}