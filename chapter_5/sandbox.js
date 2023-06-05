// object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
// ];

// console.log(blogs);

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [
//         { title: 'why mac & cheese rules', likes: 30 },
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login(){
//         console.log('user logged in');
//     },
//     logout(){
//         console.log('user logged out')
//     },
//     logBlogs(){
//         console.log('this uset has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };
// // console.log(user);
// // console.log(user.name);

// // // user.age = 25;
// // console.log(user.age);
// // console.log(user['age']);
// // user['name'] = 'chun-li';

// // user.login();  
// // user.logout();  

// // const name = 'mario';
// // name.toUpperCase();

// user.logBlogs();
// console.log(this);

// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));