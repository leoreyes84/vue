

// console.log('Inicio');

import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve, reject) => {
//     console.log('Cuerpo de la promesa');

//     setTimeout(() => {
//         //resolve('Mi amigo cumplió');


//         reject('Mi amigo no cumplió');
//     }, 1000);
    
// })
// .then( (message) => console.log(message) )
// .catch( errorMessage => console.warn(errorMessage))
// .finally(() => console.log('Fin del Promise'));

// console.log('Fin');

const getHeroByIdAsync = (id: number):Promise<Hero> => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const hero = getHeroById(id);

            hero ? resolve(hero) : reject(`Hero not found id #${id}`);
    
        }, 1500);

    })

} 

getHeroByIdAsync(1)
.then(hero => console.log(`The name is ${hero.name}`))
.catch(message => console.warn(message))
.finally(() => console.log('Process finished'));