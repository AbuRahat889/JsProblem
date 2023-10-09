//1st type of swap
//take input
let a = 3;
let b = 5;
console.log('after swap a =',a ,' ' ,'b =',b);

//swap
let temp = a;
a = b;
b = a;
console.log('befor swap a =',a ," " , 'b =',b );

console.log('-------------------------------------------');
//2nd type of swap
//take input

let x = 5;
let y = 7;
console.log('after swap x = ',x , " ", 'y = ',y);

//swap
x = x + y;
y = x - y;
x = x - y;

console.log('befor swap x = ',x , " ", 'y = ',y);

console.log('-------------------------------------------');

//3rd type of swap
//take input

let p = 10;
let q = 20;
console.log('after swap p = ',p , " ", 'q = ',q);
//swap
[p , q] = [q , p];
console.log('befor swap p = ',p , " ", 'q = ',q);
