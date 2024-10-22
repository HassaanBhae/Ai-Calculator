const buttons = document.querySelectorAll(".button")
let arrayOfInputs = [];
let buttonId;
let inputCounter = 0;
let leftOperand,rightOperand;
let operator = "";
let answer = false;

console.log(buttons);
console.log(inputCounter);
const p = document.getElementById("text-window");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.id);
        button.style.transform= "scale(0.85)";
        buttonId = button.id;
        inputCounter++;
        console.log('inputCounter: ', inputCounter);
        if(inputCounter===1){
            if(buttonId === "plus" || buttonId === "minus" || buttonId === "multiply" || buttonId === "divide" || buttonId === "percentage"){
                inputCounter = 0;
            }else{
                console.log("Inner Else Called!");
                buttonCheck(buttonId);
            }
        }else{
            inputCounter = 1;
            console.log("Outer Else Called!");
            //Set Operator if it is pressed
            if(buttonId === "plus" || buttonId === "minus" || buttonId === "multiply" || buttonId === "divide" || buttonId === "percentage"){
                setOperator(buttonId);
            }else{
                buttonCheck(buttonId);
            }
            
        }
        setTimeout(() => {
            if(answer === false){
                if(arrayOfInputs.length <= 13){
                    p.innerHTML ="";
                    arrayOfInputs.forEach(input =>{
                        p.innerHTML += input;
                    });
                }else{
                    arrayOfInputs.pop();
                }
            }
            answer = false;
            button.style.transform= "scale(1)";
            
        }, 200); // Function will execute after 200 ms
    });
});
function setOperator(buttonId){
    let del = arrayOfInputs.length -1;
    if(arrayOfInputs[del] === "+" || arrayOfInputs[del] === "-" || arrayOfInputs[del] === "/" || arrayOfInputs[del] === "*" || arrayOfInputs[del] === "%"){
        arrayOfInputs.pop();
        console.log("Operator Replaced!");
    }
    switch(buttonId){
        case "plus":
            console.log('plus: ', "plus");
            arrayOfInputs.push("+");

            break;
        case "minus":
            console.log('minus: ', "minus");
            arrayOfInputs.push("-");

            break;
        case "multiply":
            console.log('multiply: ', "multiply");
            arrayOfInputs.push("*");

            break;
        case "divide":
            console.log('divide: ', "divide");
            arrayOfInputs.push("/");

            break;
        case "percentage":
            console.log('percentage: ', "percentage");
            arrayOfInputs.push("%");
            break;
        default:
            console.log("no valid operator!");
            break;
    }
    // If array already has a operator not at last
    // console.log("Cant press 2 opertors together!");

    operator = arrayOfInputs[arrayOfInputs.length - 1];
    console.log("Operator Set AS:"+operator);
    setLeftOperand();
}
function setLeftOperand(){
    let value = "";
    for(let i =0 ; i < arrayOfInputs.length -1 ; i++){
        value += arrayOfInputs[i];
    }
    leftOperand = value;
    console.log("leftOperand = "+leftOperand);
}
function setRightOperand(){
    let value = "";
    let leftOperandLength = leftOperand.length+1;
    for(let i = leftOperandLength; i <= arrayOfInputs.length -1 ; i++){
        // push individual number
        value += arrayOfInputs[i];
    }
    rightOperand = value;
    console.log("RightOperand = "+rightOperand);
}
function calc(){
    leftOperand = parseInt(leftOperand);
    rightOperand = parseInt(rightOperand);
    let calculation = leftOperand + rightOperand;
    p.innerText = calculation;
    leftOperand = calculation;
    //clear array and set left operand as result
    arrayOfInputs.length = 0;
    arrayOfInputs = Array.from(String(leftOperand));
    console.log("Left Operand Set As = "+leftOperand);
    answer = true;
    arrayOfInputs.forEach(number =>{
        console.log(number);
    });
    return;
}
function buttonCheck(buttonId) {
    switch(buttonId) {
        case "0":
            console.log('0: ', 0);
            arrayOfInputs.push(0);
            break;
        case "1":
            console.log('1: ', 1);
            arrayOfInputs.push(1);
            break;
        case "2":
            console.log('2: ', 2);
            arrayOfInputs.push(2);
            break;
        case "3":
            console.log('3: ', 3);
            arrayOfInputs.push(3);
            break;
        case "4":
            console.log('4: ', 4);
            arrayOfInputs.push(4);
            break;
        case "5":
            console.log('5: ', 5);
            arrayOfInputs.push(5);
            break;
        case "6":
            console.log('6: ', 6);
            arrayOfInputs.push(6);
            break;
        case "7":
            console.log('7: ', 7);
            arrayOfInputs.push(7);
            break;
        case "8":
            console.log('8: ', 8);
            arrayOfInputs.push(8);
            break;
        case "9":
            console.log('9: ', 9);
            arrayOfInputs.push(9);
            break;
        case "decimal":
            console.log('decimal: ', "decimal");
            arrayOfInputs.push(".");
            break;
        case "AC":
            console.log("Clear ALL!");
            inputCounter = 0;
            arrayOfInputs.length = 0; // Clear the array
            operator = "";
            leftOperand = "";
            leftOperandLength = 0;
            rightOperand = "";
            break;
        case "DEL":
            console.log('DEL: ', "DEL");
            let del = arrayOfInputs.pop(); // Remove the last element from the array
            //Checks if input or last value is Operator
            if(del === "+" || del === "-" || del === "/" || del === "*" || del === "%"){
                console.log('operator Deleted: ', del);
                operator = "";
                console.log(operator);
            }
            if(arrayOfInputs.length === 0){
                inputCounter = 0;
            }
            break;
        case "equate":
            console.log('equate: ', "equate");
            setRightOperand();
            if(rightOperand.length != 0){
                calc();
            }
            break;
        default:
            console.log("Button Check Called!");
            break;
    }
}

