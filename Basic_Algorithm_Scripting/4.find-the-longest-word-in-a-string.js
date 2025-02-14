// Find the Longest Word in a String 💛💚💛
function findLongestWordLength(str) {
    let word = str.split(' ');
    let wordLength = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i].length > wordLength){
            wordLength = word[i].length;
        }
    }
    return wordLength;
  }
  
let result =  findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result);