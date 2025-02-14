// Where do I Belong 💛💚💛

// function getIndexToIns(arr, num) {
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//         if(num > arr[i]){
//             console.log(arr);
//             return arr.sort(arr[i])
//         }
        
//     }
    
//   }
  
//  const result = getIndexToIns([40, 60], 50);
//  console.log(result);

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    var lol=0;
    for(var i =0 ; i<arr.length; i++){
      if(arr[i]<num){ lol++; }
    }
    return lol;
  }
  
 const result = getIndexToIns([10, 20, 30, 40, 50], 30);
 console.log(result);
  