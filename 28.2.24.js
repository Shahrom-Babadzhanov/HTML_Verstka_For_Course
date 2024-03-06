 let initialPrice = 100;
const dailyIncreasePercentage = 10;
const days = 7;


 for (let day = 1; day <= days; day++) {
     initialPrice = initialPrice + initialPrice * dailyIncreasePercentage / 100;
}


console.log("Цена товара через 7 дней будет составлять:", initialPrice.toFixed(2), "рублей");

