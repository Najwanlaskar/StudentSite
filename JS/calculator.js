const DisplayBar=document.querySelector(".DisplayBar");

//section1
const ClearBtn=document.querySelector(".clear");
const MultiplyBtn =document.querySelector(".symbolX");
const DivisionBtn =document.querySelector(".symbol÷");
const BackspaceBtn =document.querySelector(".backspace");
//section2
const Btn1=document.querySelector(".btn1");
const Btn2=document.querySelector(".btn2");
const Btn3=document.querySelector(".btn3");
const AdditionBtn=document.querySelector(".addition");
//section3
const Btn4=document.querySelector(".btn4");
const Btn5=document.querySelector(".btn5");
const Btn6=document.querySelector(".btn6");
const SubtractBtn=document.querySelector(".symbol-");
//section4
const Btn7=document.querySelector(".btn7");
const Btn8=document.querySelector(".btn8");
const Btn9=document.querySelector(".btn9");
const EqualBtn=document.querySelector(".equal");
//section5
const Btn0=document.querySelector(".btn0");
const DecimalBtn=document.querySelector(".decimal");

function Add(num1,num2){
    return num1 + num2
}
function Subtract(num1,num2){
    return num1 - num2
}
function Multiply(num1,num2){
    return num1*num2
}
function Divide(num1,num2){
    return num1/num2
}

//numbers
Btn1.addEventListener("click",function(e){
DisplayBar.innerHTML += 1;
})
Btn2.addEventListener("click",function(e){
DisplayBar.innerHTML += 2;
})
Btn3.addEventListener("click",function(e){
DisplayBar.innerHTML += 3;
})
Btn4.addEventListener("click",function(e){
DisplayBar.innerHTML += 4;
})
Btn5.addEventListener("click",function(e){
DisplayBar.innerHTML += 5;
})
Btn6.addEventListener("click",function(e){
DisplayBar.innerHTML += 6;
})
Btn7.addEventListener("click",function(e){
DisplayBar.innerHTML += 7;
})
Btn8.addEventListener("click",function(e){
DisplayBar.innerHTML += 8;
})
Btn9.addEventListener("click",function(e){
DisplayBar.innerHTML += 9;
})
Btn0.addEventListener("click",function(e){
DisplayBar.innerHTML += 0;
})

ClearBtn.addEventListener("click",function(e){
DisplayBar.innerHTML = null;
})
MultiplyBtn.addEventListener("click", () => handleOperator("x"));
DivisionBtn.addEventListener("click", () => handleOperator("÷"));
AdditionBtn.addEventListener("click", () => handleOperator("+"));
SubtractBtn.addEventListener("click", () => handleOperator("-"));
BackspaceBtn.addEventListener("click",function(e){

DisplayBar.innerHTML= DisplayBar.textContent.slice(0,-1);
})

// Decimal
DecimalBtn.addEventListener("click", () => {
    let sequence = DisplayBar.innerHTML;
    let split = sequence.split(/[+\-x÷]/);
    let currentNumber = split[split.length - 1];
    if (!currentNumber.includes(".")) {
        DisplayBar.innerHTML += ".";
    }
});

EqualBtn.addEventListener("click",()=>{
 DisplayBar.innerHTML = operate(DisplayBar.innerHTML);

})

function operate(sequence) {
    let split = sequence.match(/^(-?\d+\.?\d*)([+\-x÷])(-?\d+\.?\d*)$/);
    if (!split) return sequence;
    let num1 = parseFloat(split[1]);
    let operator = split[2];
    let num2 = parseFloat(split[3]);
    let result;

    switch(operator){
        case "x": result = Multiply(num1, num2); break;
        case "+": result = Add(num1, num2); break;
        case "-": result = Subtract(num1, num2); break;
        case "÷": result = Divide(num1, num2); break;
    }
    return result;
}

function handleOperator(newOperator) {
    let sequence = DisplayBar.innerHTML;
    let split = sequence.match(/^(-?\d+\.?\d*)([+\-x÷])(-?\d+\.?\d*)$/);

    if (split) {
        let result = operate(sequence);
        DisplayBar.innerHTML = result + newOperator;
    } else if (/[+\-x÷]$/.test(sequence)) {
        DisplayBar.innerHTML = sequence.slice(0, -1) + newOperator;
    } else {
        DisplayBar.innerHTML += newOperator;
    }
}