let operand1 = 80;
let operand2  = 50;

let sign = "*";

switch (sign) {
    case "*":
        if(operand1 == 0 || operand2 == 0) console.log(0)
        else console.log(operand1*operand2);
    break;

    case "/":
        if(operand1 == 0 || operand2 == 0) console.log(0)
        else console.log(operand1/operand2);
    break;
    
    case "-":
         console.log(operand1-operand2);
    break;

    case "+":
         console.log(operand1+operand2);
    break;
}