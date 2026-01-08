function findEvenNumbers(arr) {
    let evens = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

// Example
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
