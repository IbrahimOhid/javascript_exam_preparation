// title case a sentence 💛💚💛

function titleCase(str) {
    let text = str.split(' ')
    for(let i = 0; i < text.length; i++){
        console.log(text[i][0].toUpperCase());;
    }
    return text;
  }
  
const result = titleCase("I'm a little tea pot");
console.log(result);