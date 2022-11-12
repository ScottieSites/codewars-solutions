function removeChar(str){
    let newStr = str.split('')
   return newStr.slice(1, -1).join('')
    
   };
   removeChar('eloquent');
   removeChar('country');
   removeChar('person');