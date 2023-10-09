//sum of array element
let marks = [14,25,36,48,75,95,10,5,71,99,50,32,65,6,26,44];
let sum = 0;
for(let i = 0; i <marks.length;i++){
    sum = sum  + marks[i];
    
}
console.log("the total sum is: ", sum);


//sum of array element using function

function arraySum(number){
    let sum = 0;
    for(let i = 0; i <number.length;i++){
        sum = sum  + number[i];
    }
    return sum;
}
let mMarks = [50,50,60,88,77,40,12,35,69,85,99,41,10];
let result = arraySum(mMarks);
console.log("total sum is :" + result);