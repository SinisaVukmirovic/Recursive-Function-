// Definition of Recursion (recursive functions)
// "A recursive function is a function that calls itself during its execution."
// This enables the function to repeat itself several times, outputting the result and the end of each iteration.

/////////////////////////////////////////////////

// Count Down Example

// using "normal" function using for loop
function countDown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log('Hooraay!');
}
countDown(5);

// using Recursive Function
function countDownRecursive(n) {
    // brakeout statement (guard clause - equivalent of a while condition in a for loop)
    if (n <= 0) {
        console.log('Hooraay!');
        return;
    }
    console.log(n);
    countDownRecursive(n - 1);
}
countDownRecursive(5);

///////////////////////////////////////////////////

// Sum Range Example

// using "normal" function with a for loop
function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total;
}
console.log(sumRange(5));

// using recursive function
function sumRangeRecursive(n, total = 0) {
    // brakeout statement (guard clause - equivalent of a while condition in a for loop)
    if (n <= 0) {
        return total;
    }
    return sumRangeRecursive(n - 1, total + n);
}
console.log(sumRangeRecursive(5));

//////////////////////////////////////////////////////

// Example where it is almost imposible to salve without using recursion function

// Print Children 

const familyTree = {
    name: 'Jonh',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {
                    name: 'Kyle',
                    children: []
                },
                {
                    name: 'Sophia',
                    children: []
                }
            ]
        }
    ]
}

// recursive function
function printChildrenRecursive(tree) {
    // guard clause
    if (tree.children.length === 0) {
        return;
    }
    tree.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}
printChildrenRecursive(familyTree);