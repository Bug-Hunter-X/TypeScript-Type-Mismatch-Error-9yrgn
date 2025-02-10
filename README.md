# TypeScript Type Mismatch Example

This repository demonstrates a common type error in TypeScript where a function expecting a numeric argument receives a string.  TypeScript's type system catches this error during compilation, preventing runtime issues.

## Bug
The `bug.ts` file contains functions `add` and `subtract` that are correctly typed to accept only numbers. However, the code attempts to call these functions with string arguments, leading to a type error.

## Solution
The `bugSolution.ts` file provides a corrected version of the code.  Input validation or type guards could handle the potential for string arguments, ensuring the functions only receive numbers.