//find maximum value....
let a=100;
let b = 150;
let c = 180;

if (a > b){
    if(a > c){
        console.log('a is the biggeesst number');
    }
    else
     console.log('c is the biggeesst number');
}
else{
    if(b > c){
        console.log('b is the biggeesst number');
    }
    else
     console.log('c is the biggeesst number');
}

//find maximum value in array.....

let markes = [55,66,44,12,78,95,32,14,75,99,50,45,170,77];
let max = markes[0];
for(let i = 0; i<markes.length; i++){
    let element = markes[i];
    if(element > max){
        max = element;
    }

}
console.log('\n',"the maximun value is : " ,max);