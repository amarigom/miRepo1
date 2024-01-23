import { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';


const Ejercicio2 = () => {
    const[contador1,setContador1]= useState(0);
    const miRef= useRef();
    const incrementar1=()=>{setContador1(contador1 +1)};
    useEffect(() => { console.log(miRef)     
    });
    
    const myRefValue = miRef.current;
             console.log(myRefValue);
    return (
        <div>
            <h4 ref = {miRef}>Ejemplo de elemento referenciado</h4>
            
            <h2 >Cantidad:{contador1}</h2>
            <button  onClick={incrementar1}>incrementar contador1:</button>
            
        </div>
    );
};


Ejercicio2.propTypes = {

};


export default Ejercicio2;


