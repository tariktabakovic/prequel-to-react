// console.log('hello, does this work?');
// console.log('live reload really works');

// #1 accepts arguments, instead of using global variables.
function greet({name, address}){
    // const {name} = whom;

    // #2 always return a value.
    return `Hello, ${name}!, of ${address}`;
};
// console.log(greet('Greta'));
const person = {
    name: 'Greta',
    // address: 'Earth',
    occupation: 'Hero'
};

function fromEarth(somebody){
    if (somebody.address === ''){
        return 'Earth'
    }
    // somebody.address = 'Earth'
    return somebody;
    // add an address property whose value is Earth, then return that object
};
console.log(greet(fromEarth(person)));

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
