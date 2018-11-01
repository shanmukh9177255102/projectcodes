
var todoList=[];
const fs=require('fs');
const loggerinfo=require('./util')();
console.log("hello");
function initToDoApp()
{
  //loggerinfo("## loading..initToDoApp in todoApi..");
  loadTodosFileSystem=function()
  {       // fill todolist from fs
         loggerinfo("## calling "+arguments.callee.name);
         todoString=JSON.stringify(todoList);
 },

 loadTodosMongoDB=function()
{
    loggerinfo("## calling "+arguments.callee.name);
},

this.updateTodosFileSystem=function()
{
  //loggerinfo("## calling "+arguments.callee.name);
      // rewrite todos to fs
      todoString=JSON.stringify(todoList);
},

this.addTodo=function(title,priority)
{
  //loggerinfo("## calling "+arguments.callee.name);
  var todo={"title":title,"completed":false,"comment":"Inprogress"};
  todo.monthCreated=new Date().getMonth();
  todo.priority=(priority==undefined?"low":priority);
  todoList.push(todo);
  this.updateTodosFileSystem();
},

markTodoAsCompleted=function(title,comment)
{
  loggerinfo("## calling "+arguments.callee.name);
  var index=-1;
  var a=todoList.filter(
    function(todo,i)
  {
    if(todo.title==title){index=i;return true;}
    return false;
  }
);
  if(index!=-1)todoList[i].completed=true;todoList[i].comment=comment;
},

getCompletedTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  return todoList.filter(function(todo){return todo.completed;});
},

getTodosByPriority=function(priority)
{
  loggerinfo("## calling "+arguments.callee.name);
  return todoList.filter(function(todo){return todo.priority==priority;});
},

getInCompleteTasks=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  return todoList.filter(function(todo){return !(todo.completed);})
},

getTodosByMonth=function(month)
{
  loggerinfo("## calling "+arguments.callee.name);
  var months=["00","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return todoList.filter(function(todo){return month==todo.monthCreated;});
},

deleteTodo=function(title)
{
  loggerinfo("## calling "+arguments.callee.name);
todoList=todoList.filter(function(todos){return todos.title!==title;});
updateTodosFileSystem();
},
getCountOfTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  return todoList.length;
},

getAllTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
return todoList;
},

sortTodosBy=function(prop)
{
  loggerinfo("## calling "+arguments.callee.name);
  return todoList.sort(function(a,b){return a[prop]>=b[prop];});
}
}
module.exports=initToDoApp;
