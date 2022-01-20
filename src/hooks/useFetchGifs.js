// CUSTOM HOOK = funciones = Funcionan como funcional component
// Diferncia con el funcional component:
// 1. No retorna jsx = no necesita la importacion de React

import { useEffect, useState } from "react";
import { getGif } from '../helpers/getGif';


export const useFetchGifs = ( category ) => {

    const [state,setState] = useState({
        data:[],
        loading:true
    });

    // useEffect = 2 parametros: Funcion a ejecutar y arreglo de dependencias
    // [] = La funcion solo se ejecuta 1 vez 
    // LOS EFECTOS NO PUEDEN SER ASINCRONOS
    useEffect( () => {

        // GetGif = Funcion ASINCRONA (ASYNC)
        //Retorna una promesa
        getGif( category )
            //imgs = gifs
            .then( imgs => {
                setTimeout(() => {

                    console.log(imgs);
                    
                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 3000);
            })

    },[ category ]) //Si la categoria cambia, se renderiza denuevo el componenete
                    // En esta aplicacion no sucede

    

    

    return state // state = data:[], loading:true
}