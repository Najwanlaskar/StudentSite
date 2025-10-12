//put the grind squares inside a container div (HTML)
const Container=document.querySelector(".container");
const btn=document.querySelector(".Display");
const colbtn=document.querySelector(".color");
const clear=document.querySelector(".Clear")

let containerSize=520;
let size=16;
let shade= null
let rainbow=false
function CreateColumn(size){
        Container.innerHTML = "";
        for(i=0;i<size*size;i++){                                                    
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.border = "1px solid";
          square.style.background="white"
        square.style.height= square.style.width= `${(containerSize/size)-2}px`;
        Container.appendChild(square);

        square.addEventListener("mouseover", (e)=>{
        
            if (rainbow === true) {
                let r = Math.floor(Math.random() * 256); 
                let g = Math.floor(Math.random() * 256); 
                let b = Math.floor(Math.random() * 256); 
                square.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            } else {
             square.style.background="black"}
{
} })
}

}

btn.textContent="Display Size"
btn.addEventListener("click",(e)=>{
        size = prompt("What would you like the size to be?")
        CreateColumn(size)

});

colbtn.textContent="Rainbow Mode"
colbtn.addEventListener("click",(e)=>{
if(rainbow)
      {
          rainbow = false;
      }
      else
      {
          rainbow = true;
      }
})

clear.textContent="Clear"
clear.addEventListener("click",(e)=>{
CreateColumn(size)
})
CreateColumn(size)

