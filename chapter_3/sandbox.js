// ##for loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop: ', i);
// }
// console.log('Loop finished');


const names = ['shaun', 'mario', 'luigi'];


// for(let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }


// ##while loops

// let i = 0;
// while(i < 5){
    //     console.log('in loop: ', i);
    //     i++;
    // }
    // console.log('Loop finished');

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }
// console.log('Loop finished');
    

// ##do while loops

// let i = 0;
// do {
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5)


// ##if statements

// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu','chun-li','yoshi'];

// if(ninjas.length > 4){
//     console.log("that's a lot of ninjas");
// }

// const password = 'pass@ord';

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }

// ##else if statements

// const password = 'pass';

// if(password.length >= 12){
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }

// ##logical operators - OR || and AND &&

// const password = 'p@sfad';

// if(password.length >= 12 && password.match('@')){   //match usa regex
//     console.log('that password is mighty strong!');
// } else if (password.length >= 8 || password.match('@') && password.length > 5){
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

// ##logical NOT !

// let user = false;

// if(!user){
//     console.log("you must be logged to continue");
// }

// console.log(user);
// console.log(!user);

// ##break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;           //ignora o resto e inicia denovo
    }
    
    console.log('your score: ', scores[i])

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;              //ignora todo o resto e sai do loop
    }
}

// ##switch statements
const grade = 'D';

switch(grade){              // é necessário o uso do break se não ele continua abrangendo os seguintes, mesmo não sendo do tipo especificado
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade');
}