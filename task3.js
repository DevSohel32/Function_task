function make_avg(numbers) {
  let sum = 0;
  for (let number of numbers){
    sum += number
  }
    const avg = sum/numbers.length
    return avg
}
const result = [45, 32, 28, 18, 45]
console.log(make_avg(result))