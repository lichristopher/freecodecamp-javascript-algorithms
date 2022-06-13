function sumAll(arr) {
  const smallest = Math.min(...arr);
  const largest = Math.max(...arr);
  let total = 0;
  for (let i = smallest; i <= largest; i++) {
    total += i;
  }

  return total;
}

sumAll([1, 4]);
