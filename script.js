function squareDigits(num){
  let digit = new String(num).split('');
 return Number.parseInt(digit.map(value => value * value).join(''))
}


console.log(squareDigits(9119))



