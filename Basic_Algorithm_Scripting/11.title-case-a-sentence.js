// title case a sentence 💛💚💛

function titleCase(str) {
  let textStr = str.split(' ');
  for(let i = 0; i < textStr.length; i++){
    textStr[i] = textStr[i].toLowerCase().split('');
    textStr[i][0] = textStr[i][0].toUpperCase();
    textStr[i] = textStr[i].join('');
  }
  return textStr.join(' ')
}
 
const result = titleCase("I'm a little tea pot");
console.log(result);