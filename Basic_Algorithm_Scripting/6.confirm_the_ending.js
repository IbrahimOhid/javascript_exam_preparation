// Confirm the Ending 💛💚💛

 // solve 1 🧡🧡🧡
 function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

const result = confirmEnding('Bastian', 'n');
console.log(result);

 // solve 2 🧡🧡🧡
function confirmEnding(str, target) {
    let targetText = target.length;
    let finalText = str.slice(-targetText);
    if(finalText === target){
      return true
    }
    return false;
  }
  
 const result2 = confirmEnding('Bastian', 'n');
 console.log(result2);