let color = 'red';
let colors = ['red', 'green', 'blue'];
console.log(color);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[colors.length-1]);
console.log(colors);

//updating arrays
colors[0] = 'purble';
console.log(colors);

//arrays length 
console.log(colors.length);

// Includes
console.log(colors.includes('red'));
console.log(colors.includes('purble'));

//Unshift (adding an elemnt to the beginning of the array )
colors.unshift('black','red');
console.log(colors);

//shift (deleting and return the first elemnt  from the array )
const deletedColor = colors.shift();
console.log(deletedColor);
console.log(colors);

//Push
colors.push('crimson')
console.log(colors);

//Pop
let popedColor = colors.pop()
console.log(popedColor)
console.log(colors);

//IsArray
console.log(Array.isArray(color));
console.log(Array.isArray(colors));

//2D Array
const values = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    console.log(values [0] [1]);

// Split Method
let text = 'I like JavaScritp';
let splitResult =  text.split(' ');
console.log(splitResult);

//Join Method
let joinResult =  splitResult.join(' ');
console.log(joinResult);