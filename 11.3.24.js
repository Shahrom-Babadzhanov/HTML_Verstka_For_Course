const findMax = (str) => {
    let max = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] > max) {
            max = str[i];
        }
    }
    return max;
}
  
 console.log(findMax([1, 0, -5, 40, 10, -100, 48])); 
