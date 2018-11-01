
var filename="todos.json";
const fs=require('fs');
const loggerinf=require('./util');
loggerinfo=(new loggerinf()).loggerinfo;
console.log("hello");
function initToDoApp()
{
  this.todoList=[];
  //loggerinfo("## loading..initToDoApp in todoApi..");
  this.loadTodosFileSystem=function()
  {       // fill todolist from fs
         loggerinfo("## calling "+arguments.callee.name);
         var buf = fs.readFileSync('todos.json', 'utf8');
         this.todoList=JSON.parse(buf);
         //fs.close();
 },

 this.loadTodosMongoDB=function()
{
    loggerinfo("## calling "+arguments.callee.name);
},

this.updateTodosFileSystem=function()
{
      loggerinfo("## calling "+arguments.callee.name);
      // rewrite todos to fs
      todoString=JSON.stringify(this.todoList);
      saved = fs.writeFileSync('todos.json', todoString, 'utf8');
      //fs.close();
},

this.addTodo=function(title,priority)
{
  loggerinfo("## calling "+arguments.callee.name);
  console.log("###add..");
  var todo={"title":title,"completed":false,"comment":"Inprogress"};
  todo.monthCreated=new Date().getMonth();
  todo.priority=(priority==undefined?"low":priority);
  console.log("##len"+this.todoList.length);
  this.loadTodosFileSystem();
  this.todoList.push(todo);
  this.updateTodosFileSystem();
},

this.markTodoAsCompleted=function(title,comment)
{
  loggerinfo("## calling "+arguments.callee.name);
  var index=-1,i=0;
  this.loadTodosFileSystem();
  console.log("##len:"+this.todoList.length);
  var scope=this;
  var a=this.todoList.filter(function(todo,ind){
    if(todo.title==title){
      scope.todoList[ind].completed=true;scope.todoList[ind].comment=comment;
      return true;
    }
    return false;
  });
this.updateTodosFileSystem();
  //if(index!=-1)this.todoList[i].completed=true;this.todoList[i].comment=comment;
},

this.getCompletedTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  this.loadTodosFileSystem();
  return this.todoList.filter(function(todo){return todo.completed;});
},

this.getTodosByPriority=function(priority)
{
  loggerinfo("## calling "+arguments.callee.name);
  this.loadTodosFileSystem();
  return this.todoList.filter(function(todo){return todo.priority==priority;});
},

this.getInCompleteTasks=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  this.loadTodosFileSystem();
  return this.todoList.filter(function(todo){return !(todo.completed);})
},

this.getTodosByMonth=function(month)
{
  loggerinfo("## calling "+arguments.callee.name);
  this.loadTodosFileSystem();
  var months=["00","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return this.todoList.filter(function(todo){return month==todo.monthCreated;});
},

this.deleteTodo=function(title)
{
  loggerinfo("## calling "+arguments.callee.name);
  this.loadTodosFileSystem();
  this.todoList=this.todoList.filter(function(todos){return todos.title!==title;});
  this.updateTodosFileSystem();
},
this.getCountOfTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  loadTodosFileSystem();
  return this.todoList.length;
},

this.getAllTodos=function()
{
  loggerinfo("## calling "+arguments.callee.name);
  return this.todoList;
},

this.sortTodosBy=function(prop)
{
  loggerinfo("## calling "+arguments.callee.name);
  loadTodosFileSystem();
  return this.todoList.sort(function(a,b){return a[prop]>=b[prop];});
}
}
module.exports=initToDoApp;
