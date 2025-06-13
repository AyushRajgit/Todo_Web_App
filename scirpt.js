const Button = document.querySelector(".AddBtn");

Button.addEventListener("click", function () {
    const Task = document.createElement("li");
    Task.className = "ListClass";

    // Creating the Text-Field for the user to enter the Task :
    const UserTask = document.createElement("input");
    UserTask.type = "text";
    UserTask.placeholder = "Enter your task";
    UserTask.className = "Task_Description";


    // Creating a Delete-Button for the user to delete the Task :
    const helper = document.createElement("span");
    helper.className = "DelSpan";
    const DeleteBtn = document.createElement("button");
    DeleteBtn.textContent = "Delete";
    DeleteBtn.className = "DelBtn";
    helper.appendChild(DeleteBtn);


    Task.appendChild(UserTask);
    Task.appendChild(helper);

    const Parent = document.querySelector("#UnTask");
    Parent.appendChild(Task);

    // Upon clicking the delete button the ask should be deleted :
    DeleteBtn.addEventListener("click",function() {
        Task.remove();
    });
});