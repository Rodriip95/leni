import React, {useState} from 'react';


export default function Search({enBuscar}) {
    const [nombre, setNombre] = useState("");
    return(
        <div>
            <input type="text" placeholder="Ingrese Pokemon" onChange={e => setNombre(e.target.value)}/>
            <button className="btn btn-primary" onClick={() => enBuscar(nombre)}>Buscar</button>
        </div>
    )
};