//removed duplicate value.....

let number = [12,52,63,46,42,12,3,4,8,9,59,62,12,3,4,];
let number1 = [];  //empty array..

for (let i = 0; i< number.length; i++){
    let element = number[i];
    let uniqueNum = number1.indexOf(element);
    if(uniqueNum == -1){
        number1.push(element);
    }
}
console.log(number1);