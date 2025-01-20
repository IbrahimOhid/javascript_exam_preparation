// Repeat a String Repeat a String 💛💚💛

function repeatStringNumTimes(str, num) {
    let strRepeat = '';
    for(let i = 0; i < num; i++){
        strRepeat += str;
    };
    return strRepeat;
  }
  
 const result=  repeatStringNumTimes('abc', 3);
 console.log(result);