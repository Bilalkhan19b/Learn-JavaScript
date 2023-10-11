// console.log('hello');
// console.error("bhaago!")
// console.warn("akhri warning de rha hun!")

// VARIABLE DECLARATION USING CONST AND LET

// let age = 30;
// age = 50;
// console.log(age)

// const age = 30;
// age = 50;
// console.log(age)

// let score;
// score = 10;
// console.log(score)

// const score;
// score = 10;
// console.log(score)

// const score = 20;
// console.log(score)


// DATA TYPES IN JAVASCRIPT
// String, Numbers, Boolean, Null, Undefined

// const name = 'Bilal';
// const age = 30;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);



// CONCATENATION
// const name = 'Bilal';
// const age = 30;
// console.log('My name is '+ name + ' and I am '+age);

//TEMPLATE STRING

// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);

// STRING METHODS

// const s = 'Hello world';
// console.log(s);

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,5));
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''))

// const s = 'python, php, C++, Java, C#,'
// console.log(s.split(', '))

// ARRAYS

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

// const fruits = ['apples', 'oranges', 'mango']
// console.log(fruits)

// const fruits = ['apples', 'oranges', 'mango', true, 4.5]
// console.log(fruits)

// const fruits = ['apples', 'oranges', 'mango'];
// console.log(fruits[1]);

// fruits[3] = 'banana';
// console.log(fruits);

// // inserting at end of the array
// fruits.push('grapes');
// console.log(fruits)

// //inserting at head of the array
// fruits.unshift('strawberries')
// console.log(fruits)

// //removing the last element of the array
// fruits.pop()
// console.log(fruits)

// //cheching if isarray array
// console.log(Array.isArray(fruits));
// console.log(Array.isArray('hello'));

// //to find index of the element
// console.log(fruits.indexOf('mango'));

// //concatenating more items
// console.log(fruits.concat('watermelon', 'pear'));

//OBJECT LITERALS

// const person = {
//     first_name: 'Bial',
//     last_name: 'Khan',
//     age: 22,
//     hobbies:['coding','travelling','movies'],
//     address: {
//         street: 'ABC street',
//         city: 'Karachi',
//         province: 'Sindh',
//         country: 'Pakistan'
//     }
// }

// console.log(person)
// console.log(person.first_name);
// console.log(person.first_name,person.last_name);
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// const {first_name,last_name} = person;
// console.log(first_name);
// console.log(last_name);

// const {first_name, last_name, address: { city }} = person;
// console.log(first_name)
// console.log(last_name)
// console.log(city)

// person.email = 'bilal@gmail.com';
// console.log(person)

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         is_completed: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with Client ',
//         is_completed: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appointment',
//         is_completed: false
//     }
// ];

// console.log(todos)
// console.log(todos[1].text)

//  //Converting into JSON format
// const todo_JSON = JSON.stringify(todos);
// console.log(todo_JSON);

// FOR LOOP

// for (let i = 0; i<10; i++) {
//     console.log(i)
// }

// for (let i = 0; i<=10; i++) {
//     console.log(i)
// }

// for (let i = 0; i<=10; i++) {
//     console.log(`Iteration number ${i}`)
// }

// WHILE LOOP

// let i = 0;
// while (i<10) {
//     console.log(`Iteration number ${i}`)
//     i++
// }

//  ITERATING TO AN ARRAY

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         is_completed: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with Client ',
//         is_completed: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appointment',
//         is_completed: false
//     }
// ];

//METHOD 1:
// for (let i=0; i<todos.length; i++){
//     console.log(todos[i].text)
// }

// METHOD 2:
// for (let i of todos) {
//     console.log(i.text)
// }

// HIGH ORDER  ARRAY METHODS
// forEach, map, filter

// todos.forEach(function(i) {
//     console.log(i.text)
// });


// const todo_text = todos.map(function(i) {
//     return i.text;
// });
// console.log(todo_text)


// const todo_is_completed = todos.filter(function(i) {
//     return i.is_completed === true;
// });
// console.log(todo_is_completed)


// const todo_is_completed = todos.filter(function(i) {
//     return i.is_completed === true;
// }).map(function(i) {
//     return i.text;
// });
// console.log(todo_is_completed);

// CONDITIONAL STATEMENTS

// const x = 11;

// if(x === 10) {
//     console.log('x is 10');
// } else if(x>10) {
//     console.log('x is greater than 10');
// } else{
//     console.log('x is less than 10');
// }

// OR OPERATOR
// const x = 4;
// const y = 11;
// if(x > 5 || y >10) {
//     console.log('x is greater than 5 or y is greater than 10');
// }


// AND OPERATOR
// const x = 7;
// const y = 11;
// if(x > 5 && y >10) {
//     console.log('x is greater than 5 and y is greater than 10');
// }

// TERNARY OPERATOR (short hand for if else for assigning variables)
// ? => then, : => else

// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color)

// SWITCHES (another way to evaluate a condition)

// const x = 1;
// const color = x>10 ? 'red' : 'blue';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break
//     case 'blue':
//         console.log('color is blue');
//         break
//     default:
//         console.log('color is neither blue nor red')

// }

// const x = 1;
// const color = 'green';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break
//     case 'blue':
//         console.log('color is blue');
//         break
//     default:
//         console.log('color is neither blue nor red')

// }

// FUNCTIONS

// function add(x, y) {
//     console.log(x + y);
// }
// add(5,4);

// function add(x, y) {
//     console.log(x + y);
// }
// add();

// function add(x = 1, y = 1) {
//     console.log(x + y);
// }
// add();

// function add(x = 1, y = 1) {
//     console.log(x + y);
// }
// add(5,4);

// function add(x, y) {
//     return x + y;
// }
// console.log(add(4,5));

// ARROW FUNCTIONS

// const add = (x = 1, y = 1) => {
//     return x + y
// }
// console.log(add(5,5));

// const add = (x = 1, y = 1) => console.log(x+y)
// add(5,5);

// const add = (x = 1, y = 1) => x + y;
// a = add(5,5);
// console.log(a);

// const add_5 = x => x+5;
// console.log(add_5(10));

// todos.forEach((i) => console.log(i));

// OBJECT ORIENTED PROGRAMMING

// Creating a class named person
// class Person {
//     constructor (first_name, last_name, dob) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//         this.dob = new Date(dob);
//     }

//     get_birth_year(){
//         return this.dob.getFullYear();
//     }

//     get_full_name() {
//         return `${this.first_name} ${this.last_name}`;
//     }
// }


// // Isntantiating object
// const person1 = new Person('Bilal', 'Khan', '3-11-2001');
// const person2 = new Person('Ali', 'Raza', '10-23-2002');

// console.log(person1);
// console.log(person1.get_full_name());
// console.log(person1.get_birth_year());
// console.log(person2);
// console.log(person2.get_full_name());
// console.log(person2.get_birth_year());


// DOCUMENT OBJECT MODEL (DOM)

// console.log(window);

// SINGLE ELEMENT SELECTOR

// const form = document.getElementById('my-form');
// console.log(form)

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

// MULTI ELEMENT SELECTOR 

// console.log(document.querySelectorAll('.items'));
// console.log(document.getElementsByClassName('items'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((i) => console.log(i));

// MANIPULATING DOM

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Bilal';
// ul.lastElementChild.innerHTML = '<h1>World<\h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// EVENTS

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.className);
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target.id);
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = 'Hello';
// })

// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = 'Hello';
// })


// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = 'Hello';
// })

const my_form = document.querySelector('#my-form');
const name_input = document.querySelector('#name');
const email_input = document.querySelector('#email');
const msg = document.querySelector('.msg');
const user_list = document.querySelector('#users');

my_form.addEventListener('submit',on_submit);

function on_submit(e){
    e.preventDefault();
    if (name_input.value === '' || email_input.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields';
        setTimeout(() => msg.remove(),3000);
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name_input.value} : ${email_input.value}`));
        user_list.appendChild(li);

        //clearing fields
        name_input.value = '';
        email_input.value = '';
    }
}