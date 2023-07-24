//---------------------------------------------------- 1. ----------------------------------------------------

// function moveZeroes(nums) {
//   nums.sort((a, b) => (a === 0) - (b === 0));
//   return nums
// }
// console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0, 0, 1]));
// console.log(moveZeroes([0]));

//---------------------------------------------------- 2. ----------------------------------------------------

// function findShort(str) {
//   const arr =  str.join(",").split(' ');
//   return arr.sort((a,b)=>{return a.length -b.length})

// }
// console.log(findShort(['Test where final word shortest see']));
// console.log(findShort(['Lets all go on holiday somewhere very cold']));
// console.log(findShort(['i want to travel the world writing code one day']));

//---------------------------------------------------- 3. ----------------------------------------------------

// function firstNonRepeatingLetter(str) {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.indexOf(char)===i
//         && str.indexOf(char, i+1) == -1
//         ) {

//             return char
//         }
//     }
//     return "non"
// }

// console.log(firstNonRepeatingLetter('string'));

//---------------------------------------------------- 4. ----------------------------------------------------

// const getCount = (str) => {
//   let regex = /[auioe]/gi;
//   const matched = str.match(regex);
//   if (matched) {
//     return matched.length;
//   } else {
//     return 0;
//   }
// };
// console.log(getCount("my pyx"));
// console.log(getCount("pear tree"));
// console.log(getCount('abracadabra'));

//---------------------------------------------------- 5. ----------------------------------------------------

function century(year) {
    let cntry = year/100
    return Math.ceil(cntry)
}
console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
