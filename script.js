(()=>{const btn =document.querySelector("[data-form-btn]");

console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    const input =document.querySelector("[data-form-input]");
    const value= input.value;
    const list =document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value="";
    //backticks
    console.log(checkComplete());
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText=value;
    taskContent.appendChild(tittleTask);
    const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  console.log(content);
  //task.innerHTML= content;
  task.appendChild(taskContent);
  list.appendChild(task);
  
  console.log(task);
};

btn.addEventListener("click", createTask);

const checkComplete = (evento) => {
    const  i=document.createElement("i");
    //ERROR por multiple STRING i.classList.add("far fa-check-square icon");
    i.classList.add("far","fa-check-square","icon");
    /*
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    */
    i.addEventListener("click",completeTask);
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

const completeTask=(event)=>{
    console.log(event.target);
    const element=event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};
//Se usa IIFE Inmediatly Invoked Function Expression
})();