// function greetPerson(name:string) {
//    return `Hola ${name}`;
// }

// const greetPerson = (name:string) => {
//      return `Hola, ${name}`;
// }

const greetPerson = (name: string) => `Hola, ${name}`;

//console.log(greetPerson('Leo'));

const getUser = () => ({
  uid: "ABC-123",
  username: "Tony001",
});

//console.log(getUser());

const heroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Fuerza'
    }
];

const hero = heroes.find( h => h.id === 2);

console.log(hero?.power?.toUpperCase());
