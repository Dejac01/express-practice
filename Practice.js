const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);
});

 // the flowers array has three elements, the callback function will be called three times
//the forEach method calls over the flowers array, which includes 3 flowers
// for each element, it calls the anonymous callback function, passing in the current element (flower) and its index position (idx).

//Synchronous code is when a line of code completely finishes executing before the next line of code runs.

//an asynchronous function call continues to run before the async function finishes.

// 5 callback functions


// function 1
function logMessage(message) {
  console.log(message);
}

logMessage('Hello, world!');

// function 2
function doSomething(callback) {
  
  setTimeout(function() {
    console.log('complete');
    
    callback();
  }, 200);
}


function callbackFunction() {
  console.log('Callback function complete');
}

doSomething(callbackFunction);

// function 3
var callback = function() {
    console.log("Im finished!");
}

setTimeout(callback, 300);

//Function 4
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
}

useCallback(callback);

//Function 5 
const arr = [1, 2, 3, 4, 5];
let total = 0;
for(let i=0; i<arr.length; i++) {
  total += arr[i];
}
console.log(total); 






// What is Implicit Return? 
// A function is returned values without using the return keyword, 
// A JavaScript callback is a function which is to be executed after another function has finished execution. 




