// Factorialize a Number 💛💚💛
function factorialize(num) {
    let total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

const result = factorialize(5);
console.log(result);