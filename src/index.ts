/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function compareTriplets(a: number[], b: number[]): number[] {
  const longitud = a.length 
      let aPoints = 0
      let bPoints = 0
      for (let index = 0 ; index < longitud ; index++){
          if(a[index] > b[index]){
              aPoints++
          }
          if(a[index] < b[index]){
              bPoints++;    
          }
      }
      
      return [aPoints,bPoints];
  }

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray1 = [5, 6, 7];
  const testArray2 = [3, 6, 10];
  const result = compareTriplets(testArray1,testArray2);
  console.log('Result: ', result);
}

main();
