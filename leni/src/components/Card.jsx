import React, { useState } from 'react';

export default function Card (prop){
    console.log(prop.name);
    if (prop.name){
        return (
            <div>
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