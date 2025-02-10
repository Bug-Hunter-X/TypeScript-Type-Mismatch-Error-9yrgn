function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or parsable as numbers');
  }
  return numA + numB;
}

function subtractSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if(isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or parsable as numbers');
  }
  return numA - numB;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 4); // Correct

const result3 = addSafe(5, "3"); // Correct, handles string input
const result4 = subtractSafe(10, "4"); // Correct, handles string input
const result5 = addSafe("hello", 5); // throws an error
const result6 = subtractSafe(10, "world"); // throws an error