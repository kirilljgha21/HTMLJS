let number = +prompt('Enter the number');

if(number >= 0){
    console.log(number ** 3);
}
else{
    console.log(number ** 2);
}


let student = +prompt('Enter Student');
let chair = +prompt('Enter chair');

if(student <= chair){
    console.log('Стульев хватает');
}
else{
    console.log('Стульев не хватает');
}

let names = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];

console.log(names[names.length - 2]);
names.shift();
names.push('Landon');
names[3] = 'Den';
names.pop();

console.log(names);