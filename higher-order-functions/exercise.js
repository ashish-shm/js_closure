// Challenge 1
function addTwo(num) {
    return num+2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word+"s";
}


// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function addTwo(n){;
    return n+2;
  }

function map(arr,addTwo){
    var array=[];
    for(let i=0;i<arr.length;i++){
      array.push(addTwo(arr[i]));
    }
    return array
 }

console.log(map([1, 2, 3], addTwo));

// Challenge 4

let alphabet = "";
function forEach(array, callback) {
    let index = 0;
   
    while(index < array.length) {
        callback(array[index],index, array);
        index++;
    }  
   
}

var letters = ['a', 'b', 'c', 'd'];

forEach(letters,(char) => alphabet += char);

console.log(alphabet);

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function multiplyByTwo(n){;
    return n*2;
  }
  
  
  function mapWith(arr, multiplyByTwo){
    var array=[]
    arr.forEach(el=> {
      array.push(multiplyByTwo(el))
  
    });
    return array;
}
console.log(mapWith([1,2,3,4,5],multiplyByTwo ));

//Extension 2
function reduce(array, callback, initialValue) {}

//Extension 3
function intersection(...arrays) {
    let ans;
    let arr = arrays.flat();
    ans = arr.reduce((acc, cv, index) => {
      
      if(arrays.every(el => el.includes(cv)) && !acc.includes(cv) ) {
        acc.push(cv);
      }
      return acc;
    }, []);
   return ans;
  }
  console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    let ans;
    let arr = arrays.flat();
    ans = arr.reduce((acc, cv, index) => {
      
      if(acc.indexOf(cv) == -1) {
        acc.push(cv);
      }
      return acc;
    }, []);
   return ans;
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
