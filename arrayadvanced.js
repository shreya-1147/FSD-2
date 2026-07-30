let number=[10,20,30,40,50];
number.push(60);
console.log(number.unshift(5)); //output will be 7 because it will return the new length of the array.
number.shift();
console.log(number.shift());//shift mein sbse pehle wala data remove hoyega.
number.indexOf(30);
console.log(number.indexOf(30));
number.includes(40);
console.log(number.includes(40));
//for reverse:number.reverse();
//for sort:number.sort();
number.reverse();
console.log(number);
number.sort();
console.log(number);