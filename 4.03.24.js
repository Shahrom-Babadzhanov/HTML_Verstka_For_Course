 let factorialNumber = 1;

 function FactorialNumber(n){
     if(n <= 0){
         console.log("Finish");
         console.log(factorialNumber);
         return;
     }

     console.log(n);

     factorialNumber *= n;
     FactorialNumber(n - 1);
 }

 FactorialNumber(128);
