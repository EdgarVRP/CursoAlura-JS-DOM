(() => {
    
  const btn = document.querySelector("[data-form-btn]");

  console.log(btn);

  const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(tittleTask);
    //task.innerHTML= content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);

    console.log(task);
  };

  btn.addEventListener("click", createTask);

  const checkComplete = (evento) => {
    const i = document.createElement("i");
    //ERROR por multiple STRING i.classList.add("far fa-check-square icon");
    i.classList.add("far", "fa-check-square", "icon");
    /*
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    */
    i.addEventListener("click", completeTask);
    return i;
  };

  /*
btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(input.value);
});
*/
  /*
btn.addEventListener("click", function(evento){
    evento.preventDefault();
    console.log(input.value);
});
*/

  const completeTask = (event) => {
    console.log(event.target);
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
  //Se usa IIFE Inmediatly Invoked Function Expression
  const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
  };
  const deleteTask = (evento) => {
    const parent = evento.target.parentElement;
    parent.remove();
  };
})();
