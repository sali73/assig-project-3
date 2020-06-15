// Given an integer, return an integer that is the reverse ordering of numbers.

const reverseInt = (integer) => {
    let reversed = parseFloat(integer.toString().split('').reverse().join(''))
       console.log(reversed)
   }
   
   reverseInt(15) //51
   reverseInt(981) //189
   
   //////////////////////////////
   
   // Given a string, return the character that is most commonly used in the string.
   
   const maxChar = (string) => {
       characterArray = string.split('');
       let count = 0 ;
       for(let i = 0; i < characterArray.length; i++){
           if(characterArray[i]!== characterArray[i+1]){
               count += 0;
           }else{
               count +=1;
               frequentChar = characterArray[i];
           }
       }
       console.log(frequentChar);
   }
   maxChar('abcccccccd')// c
   maxChar("apple 1231111") //1