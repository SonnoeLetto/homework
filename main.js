function reverse(str) {
     if (str.length === 0) {
          return ''
     } else {
          let revStroke = ''
          return revStroke + str[str.length - 1] + reverse(str.substring(0, str.length - 1))
     }
}

const myArr = [1, 2, 3, 4, 5, 6, 7]






function binar(arr, el, left, right) {
     if (right >= left) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === el) {
               return mid
          } else if (el < arr[mid]) {
               return binar(arr, el, left, mid - 1)
          } else  {
               return binar(arr, el, mid + 1, right)
          } 
     } else {
          return -1
     }




}
console.log(binar(myArr, 4, 0, myArr.length - 1))