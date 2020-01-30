// console.log('hello, does this work?');
// console.log('live reload really works');

// #1 accepts arguments, instead of using global variables.
function greet({name, address}){

    // #2 always return a value.
    return `Hello, ${name}!, of ${address}`;
};
// console.log(greet('Greta'));
const person = {
    name: 'Greta',
    // address: 'Earth',
    occupation: 'Hero'
};

function fromEarth(originalObject) {
    // add an address property
    // whose value is Earth
    // originalObject.address = 'Earth'
    // const theAddress = originalObject.address || 'Earth';
    const modifedVersionOfObject = {
        // defaults go before the 
        // object spread operator (...)
        address: 'Earth',
        ...originalObject,  // object spread syntax
        // address: theAddress,
        // "take all the key value pairs from the original
        // and sprinkle them right HERE."
        // name: originalObject.name,
        // occupation: originalObject.occupation,
        // address: originalObject.address || 'Earth',
        age: 'infinity',
        // overwrites go after the
        // the object spread operator (...)
        name: 'Oakley'
    }

    // then return that object
    return modifedVersionOfObject;
}

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
console.log(persons.filter(persons => persons.address !== "Pacific").map(greet));




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
