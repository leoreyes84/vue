import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = 'Zg4OWyraUMZyEM1zo37sY9MVbnytKMkw';


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//.then( resp => console.log(resp) )
.then( resp => resp.json())
//.then( body => console.log( {body} ))
.then( (body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url);
})
.catch( err => console.warn(err));

