let char = 'Hello! I am rahat. I am a    student';
let count = 0;

for(let i = 0; i<char.length; i++){
    let letter = char[i];
    if(letter == " " && char[i-1] != " "){
        count++;
    }
    
}
count++;
console.log(count);