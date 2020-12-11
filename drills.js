//1. Implement an Array Class From Scratch

/*class Memory {
    constructor() {
      this.ptr = 0;
      this.ptr = memory.allocate(this.length);
    
    }
    
}
  //2. 
  function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}*/

//5. URLify a string
function urlify(str) {
    if(str === '') {
        return '';
    }
    return str.replace(' ', "%20")
}

//6. Filtering an array
function removeNum(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 5) {
  newArr.push(arr[i])
      } 
    }  return newArr
      }
  



//8. Merge Arrays
function merge(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i])
    } return arr1
  }
  
  let arr1 = [1,2,3,4,5]
  let arr2 = [6,7,8]
  
  console.log(merge(arr1, arr2))

  //9. Remove characters

  function removeChar (str) {
      for (let i = 0; i < str.length; i++) {
          console.log(str[i])
      }
  }
