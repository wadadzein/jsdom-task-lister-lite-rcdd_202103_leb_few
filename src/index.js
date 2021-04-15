document.addEventListener("DOMContentLoaded", () => {
const main=document.querySelector ("#main-content");
console.log (main);

const taskForm= document.querySelector("#create-task-form");
const tasklist= document.querySelector("#tasks");

taskForm.addEventListener("submit", function (e){
e.preventDefault();
const newTask= document.querySelector("#new-task-description").value;
tasklist.innerHTML+=`<li>${newTask}
<button data-set="delete">X for delete</button>
</li>
tasklist.addEventListener("click", function(e){
  if (e.traget.dataset.set==="delete) {
    e.traget.parentEleemt.remove();
  }
}

`;



taskForm.reset();
});


});
