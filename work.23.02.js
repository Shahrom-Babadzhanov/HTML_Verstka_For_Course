//задача №1
//let month = 6;
//let season
//switch(month) {
  //case 12:
  //case 1:
  //case 2: 
    // season = "зима" 
    //break;

    //case 3:
    //case 4:
    //case 5:
     //   season = "весна"
    //    break;

    //case 6:
   // case 7:
   // case 8:
   //     season = "лето" 
   //     break;

  //  case 9:
  //  case 10:
  //  case 11:
  //      season = "весна" 
  //      break;

   // default:
   //     season = "неверное число месяца"
   //     break;
//}

//console.log(`номер числа пренадлежит сезону = ${season}`)

//задача №2

//let number = 999;

//let result = (number % 2 === 0) ? "чётное" : "не чётное";

//console.log(`число ${number} равен ${result}`)

//задача №4

//let num1 = 2
//let num2 = 3
//let num3 = 1

//let max = num1; 
//if(num2 > max) {
//    max = num2
//}
//if(num3 > max) {
 //   max = num3
//}
//console.log(max)

//Задача №3

let barometr = 25;

switch (barometr) {
    case 0:
        barometr = "пуховик и шапка"
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        barometr = "куртка"
        break;
 
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        barometr = "ветровка"
        break;

    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
        barometr = "футболка"
        break;
        default:
            barometr = "неверное число градусов"
}

console.log(`надеть ${barometr}`)