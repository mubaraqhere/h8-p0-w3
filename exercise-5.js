function palindrome(kata) {
    var str2 = '';
    
    for (var j = kata.length-1; j>=0; j--){
        str2 += kata[j];
    }
    if (kata === str2){
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false