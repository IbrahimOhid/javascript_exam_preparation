// Chunky Monkey 💛💚💛

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for(let i = 0; i < arr.length; i += size){
      newArr.push(arr.slice(i, i + size));
    }
    return newArr
  }
  
const result =  chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
console.log(result);