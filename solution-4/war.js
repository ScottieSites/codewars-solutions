function repeatStr (n, s) {
    let repeatedString = "";
    while (n > 0) {
      repeatedString += s;
      n--;
    }
    return repeatedString;
    
  }

  repeatStr(3, "*")
  repeatStr(5, "#")
  repeatStr(2, "ha ")