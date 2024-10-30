function reverseArray(arr) {
    // const reversed = [];
    // for (let i=arr.length- 1; i>=0; i--) {
    //     reversed.push(arr[i]);
    // }
//     return reversed;
return arr.slice().reverse()

// return [...arr].reverse()
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]
