var summation = function (num) {
    var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result += num;
  }
  return result;
  }

  summation(5)
  summation(2)
  summation(8)
  summation(1)