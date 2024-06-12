
//const titleCased = () => {
  
//}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



//! iterate through each string in the array, capitalizing the first letter of each word
// make function using map to iterate through each string
// make function that iterates through each word and makes the first letter capital







function titleCased(){
  return tutorials.map(function(string) {
    return string.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
}

//titleCased