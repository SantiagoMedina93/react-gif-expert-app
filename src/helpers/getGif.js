//NO REGRESA LOS GIFS
// REGRESA UNA PROMESA que resuelve los gifs

export const getGif = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=qgLOB12Dhh7izMJRafm46CUQ2W1rw6kp`;
    
    //resp = respuesta de la promesa = Informacion general
    const resp = await fetch(url);
    //Desestructuracion de la data =  Arreglo de obj = Informacion especifica
    const {data} = await resp.json();

    //.map = Barre el arreglo de obj, ejecuta una funcion, retorna un arreglo
    // img = barre ela valor anterior = valor del array barrido
    const gifs = data.map( img => {
        //Nuevo arreglo de objetos con los siguientes atributos
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    /* console.log(gifs); */
    //Nuevo estado del arreglo = respuesta de la peticion HTTP
    return gifs;
}