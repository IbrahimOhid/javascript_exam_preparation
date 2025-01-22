// Return Largest Numbers in Arrays 💛💚💛

function largestOfFour(arr) {
    let largestNumber = [];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        let number = arr[i][0];
        console.log(number);
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
            if(arr[i][j] > number){
                console.log(arr[i][j]);
                number = arr[i][j]
            }
        }
        largestNumber.push(number);
    }
    return largestNumber;
  }
  
 const result =  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]);
  console.log(result);