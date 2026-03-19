const a = true;
const b = false;

if (a) {
  console.log('TRUE');
} else {
  console.log('FALSE');
}

if (b) {
  console.log('FALSE');
} else {
  console.log('TRUE');
}

const age = 18;

if (age >= 18) {
  console.log('You can Vote');
} else if (age >= 17) {
  console.log('1 more year to Vote');
} else {
  console.log('You cannot Vote');
}

/* Order of Priority 
1. Bracket;
2. Multiplication and Division - same priority (starts from left to right);
3. Addition and Substraction - same priority (starts from left to right);
4. Conditional Operator - ( > < >= <= === !=== == !=) == -> checks only value, === checks value and type;
5. Logical Operator - (&&, ||, !);
*/