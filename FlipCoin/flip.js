function randomNumber(n) {
  if (n <= 0 || n >= 1000000) {
    throw "Cannot do this"; 
  }

  let random = 0;
  for (i = 1; i < n; i++) {
    if (!flip()) { continue; }
    random++;
  }
  return random;
}

function flip() {
  return Math.random() >= 0.5;
}

// Tests
console.log(randomNumber(500));
console.log(randomNumber(1));
console.log(randomNumber(500));
console.log(randomNumber(1000001));