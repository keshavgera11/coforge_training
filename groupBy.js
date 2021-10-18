const users = [

    {

        name: "Yagnesh",

        age: 33,

        gender: "male",

    },

    {

        name: "Virat",

        age: 28,

        gender: "male",

    },

    {

        name: "Rohit",

        age: 32,

        gender: "male",

    },

    {

        name: "Taimur",

        age: 8,

        gender: "male",

    },

    {

        name: "Alia",

        age: 19,

        gender: "female",

    },

    {

        name: "Dipeeka",

        age: 26,

        gender: "female",

    },

    {

        name: "Priyanka",

        age: 40,

        gender: "female",

    },

];

const age =28;

const genKey = Math.floor(28/10);

console.log(genKey);


const groupBy = users.reduce((p,c) =>{
    const genKey = Math.floor(c.age/10);
    const key = `${genKey}- ${genKey}9`;
    // const key = c.age;
    if(!p[key]){
        p[key] =[];
    }
    p[key].push(c);
    return p;
}, {})

console.log(groupBy);

