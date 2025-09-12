
export const person = {
    lastName : 'Reyes',
    age: 41,
    address: {
        city: 'Chara',
        zip: 51345,
        lat: 57.42154,
        lng: 85.45154
    }
};// as const;

//const person2 = person;
const person2 = structuredClone(person);

person2.lastName = 'Rivero';


console.log({person});
console.log({person2});
