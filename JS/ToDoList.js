const input = document.getElementById("TaskInput");
const list = document.getElementById("Listscontainer");


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
    SavingData();
}
Listscontainer.addEventListener("click", function(e){
if(e.target.tagName === "LI"){
e.target.classList.toggle("ticked");
    SavingData();
}
else if(e.target.tagName === "SPAN") {
e.target.parentElement.remove();
    SavingData();
}
}, false);

function SavingData(){
    localStorage.setItem("data", Listscontainer.innerHTML);
}

function DisplayList(){
    Listscontainer.innerHTML = localStorage.getItem("data");
}
DisplayList();