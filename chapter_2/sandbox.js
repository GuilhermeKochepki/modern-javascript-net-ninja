/* # Capítulo Inicial

// alert('hello, world');
// console.log(1)
// console.log(2)

let age = 25;
let year = 2019;

console.log(age, year);

age = 30; // já definida
console.log(age);

const points = 100;
// points = 50; Erro por não ser possível alterar uma constante
console.log(points);

var score = 75; //var não é muito utilizada hoje em dia
console.log(score); 

// JS é escrito principalmente em cammel case (myAge)
// Não inicia com números
// KWs reservadas da linguagem não podem ser usadas (ex: const, let, var)


// ##STRINGS

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderdon';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]); // caracter de número X

// string lenght
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// commom string methods
let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n'); // indice da ultima aparição de n

// let result = email.slice(0,10); // do zero até o 10

// let result = email.substr(4,10);

// let result = email.replace('m', 'w');

let result = email.replace('n', 'w');

console.log(result);

*/

// ##NUMBERS

let radius = 10;
const pi = 3.14;

/*

console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);
let result = radius % 3; // definindo o resto da divisão entre radius e 3 (1)
let result = pi * radius**2; //pi vezes o raio elevado a dois
let result = 5 * (10-3)**2;
console.log(result);


// order os operations - B (brackets () [] {}) I (**) D (/) M (*) A (+) S (-)

let likes = 10;

// likes = likes + 1;
likes++;
likes--;

likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;

console.log(likes);

// NaN not an number

console.log(4 / 'hello');
console.log(5 * 'hello');

let result = 'the blog has ' + likes + ' likes';

console.log(result);


// ##TEMPLATE STRING

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes'

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes`

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${titles} likes</span>
`;
console.log(result);

*/

// ##ARRAYS

/*

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]); //lembrando que um array inicia com 0

// let ages = [20, 25, 30, 35];

// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];

// console.log(random);

// console.log(ninjas.length); //elementos dentro do array

// array methods

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li'); //indice do array
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken'); //retorna o tamanho do novo array depois do push
result = ninjas.pop(); //pop retira o último index do array e retorna ele

console.log(result);

*/

// let age;

// console.log(age, age + 3, `the age is ${age}`); //resultado undefined NaN "the age is undefined"

// let age = null;

// console.log(age, age + 3, `the age is ${age}`); //resultado null 3 "the age is null"


// ##BOOLEANS & COMPARISONS

/*
console.log(true, false, "true", "false")

// methods can return booleans
let email = 'luigi@thenetninja.co.uk';
let names = ['mario','luigi','toad'];

// let result = email.includes('@');
// let result = names.includes('bowser');

// comparison operators
let age = 25;

console.log(age == 25);     //igualdade dupla serve para comparar se são iguais, igualdade simples serve para atribuir valores
console.log(age == 30);     
console.log(age != 25);     
console.log(age != 30);     //diferente de     
console.log(age > 20);     //idade maior que     
console.log(age < 20);     //idade menor que     
console.log(age <= 20);     //idade menor ou igual a     
console.log(age >= 20);     //idade maior ou igual a     

*/
// let name = 'shaun';
// console.log(name == 'shaun');       //true
// console.log(name == 'Shaun');       //false
// console.log(name > 'crystal');      //true
// console.log(name > 'Shaun');        //true
// console.log(name > 'Crystalhaun');  //true

/*

let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25);     //true
console.log(age == '25');   //true  (apesar de tipos diferentes)
console.log(age != 25);     //false 
console.log(age != '25');   //false

// strict comparison (different types cannot be equal)
console.log(age === '25');  //false
console.log(age === 25);    //true
console.log(age !== '25');  //true
console.log(age !== 25);    //false

*/

// ##CONVERSIONs

// type conversion
let score = '100';

// score = Number(score);      //conversor
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);

// let result = Boolean(100);  //qualquer número positivo ou negativo será verdadeiro, e 0 será falso

// let result = Boolean('0');   //true
// let result = Boolean('');       //false

console.log(result, typeof result)