function getCount(str) {
    var vowelsCount = 0;
    // make a variable for all the vowels
    // we could use an array also
    let vowels = "aeiou";
    // make the srt input all lowercase
    str = str.toLowerCase();
    
    
    // enter your majic here
    for( let i = 0; i < str.length; i++ ){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
      if( vowels.indexOf(str[i]) !== -1){
         vowelsCount++;
      }//end if
    
    }//end for loop
    
    
    return vowelsCount;
  }