export default () => {
  self.addEventListener("message", function (input) { // eslint-disable-line no-restricted-globals
    const max = input.data;
    console.log(`got message, max: ${max}`);
    const primes = findPrimesBelow(max);
    console.log(`done calculating, num primes ${primes.length}`);
    self.postMessage({ // eslint-disable-line no-restricted-globals
      primes: primes
    });
  });

  function isPrimeNumber(number) {
    if (number == 1) return false;
    if (number == 2) return true;

    const sqrt = Math.sqrt(number);
    for (var i = 2; i <= sqrt; ++i) {
      if (number % i == 0) return false;
    }

    return true
  }

  function findPrimesBelow(number) {
    const primes = [];

    for (var i = 1; i < number; ++i) {
      if (isPrimeNumber(i)) {
        primes.push(i);
      }
    }

    return primes;
  }
}
