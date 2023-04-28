//if statment
let age = 18;
if(age > 12) {
console.log('Sorry, you are not allowed to enter the kids zone,you can go to the adults zone.');
}


//else statment
age = 11;
if(age > 12) {
    console.log('Sorry, you are not allowed to enter the kids zone,you can go to the adults zone.');
 }else{
    console.log('Have fun.');
 }

 //else if statment
 age = 4;
if(age > 12) {
    console.log('Sorry, you are not allowed to enter the kids zone,you can go to the adults zone.');
 } else if( age < 6){
    console.log('Sorry, you are not old enough to enter the kids zone.');
 } else{
    console.log('Have fun.');
 }

 //Switch statment and  Default Case
 const colors = ['black', 'purble', 'yellow'];
 let colorNumber = 4;
switch(colorNumber) {
    case 1:
        console.log(colors [0]);
        break;
    case 2:
        console.log(colors [1]);
        break;
    case 3:
        console.log(colors [2]);
        break;
    case 4:
    case 5:
        console.log('crimson');
        break;       
    default:
        console.log('White')
        break;
}