import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";


export const getImage = async() => {

    try {
        const resp = await giphyApi.get<GIFResponse>('/random')
        return resp.data.data.images.downsized_large.url;
    } catch(error) {
        throw 'Url not found';
    }


}


//console.log(getImage());

getImage()
.then( url => console.log({url}))
.catch( error => console.error(error));
