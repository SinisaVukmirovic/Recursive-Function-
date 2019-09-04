// Recursive Functions

// How recursive function work?
// Invoke the SAME function with a different input, until it reaches base case(stop condition)!

// Countdown function
function countDown(num) {
    // base case
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
};

countDown(5);
console.log('================================');

// ==========================================

function sumRange(num) {
    // base case
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log('Sum range of 5 is: ', sumRange(5));
console.log('================================');

function factorial(num) {
    // base case
    if (num <= 1) return 1;
    else return num * factorial(num - 1);
}

console.log('factorial of 5 is: ', factorial(5));
console.log('================================');

// =============================================

// MPJ's definition of Recursive Function
// Recursive function is a function that calls itself, until it doesn't!

// COuntdown example using ES 6 syntax
const countdownFrom= (num) => {
    if (num === 0) return;
    console.log(num);
    countdownFrom(num - 1);
};

console.log(countdownFrom(5));
console.log('============================');

// =========================================================================
// Example from practice

// Our data
let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];

// Our goal is to create this tree structure
// {
//     animals: {
//         mammals: {
//             dogs: {
//                 chuhuahua: null,
//                 labrador: null
//             },
//             cats: {
//                 persian: null,
//                 siamese: null
//             }
//         }
//     }
// }

const makeTree = (categories, parent) => {
    let node = {};

    categories.filter(c => c.parent === parent)
              .forEach(c => 
                    node[c.id] = makeTree(categories, c.id));
    return node;
}

console.log(JSON.stringify(makeTree(categories, null, 2)));