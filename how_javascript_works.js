// Memory Heap
const a = 1;
const b = 10;
const c = 100;

// Call stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 0)
console.log('2');
console.log('3');  

console.log('2');
callback()
//Call Stack 

setTimeout(), 2000
//Web API

callback()
// Callback Queue


// Event Loop
Element.addEventListerner('click', () => {
    console.log('click')  
})

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

console.log('4')
two()
one()
// Call Stack

//Recursion
function foo() {
    foo()
}

foo()

