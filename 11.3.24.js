const findMax = (numbers) => {
    if (numbers.length === 0) {
      return null;
    }

    return numbers.reduce(
      (acc, number) => (number > acc ? number : acc),
      
      numbers[0]
    );
  };
  
  findMax([1, 0, -5, 40, 10, -100, 48]); 
