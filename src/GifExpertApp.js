import React,{ useState }  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // ["variable","funcion para setear la variable"] = useState("Estado Inicial de la variable")
    // !!Al llamar setCategories react renderiza denuevo el componente!!
    const [categories,setCategories] = useState(['One punch']);
    
    /* const handelAdd = () =>{
        // setCategories recibe un callback como argumento
        // cats =  valor del estado anteior = categories
        setCategories(cats => [...cats,"HunterxHunter"])
    } */


    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Envio propiedades a AddCategory */}
            {/* Envio la referencia de setCategories */}
            <AddCategory setCategories={ setCategories } />
            <hr />


            {/* No puedo usar ciclos xq no es UNA expresion */}
            <ol> 
                {
                    // .map = un callback de un array que retorna un array con los resultados 
                    // category = array con los resultados
                    // i = indice del array ( NO PUEDE SER EL KEY )
                    categories.map((category, i ) => 
                        // LLamo al componente GifGrid
                        <GifGrid 
                            key={ category }    
                            category = {category} 
                        />
                    )
                }
            </ol>
        </>
    )
};
