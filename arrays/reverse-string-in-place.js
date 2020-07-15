//write a function that reverses and replaces the original array
const array = ['h','e','l','l', 'o']

function reverseInPlace(arr) {
  let placeholder
  let endCounter = arr.length -1

  for(let i = 0; i < arr.length/2; i++){
    placeholder = arr[i];
    arr[i] = arr[endCounter];
    arr[endCounter] = placeholder
    endCounter--

    console.log(`step ${i}: ${arr}`)
  }

  console.log(arr)
}

reverseInPlace(array)