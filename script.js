const btn =document.querySelector("[data-form-btn]");
const input =document.querySelector("[data-form-input]");
console.log(btn);

btn.addEventListener("click", function(evento){
    evento.preventDefault();
    console.log(input.value);
});