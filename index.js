//write your code here

const stripUpperCase = string => {
  let lowerCase = "";
  for (let i = 0; i < string.length; i++){
    if (string[i] === string[i].toLowerCase()){
      lowerCase += string[i]
    }
  } return lowerCase; 
};

console.log(stripUpperCase("Hello!"))
console.log(stripUpperCase("SevenEleven"))
console.log(stripUpperCase("Don't play with Me!"))