const fetch = require("node-fetch");
const chalk = require("chalk");

const TOKEN = "49a9da196062b6c323181f41e8ee829c195ca748";

function getActiveTasks() {
  fetch("https://api.todoist.com/rest/v1/tasks", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }).then((res) => res.json()
  .then((data) => console.log(data)));
}

getActiveTasks();
console.log(chalk.blue("Hello world!"));
