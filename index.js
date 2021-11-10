//write your code here

const stripUpperCase = string => {
  let lowerCase = "";
  for (let i of string){
     lowerCase = i === i.toLowerCase() ? lowerCase += i : lowerCase ; 
    } return lowerCase; 
};

console.log(stripUpperCase("Hello!"))
console.log(stripUpperCase("SevenEleven"))
console.log(stripUpperCase("Don't play with Me!"))