//For loop
for(let i = 1; i <= 8; i++) {
    console.log(i); 
    }


//Decrement For
for(let i = 8; i > 0; i--) {
    console.log(i); 
    } 
    
//for loop with arrays    
const colors = ['black', 'purble', 'yellow','blue','red','green'];
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
    }


//For of
for(let color of colors){
    console.log('The color is: ' + color); 
} 

const text = 'Welcome to JavaScript';
for(let char of text) {
console.log(char) ;
}

//while loop
let i = 0;
while(i < colors.length){
    console.log('The color is: ' + colors[i]);
    i++ ;
}

//do while
let j = 0;
do{

    console.log('The color is: ' + colors[j]);
    j++ ;
}while(j <colors.length);

// while vs do while 
const message = 'Welcome to JavaScript';
let x   = 5;
while(x < 5) {
    console.log(message + ' using while loop');
    x++;
}

console.log('***');

do{

    console.log(message + ' using do-while loop');
    x++;
}while(x <5);

//break
for (let i = 1 ; i <=20; i++){
    if(i / 10 == 1){
        break;
    }
    console.log(i);
}
console.log('***');
//Continue
for (let i = 1 ; i <=20; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i);
}
