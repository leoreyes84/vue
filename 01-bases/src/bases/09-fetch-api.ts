import type { GIFResponse } from "../interfaces/gif.response";


const apiKey = ''; //TODO here secret key


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//.then( resp => console.log(resp) )
.then( resp => resp.json())
//.then( body => console.log( {body} ))
.then( (body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url);
})
.catch( err => console.warn(err));

