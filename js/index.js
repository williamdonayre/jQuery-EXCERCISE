//Adding Task
// targeted "btn" task on "Add task" button
$("#add-task").on("click", function(){
    var newTask = prompt("What is new Task");
    console.log("newTask: ", newTask)
    //placing new task into html
    var taskStyle = "<li><span>" + newTask + "</span> <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>"
    //tagerting "ul" with a id "task-list" and appending the addedTask
    $("#task-list").append(taskStyle);
});

//targeting li to remove
$("#delete-task").on("click", function(){
 $("#task-list li:last-child").remove()
})  
