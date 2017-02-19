var redux = require('redux');

console.log('starting redux example');

var stateDefault ={
    searchText:'',
    showCompleted:false,
    todos:[]
};

//a reducer is a pure function, gets pass 2 argument
//first is existing state before action is triggered.
var reducer = (state = stateDefault,action)=>{

    return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState',currentState);