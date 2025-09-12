import heroes, { type Owner } from "../data/heroes";

//console.log(heroes, owners);

export const getHeroById = (id:number) => {
    return heroes.find(hero => hero.id === id);
    //return heroes.find(hero => hero.id === id) ?? {};
}

//console.log(getHeroById(100));

//export const getHeroesbyOwner = (owner:'DC' | 'Marvel'/*string*/) => {
export const getHeroesbyOwner = (owner: Owner) => {
    return heroes.filter(heroe => heroe.owner === owner) ?? [];
} 

//console.log(getHeroesbyOwner('Marvel'));


