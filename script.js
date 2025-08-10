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
                break;
            case "equal":
                operation();
                operatorCount = 0;
                break; 
        }   
    }
    else {
        value += target.id;

        if(target.classList.contains("operator")){
            operatorCount = ++operatorCount
            let lastChar = value[value.length - 1];
            let secondLast = value[value.length - 2];
            let operatorArray = ["+" , "*", "-", "/"];
            if (operatorArray.includes(lastChar) === true && operatorArray.includes(secondLast) === true) {
                value = value.slice(0,-2);
                value += lastChar;
                operatorCount = 1;
            }
            
            if (operatorCount === 2){
              operatorCount = 0;
              value = value.slice(0,-1);
              operation();
            }
           
        };  
    }

    display.textContent = value;
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
        value = number.reduce((acc,cur) => acc-cur);
    }
    else if (value.includes("/")){
        let number = value.split("/");
        value = number.reduce((acc,cur) => acc/cur);
    }
    else{
       value = "Error";
    }
}
