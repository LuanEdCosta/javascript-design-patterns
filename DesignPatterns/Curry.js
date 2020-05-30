// Simple add function, nothing special here
const add = (a, b) => a + b

// Curryed add function
const curryedAdd = (a) => (b) => a + b

// Uncurryed add function
const uncurryedAdd = (a, b) => curryedAdd(a)(b)

// Partial implementation
const increment = add.bind(undefined, 5)

console.log(add(1, 1)) // === 2
console.log(curryedAdd(1)(1)) // === 2
console.log(uncurryedAdd(1, 1)) // === 2
console.log(increment(1)) // === 6
