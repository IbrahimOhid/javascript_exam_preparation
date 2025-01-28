// Slice and Splice 💛💚💛

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice();
    console.log(newArr);
    let sliceArr = newArr.slice(0, n);
    console.log(sliceArr);
    let spliceArr = newArr.splice(n,n);
    console.log(spliceArr);
    let finalArr = sliceArr.concat(arr1);
    return finalArr.concat(spliceArr)
  }
    
    
  const result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(result)