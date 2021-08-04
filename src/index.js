const fetch = require("node-fetch");
const chalk = require("chalk");
const yargs = require('yargs')

const dotenv = require('dotenv').config()

const TOKEN = process.env.TOKEN;
const URL = process.env.URL;

function getActiveTasks() {
  fetch( URL+"tasks", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json()
  .then((data) => console.table(data)));
}


function createTask(){
  let todo = {
    "content": "Buy Milk",
    "due_string": "tomorrow at 12:00",
    "due_lang": "en",
    "priority": 4
  };
  let header={
     'Content-Type': 'application/json',
      "Authorization": `Bearer ${TOKEN}`,
  }
  fetch(URL +"tasks",{
    method:'POST',
    headers: header,
    body:JSON.stringify(todo)
  })
  console.log("task added")
}


function closeTask(){
  fetch(URL +"tasks/5044055926/close",{
    method:'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
  console.log("Task closed")
}

function deleteTask(){
  fetch(URL +"tasks/5044119733",{
    method:'DELETE ',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
  console.log("Task Deleted")
}

//createTask()
//closeTask()
deleteTask()
const argv = require('yargs')
argv.command("ls" , "Get Active Task" , getActiveTasks)
argv.command("add-task" , "Create a Task",createTask)
.argv