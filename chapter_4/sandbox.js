// function declaration
// function greet(){
//     console.log('hello there');
// }   

// // function expression
// const speak = function(){
//     console.log('GOOD DAY');
// }

// greet();
// greet();
// greet();

// speak();

// sobre ordem de chamada dos arquivos. Uma function declaration pode ser chamada antes mesmo de ser declarada, pelo suporte da linguagem Js, porém a Function Expression não recebe o mesmo tipo de suporte, tendo que ter sido declarado em primeiro lugar


// arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){               //name virou uma variável local, não funciona externamente
//     console.log(`good ${time} ${name}!`);                             //se não passarmos variáveis, as declaradas serão utilizadas (para evitar o undefined)
// }

// speak();
// speak('mario', 'morning');


// returning values
// com o uso do return é possível realizar armazenar o resultado em uma variável global.
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area =  calcArea(5);
// console.log(area);

// ## regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }
// const calcArea = radius => 3.14 * radius**2;



// const area =  calcArea(5);
// console.log('area is: ', area);

// ## practise arrow functions

// const greet = function(){
//     return 'hello, world';
// }
// translating function
// const greet = () => 'hello, world!';

// const result = greet();

// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }




// const name = 'shaun';
// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);





// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     //do something
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     // do something
//     console.log(value);
// })



// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }

// people.forEach(logPerson)


const ul = document.querySelector('.people');   //serve para referenciar

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => html += `<li style="color: purple">${person}</li>
`)

console.log(html);
ul.innerHTML = html;            //inserir na referência acima