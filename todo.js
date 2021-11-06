const list = {
    "create a task": "In progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task) {
    Object.defineProperty(list, task, {
        value: "Done",
    });
   
}
function addTask(task) {
    list[task] = 'To do';
}

function deleteTask(task) {
    delete list[task];
}

changeStatus("write a post");
addTask("Added");
deleteTask("make a bed");
console.log(list);

