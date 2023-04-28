//Function
function printEvenNumbers(){
    for (let i = 1 ; i <=20; i++){
            if(i % 2 != 0){
            continue;
            }
            console.log(i);
    }
}

//Function Calling
console.log('***');
printEvenNumbers();


//Function with a Parameter
function printEvenNumbersWithP(number){
    for (let i = 1 ; i <=number; i++){
            if(i % 2 != 0){
            continue;
            }
            console.log(i);
    }
}
console.log('***');
printEvenNumbersWithP(10);

//Function with multipal Parameters
function printEvenNumbersWithMP(counter ,number){
    for (counter ; counter <=number; counter++){
            if(counter% 2 != 0){
            continue;
            }
            console.log(counter);
    }
}
console.log('***');
printEvenNumbersWithMP(5,10);

//Function with return statment
function addNum(counter ,number){
    let sum =0;
    for (counter ; counter <=number; counter++){
        sum+=counter;
    }
    return sum;
}

let result = addNum(1,5);
console.log('***');
console.log(result);
console.log('***');
console.log(addNum(1,10)- addNum(1,5));
console.log('***');
printEvenNumbersWithP(addNum(1,5));

console.log('***');
function leaveFunction(){
    console.log('leave Function');
    return;
    console.log('left yet?!!');
}

leaveFunction();

function NumDetector(Num){
    if(Num > 0)
        return(Num + ' is positive');
    else if(Num < 0)
    return(Num + ' is nigative'); 
    else
    return(Num + ' is zero');   
}

console.log('***');
console.log(NumDetector(-1));
