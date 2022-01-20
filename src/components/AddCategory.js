// AGREGO UNA CATEGORIA: Ingresa por teclado y renderiza el componente en pantalla

import React, { useState } from 'react';
import Proptypes from 'prop-types';



//Desestructuro la propiedad (En este caso es única)
export const AddCategory = ({setCategories}) => {
    
    const [inputValue,setInputValue] = useState(''); //Si no es un String vacion es un undefined
    
    //e = Objeto con el valor ingresado (EVENTO) = Informacion General
    const handelInputChance = (e) => {
        // Actualiza y Renderiza el valor ingresado
        setInputValue(e.target.value);
    }
    
    //e = Objeto con el valor ingresado (EVENTO) = Informacion General
    const handleSubmit = (e) => {
        e.preventDefault(); //Evita que el navegador se refresque 

        // .trim = Borra los espacios para la validacion
        if(inputValue.trim().length > 2){
            // Usando el callback evito mandar/recibir otra propiedad de GifExpert: (categories)
            // cats = Estado anteiror de categories
            setCategories(cats => [inputValue,...cats]);
            setInputValue('');  //Borra el contenido al enviar la informacion
        }
    }

    return (
        //Solo debemos regresar 1 elemento HTML
        <form onSubmit={ handleSubmit }> 
            <input 
                type="text"
                value={ inputValue } //No se puede cambiar el valor sin el atributo correspondiente
                onChange={ handelInputChance } 
            />
        </form>
    )
};


// La funcion setCategories es requerida en el componente
AddCategory.prototype = {
    setCategories: Proptypes.func.isRequired    
}