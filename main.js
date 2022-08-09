// function changeTheme(){
//     document.body.classList.toggle("dark");    
// }


let  sunButton = document.querySelector(".tgl-btn")

sunButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");  
    let listElement = document.querySelectorAll(".task");
    listElement.forEach(element => {
        if (!element.classList.contains("task-dark")){
            element.classList.add("task-dark")
        }else{
            element.classList.remove("task-dark")
        }
    });
});

// const taskListElement = document.getElementById('tasks');
// const deleteButtons =Array.from(taskListElement.querySelectorAll(".delete-task"));
// console.log(deleteButtons);
// deleteButtons.map((deleteButton) =>{
//     deleteButton.addEventListener("click", (event) =>{
//         const dataId = parseInt(element.nextElementSibling.getAttribute("data-id"));
        
//         tasks.splice(dataId, 1);
//         setup (tasks, "tasks");
//     })

// })

// deleteBtn.addEventListener("click", () =>{
//     console.log(deleteBtn.parentElement);

// })



