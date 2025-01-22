// Finders Keepers 💛💚💛

// solve 1 🧡🧡🧡
function findElement(arr, func) {
    for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
        return arr[i]
      }
    }
    return undefined;
  }
  
 const result = findElement([1, 2, 3, 4], function(num){return num % 2 === 0});
 console.log(result);


 // solve 2 🧡🧡🧡
 function findElement(arr, func) {
  return arr.find(func);
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });