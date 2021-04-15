document.addEventListener("DOMContentLoaded", () => {

const form= document.getElementById("create-task-form");
const list= document.getElementById("list");

form.addEventListener("submit",function(e){
const todos= document.getElementById("new-task-description").value;
e.preventDefault();
list.innerHTML+= `<li>
${todos}
</li>


});


});