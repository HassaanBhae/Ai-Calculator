const buttons = document.querySelectorAll(".button")
const p = document.getElementById("text-window");
let arrayOfInputs = [];
let buttonId;
let inputCounter = 0;
let leftOperand,rightOperand;
let operator = "";
let answer = false;
let decimalCounter = 0;

window.addEventListener('keydown', (event) => {
    buttonId = event.code;
    if(buttonId ==="Slash"){
        buttonId = "divide";
    }else if(buttonId ==="Equal" && event.key ==="+"){
        buttonId = "plus";
    }else if(buttonId ==="Digit8" && event.key ==="*"){
        buttonId = "multiply";
    }else if(buttonId ==="Digit5" && event.key ==="%"){
        buttonId = "percentage";
    }else if(buttonId ==="Enter" && event.key ==="Enter"){
        buttonId = "equate";
    }else if(buttonId ==="Period" && event.key ==="."){
        buttonId = "decimal";
    }else if(buttonId ==="Backspace" && event.key ==="Backspace"){
        buttonId = "DEL";
    }
    console.log('buttonId: ', buttonId);
    if(buttonId != "DEL"){
        buttonId = buttonId.toLowerCase();
    }
    simulateButtonClick(buttonId);
    console.log(event);
});

// Function to simulate button click
function simulateButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        button.dispatchEvent(event); // Dispatch the click event
    } else {
        console.error(`Button with ID ${buttonId} not found.`);
    }
}

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
    if(arrayOfInputs.includes("+") || arrayOfInputs.includes("-") || arrayOfInputs.includes("*") || arrayOfInputs.includes("/") || arrayOfInputs.includes("%") ){
        console.log("Already has A opearto!SadASdasD!!!!!!!");
    }else{        
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
        operator = arrayOfInputs[arrayOfInputs.length - 1];
        console.log("Operator Set AS:"+operator);
        setLeftOperand();
    }
}
function setLeftOperand(){
    let value = "";
    for(let i =0 ; i < arrayOfInputs.length -1 ; i++){
        value += arrayOfInputs[i];
    }
    leftOperand = value;
    console.log("leftOperand = "+leftOperand);
    decimalCounter = 0;
}
function setRightOperand(){
    let value = "";
    let leftOperandLength = leftOperand.length+1;
    for(let i = leftOperandLength; i <= arrayOfInputs.length -1 ; i++){
        value += arrayOfInputs[i];
    }
    rightOperand = value;
    console.log("RightOperand = "+rightOperand);
}
function calc(){
    leftOperand = parseFloat(leftOperand);
    rightOperand = parseFloat(rightOperand);
    let calculation;
    switch(operator){
        case "+":
            console.log("Plus!");
            calculation = leftOperand + rightOperand;
            break;
        case "-":
            console.log("Minus!");
            calculation = leftOperand - rightOperand;
            break;
        case "*":
            console.log("Multiply!");
            calculation = leftOperand * rightOperand;
            break;
        case "/":
            console.log("Divide!");
            calculation = leftOperand / rightOperand;

            break;
        case "%":
            console.log("Percentage!");
            calculation = leftOperand % rightOperand;
            break;
        default:
            console.log("no valid operator!");
            break;
    }
    if(calculation === Infinity){
        calculation = "Really?";
        p.innerText = calculation;
        leftOperand = "";
        inputCounter = 0;
    }
    else if(calculation === 80085){
        let temp = calculation;
        calculation = calculation+"..hehe";
        p.innerText = calculation;
        leftOperand = temp;
    }
    else{
        calculation = parseFloat(calculation.toFixed(3));
        leftOperand = calculation;
        p.innerText = calculation;
    }
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
        case "digit0":
            console.log('0: ', 0);
            arrayOfInputs.push(0);
            break;
        case "digit1":
            console.log('1: ', 1);
            arrayOfInputs.push(1);
            break;
        case "digit2":
            console.log('2: ', 2);
            arrayOfInputs.push(2);
            break;
        case "digit3":
            console.log('3: ', 3);
            arrayOfInputs.push(3);
            break;
        case "digit4":
            console.log('4: ', 4);
            arrayOfInputs.push(4);
            break;
        case "digit5":
            console.log('5: ', 5);
            arrayOfInputs.push(5);
            break;
        case "digit6":
            console.log('6: ', 6);
            arrayOfInputs.push(6);
            break;
        case "digit7":
            console.log('7: ', 7);
            arrayOfInputs.push(7);
            break;
        case "digit8":
            console.log('8: ', 8);
            arrayOfInputs.push(8);
            break;
        case "digit9":
            console.log('9: ', 9);
            arrayOfInputs.push(9);
            break;
        case "decimal":
            if(decimalCounter === 0){
                arrayOfInputs.push(".");
                decimalCounter++;
            }else{
                console.log("Already Have A Decimal!");
            }
            console.log('decimal Counter: ',decimalCounter );
            break;
        case "AC":
            console.log("Clear ALL!");
            inputCounter = 0;
            arrayOfInputs.length = 0; // Clear the array
            operator = "";
            leftOperand = "";
            leftOperandLength = 0;
            rightOperand = "";
            console.clear();
            break;
        case "DEL":
            console.log('DEL: ', "DEL");
            let del = arrayOfInputs.pop(); // Remove the last element from the array
            //Checks if input or last value is Operator
            if(del === "+" || del === "-" || del === "/" || del === "*" || del === "%"){
                console.log('operator Deleted: ', del);
                operator = "";
                if(arrayOfInputs.includes(".")){
                    decimalCounter = 1;
                }
            }
            if(del === "."){
                decimalCounter = 0;
                console.log("Decimal Deleted!");
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
                operator = "";
            }
            break;
        default:
            console.log("Button Check Called!");
            break;
        }
}

// alert( 'Your screen resolution is ' + screen.width + 'x' + screen.height );
