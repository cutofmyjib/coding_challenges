// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


//loop thru array
//inside loop, loop thru again comparing current element with the next
//if current element is equal to the next current element,
    //take it out of array


function removeDupes(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
      }
    }
  }
  return arr.length;
}

//more efficient
function removeDupes2(arr) {
  var frequency = {}
  var noDuplicates = []
  for (var i = 0; i < arr.length; i++) {
    if (!(frequency[arr[i]])) {
      frequency[arr[i]] = true
      noDuplicates.push(arr[i])
    }
  }
  return noDuplicates.length
}

// console.log(removeDupes([1,1,2,2,3,4,1]))
console.log(removeDupes2([1,1,2,2,3,4,1]))
