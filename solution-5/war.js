function squareSum(numbers){
    let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += parseInt(numbers[i]**2)
}
return sum
}

squareSum([1,2])
squareSum([0, 3, 4, 5])
squareSum([])