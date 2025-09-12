import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";
 'axios';

const apiKey = 'Zg4OWyraUMZyEM1zo37sY9MVbnytKMkw';


//axios.get
//axios.post

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

//export default giphyApi;



/*giphyApi.get<GIFResponse>('/random')
.then( resp => console.log(resp.data.data.images.downsized_large.url))
.catch( err => console.warn(err));
*/

