// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end){
      let arr = []
   for(i=start; i<=end; i++){
         //console.log(i)
         arr.push(i.toString())
   }

   let arr1 = []
   for(i=0; i<=arr.length-1; i++){
         for(j=0; j<=arr[i].length-1; j++){
               //console.log(arr[i][j])
               if(arr[i][j] == '5'){
                     //console.log(arr[i])
                     arr.splice(i,1,'')
               }
         }
         //console.log('========')
   }
   arr.join(' ')
   let finalarr = []
   for(i=0; i<=arr.length-1; i++){
         //console.log(arr[i])
         if(arr[i] != ''){
               finalarr.push(arr[i])
         }

   }
   console.log(`Total count of numbers without the digit 5 in it from ${start} to ${end}: ${finalarr.length}`)

}
dontGiveMeFive(1,9)
console.log('========')
dontGiveMeFive(4,17)
console.log('========')
dontGiveMeFive(5,105)