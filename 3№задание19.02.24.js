var operand1 = 0;
var operand2  = 10;

var sign = operand1;
operand1 = operand2;

operand1 = operand1 / operand2;
operand1 = operand1 * operand2;
operand1 = operand1 / operand2;


const pravda = operand1 > operand2  
                    ? 
                    operand1  === operand2  
                            ? 
                            "1" 
                            : 
                            "2" 
                            : 
                        operand1  !== operand2  
                            ? 
                            "3" 
                            : 
                            "4";

switch (pravda) {
    case "1":
        console.log("1");
    break;

    case "2":
        console.log("2");
    break;
    
    case "3":
        console.log("3");
    break;

    case "4":
        console.log("4");
    break;
}



if(0) {
    console.log("Да это Тип String")
}
else {
    console.log("Нет это не тип String")
}