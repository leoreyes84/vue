interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}



export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    //power: 'money'
};

// console.log(person.name);
// console.log(person.age);
// console.log(person.codeName);

// console.log({
//     name: person.name,
//     age: person.age
// })

//const { age, name, power = 'No tiene' } = person; //puede ser un Objeto o un Array
//console.log({age, name, power});

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({
    id: 1234,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene'
})

console.log(createHero(person));