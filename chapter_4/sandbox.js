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

const calcArea = function(radius){
    return 3.14 * radius**2;
}

const area =  calcArea(5);
console.log(area);