const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (numberList.length === 0) return 0;

  let sum = 0;

  for (const num of numberList) {
    sum += num;
  }

  return sum / numberList.length;
}

console.log(average(numbers));