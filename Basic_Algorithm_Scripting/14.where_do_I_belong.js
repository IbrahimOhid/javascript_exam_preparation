// Where do I Belong 💛💚💛

function getIndexToIns(arr, num) {
    let storeNum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < num){
            storeNum++;
        } 
    }
    return storeNum;
  }
  
 const result = getIndexToIns([10, 20, 30, 40, 50], 35) ;
 console.log(result);
