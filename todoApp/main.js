const todoapi=require('./todoApi');
const util=require('./util');
const fs=require('fs');
var argv = require('yargs').argv;
todoapiO=new todoapi();
var cmd=argv._[0];
switch (cmd) {
  case 'add':
       console.log(argv);
      todoapiO.addTodo(argv.title,"low");
      break;
  case 'del':
        todoapiO.deleteTodo(argv.title);
        break;
  case 'update':
        todoapiO.markTodoAsCompleted(argv.title,argv.comment);
        break;
  case 'delete':
        todoapiO.deleteTodo(argv.title);break;
  default:
  console.log("##entered default..");
  break;
}
