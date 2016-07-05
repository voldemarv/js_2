
var n = Number(prompt('Enter number of Fibonacci numeric'));

function fibonacci(n) {
  var num;

  if (n >= 2) {
    num = fibonacci(n - 1) + fibonacci(n - 2);
  } else {
    num = n;
  }

  return num;
}

alert(fibonacci(n));