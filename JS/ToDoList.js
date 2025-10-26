const input = document.getElementById("TaskInput");
const list = document.getElementById("Lists-container");


function addTask(){
    if(input.value ===""){
        alert("You need to type in something!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let x = document.createElement("span")
        x.innerHTML="\u00d7";
        li.appendChild(x);
    }
    input.value="";
}