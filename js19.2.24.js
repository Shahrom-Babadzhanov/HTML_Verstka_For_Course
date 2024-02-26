var a = 150;
var b = 200;

const pravda = a > b ? 
                    a === b ?
                            "50" : "0" :
                    a !== b ?
                            "50" : "0" ;

console.log (pravda);

if (pravda) {
    console.log("Да это Правильно")
}

else {
    console.log("Нет это Не правильно")
    console.log(pravda)
}