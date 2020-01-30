// console.log('hello, does this work?');
// console.log('live reload really works');

// #1 accepts arguments, instead of using global variables.
function greet({name, address}){

    // #2 always return a value.
    return `Hello, ${name}!, of ${address}`;
};
// console.log(greet('Greta'));
// const person = {
//     name: 'Greta',
//     // address: 'Earth',
//     occupation: 'Hero'
// };

// function fromEarth(somebody){
//     const modifiedSomebody = {
//         ...somebody,
//         address: 'Earth'
//     }
//     if (somebody.address){
//         return somebody
//     } else {
//         return modifiedSomebody
//     }
    // somebody.address = 'Earth'
    // add an address property whose value is Earth, then return that object
// };
// console.log(greet(fromEarth(person)));

const persons = [
    {name: 'Alice', address: 'Atlanta'},
    {name: 'Bob', address: 'Atlanta'},
    {name: 'Chulu', address: 'Pacific'},
];

const modifiedPersons = [
    'Darla',
    ...persons
];

function addressIsNotPacific(persons){
    return persons.address !== "Pacific";
}

// const noPacifics = persons.filter((persons)=>{
//     return persons.address !== "Pacific";
// });

// short version of ^
const noPacifics = persons.filter(persons => persons.address !== "Pacific");
console.log(persons.filter(persons => persons.address !== "Pacific").map(greet()));




// console.log(persons.map(greet()));
// console.log(modifiedPersons);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
