const btn =document.querySelector("[data-form-btn]");
const input =document.querySelector("[data-form-input]");
console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    console.log(input.value);
};

btn.addEventListener("click", createTask);
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