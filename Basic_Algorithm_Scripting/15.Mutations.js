// Mutations 💛💚💛

function mutation(arr) {
    let firstArr = arr[1].toLowerCase();
    let secondArr = arr[0].toLowerCase();
    for (let i = 0; i < firstArr.length; i++) {
        console.log(firstArr[i]);
        if (secondArr.indexOf(firstArr[i]) < 0)
            return false;
    }
    return true;
}


const result = mutation(['hello', 'hey']);;
console.log(result);