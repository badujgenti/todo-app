// function changeTheme(){
//     document.body.classList.toggle("dark");    
// }

const itemsNumber = document.getElementById("items")
let  sunButton = document.querySelector(".tgl-btn")


itemsNumber.innerHTML = `${tasks.length} items left`;


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

let clearCompleted = document.getElementById("clear");
clearCompleted.addEventListener("click", ()=>{
    let falseTask = tasks.filter((taskListElements)=> !taskListElements.active )
    tasks = [...falseTask]
    setup(tasks, "tasks");
})



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




        