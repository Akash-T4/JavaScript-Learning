// single '' string (Concatenation)
console.log('Items(' + (2 + 2) + '): $' + ((2095 * 2) + (799 * 2)) / 100);

// double "" string (Concatenation)
console.log("Shipping & Handling: $" + (499 + 499) / 100 )

// Template `` string (Interpolation)
console.log(`Total before tax: $${(5788 + 998) / 100}`)

// Template `` string (Interpolation)
console.log(`Estimated tax (10%): $${Math.round(6786 * 0.1) / 100}`)

// Template `` string (Interpolation)
console.log(
  `Order Total: $${(((2095 * 2) + (799 * 2)) / 100) + ((499 + 499) / 100) + (Math.round(6786 * 0.1) / 100)}`
);