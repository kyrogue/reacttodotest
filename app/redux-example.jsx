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
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return{
                ...state,
                searchText:action.searchText
            }
            default:
                return state;
    }

};
var store = redux.createStore(reducer,redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));//enable redux dev tool by running redux thru some middleware

//get state of redux store
var currentState = store.getState();

//actions are object and have a type property minimally
var action ={
    type:'CHANGE_SEARCH_TEXT',
    searchText:'work'
};

//called everytime a state change,
//returns a function that u can call to unsubscribe.
store.subscribe(()=>{
    var state = store.getState();
    console.log('Name is',state.name);
});
//unsubscribe();

//dispatch the action
store.dispatch(action);

store.dispatch({
    type:'CHANGE_SEARCH_TEXT',
    searchText:'workadasddadadada'
})

console.log('currentState',currentState);