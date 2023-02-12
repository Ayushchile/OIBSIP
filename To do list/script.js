
function displayTask(){
    let text = document.getElementById("display").value;
    let newStat= document.getElementById("status");

    const newItem = document.createElement("li");
    var delBtn = document.createElement( "i");
    delBtn.classList.add("far", "fa-trash-alt");

    var doneBtn = document.createElement("i");
    doneBtn.classList.add("fa-solid", "fa-clipboard-check");
    newItem.innerHTML =  `<span class="todo-list"> ${text}</span>`;

    newItem.appendChild(doneBtn);
    newItem.appendChild(delBtn);
    newStat.appendChild(newItem);

    document.getElementById("display").value="";
    var current_tasks = document.querySelectorAll(".far");
for(var j=0; j<current_tasks.length; j++){
        current_tasks[j].onclick = function(){
            this.parentNode.remove()
		}
};
 var editTask = document.querySelectorAll(".fa-solid",".fa-clipboard-check");
    for (var k=0; k<editTask.length; k++){
    editTask[k].onclick  = function(){
    this.parentNode.style.textDecoration = "line-through";
    } 
};
};
var current_tasks = document.querySelectorAll(".far");
for(var j=0; j<current_tasks.length; j++){
    current_tasks[j].onclick = function(){
        this.parentNode.remove()
}};
    
    
    
 