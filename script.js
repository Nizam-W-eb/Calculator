let controls = document.querySelector(".controls");
let display = document.querySelector("#display-content");
let operator = document.querySelectorAll(".operator")
let value = "";
let operatorCount = 0;

controls.addEventListener("click" , (e) => {
    let target = e.target;
    if (target.classList.contains('number-functions')){
        switch (target.id){
            case "clear":
                value = "";
                operatorCount = 0;
                operatorClickCount = 0;
                break;
            case "equal":
                operation();
                operatorCount = 0;
                break; 
        }   
    }
    else {
        value += target.id;
    }

    
// to increase the count of the operator
    if(target.classList.contains("operator")){
        operatorCount = ++operatorCount};

    // to do the operation with the operators
    if (operatorCount === 2){
        operatorCount = 1;
        let lastOperator = value.slice(-1);
        value = value.slice(0,-1)
        operation();
        value += lastOperator;
    }

    display.textContent = value;
    console.log(value)
})     

//this will do the operation of the value
function operation(){
    if (value.includes("+")){
        let number = value.split("+");
        number = number.map(num => parseInt(num));
        value = number.reduce((acc,cur) => acc+cur,0);
    }
    else if (value.includes("*")){
        let number = value.split("*");
        value = number.reduce((acc,cur) => acc*cur);
    }
    else if (value.includes("-")){
        let number = value.split("-");
        value = number.reduce((acc,cur) => acc-cur,0);
    }
    else if (value.includes("/")){
        let number = value.split("/");
        value = number.reduce((acc,cur) => acc/cur);
    }
    else{
       value = "Error";
    }
}
