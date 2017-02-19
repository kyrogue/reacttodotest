var $ = require('jquery');

module.exports={
    setTodos:function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
            return todos;
        }
    },
    getTodos:function(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try{
            todos = JSON.parse(stringTodos);
        }catch(e){

        }

        return $.isArray(todos)? todos : []
    },
    filteredTodos:function(todos,showCompleted,searchText){
        var filteredTodos = todos;
        //filter by show completed
        filteredTodos = filteredTodos.filter((todo)=>{
            return !todo.completed || showCompleted;
        });

        filteredTodos = filteredTodos.filter((todo)=>{
            var text = todo.text.toLowerCase();
            //filter is return true item stay , false item removed
            return searchText.length === 0 || text.indexOf(searchText) > - 1;
        });
        //sort
        filteredTodos.sort((a,b)=>{
            if(a.completed === false && b.completed === true){
                return -1;//a before b
            }else if(a.completed === true && b.completed === false){
                return 1;//a after b
            }else{
                return 0;//equal no need sort
            }
        });
        return filteredTodos;
    }
}