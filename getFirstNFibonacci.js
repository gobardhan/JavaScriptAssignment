//Write a JavaScript program to get the first n Fibonacci numbers.

//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

const getFirstNFibonacci = (n, fn=[]) => {
  if(fn.length === 0) {
    fn.push(0);
    fn.push(1);  
    return getFirstNFibonacci(n-2, fn);
  }
  if(n === 0) return fn ;
  else {
    fn.push(fn[fn.length-1]+fn[fn.length-2]);
    return getFirstNFibonacci(n-1, fn);
  }
};
console.log(getFirstNFibonacci(10));