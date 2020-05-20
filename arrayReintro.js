// Given an array and a value Y, count and print the number of array values greater than Y.

let y = 5;

function greaterThanY(array) {
  for(let i=0; i<array.length;i++) {
    if( array[i] > y) {
      console.log(array[i])
    }
  }
}

greaterThanY([1,4,6,8,9])

// Given an array, print the max, min and average values for that array.

function minMaxAvrg(array) {
  let avrgNum = 0;
  let max = array[0];
  let min = array[0];
  for(let i=0;i<array.length;i++) {
    if(array[i] > max) {
      max = array[i]
    } else if(array[i] < min) {
      min = array[i]
    }
    avrgNum += array[i] / array.length;
  }
  return `Minimum number is ${min}, Maximum number is ${max} and average number is ${avrgNum}`
}

minMaxAvrg([4,4,5,7])

// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNeg(array) {
  for(let i=0;i<array.length;i++) {
    if(array[i] < 0) {
      array[i] = "Dojo"
    }
  }
  return array;
}

replaceNeg([1,2,-3,-5,5])

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function indicesStartEnd(array, start, end) {
  array.splice(start, end -1)
  return array
}

indicesStartEnd([20,30,40,50,60,70],2,4)
