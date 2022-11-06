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
const completeTask=(event)=>{
    console.log(event.target);
    const element=event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};
export default checkComplete;