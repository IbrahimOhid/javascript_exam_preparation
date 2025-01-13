function reverseString(str) {
    const text = str.split('').reverse().join('');
    return text
  }
  
 const result = reverseString("hello");
 console.log(result);