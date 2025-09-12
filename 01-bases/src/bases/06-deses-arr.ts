

const character = ['Goku', 'Vegeta', 'Trunks', 'Goten'];

//const [g, v] = character; //destructurar (posicionales)
//console.log({g});


//const [ , , t] = character; //destructurar (posicionales)
//console.log({t});

//const [ g, , t] = character; //destructurar (posicionales)
//console.log({g,t});

//const [ g, , t, , o = 'Other'] = character; //destructurar (posicionales)
//console.log({g,t, o});

const returnArray = () => {
    return [123, 'ABC'] as const; // 'as const' to let each one of them work as they are ei: be able toLowerCase() the string
}

const [numbers, letters] = returnArray();

console.log(numbers, letters.toLowerCase());