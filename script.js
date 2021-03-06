'use strict';

// 8 (Bonus)
function sort(string) {
    let array = [];
    let result = ''
    for(let i=0;i<string.length;i++) {
      array.push(string[i])
    }
    let str = ''
    for(let i=0;i<array.length;i++) {
      for(let j=0;j<array.length - 1;j++) {
        if (array[j] > array[j+1]) {
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    for(let i=0;i<array.length;i++) {
      result += array[i]
    }
    return result;
  }
  
// 8
function pyramid(rows) {
    for (let row = 0; row < rows; row++) {
      var str = '';
      for (let space = 1; space < rows-row; space++) {
        str += ' ';
      }
      for (let star = 1; star <= (2*row+1); star++) {
        str += '*';
      }
      console.log(str);
    }
}

// 7
function asterix(q) {
    for(let i = 1;i<=q;i++) {
      let str = ""
      for(let j=1;j<=i;j++) {
        str += '*'
      }
      str += '\n'
      console.log(str)
    }
  }

// 6
function exchangeCoin(number) {
    if (typeof number !== 'number') return 'Error, harus number'
    let exchange = '';
    while (number > 0) {
        if (number - 1000 >= 0) {
            exchange += '1000, ';
            number -= 1000;
        } else if (number - 500 >= 0) {
            exchange += '500, ';
            number -= 500;
        } else if (number - 200 >= 0) {
            exchange += '200, ';
            number -= 200;
        } else if (number - 100 >= 0) {
            exchange += '100, ';
            number -= 100;
        } else if (number - 50 >= 0) {
            exchange += '50, ';
            number -= 50;
        } else if (number - 20 >= 0) {
            exchange += '20, ';
            number -= 20;
        } else if (number - 10 >= 0) {
            exchange += '10, ';
            number -= 10;
        } else if (number - 5 >= 0) {
            exchange += '5, ';
            number -= 5;
        } else if (number - 1 >= 0) {
            exchange += '1, ';
            number -= 1
        }
    }
    return exchange;
}

// exchangeCoin(1752)

// 5
function palindrome(word) {
    if (word.length > 2 && word === reverseWord(word)) {
        return true;
    }
    return false;
}

console.log(palindrome('hh'))

// 4
function reverseWord(word) {
    if (typeof word !== 'string') {
        return 'Error, tipe data bukan string'
    } else {
        let kebalikan = ''
        for (let i=word.length - 1; i >= 0; i--) {
            kebalikan += word[i];
        }
        return kebalikan;
    }
}

// console.log(reverseWord(''));
// 3
function countVowelAndConsonant(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string'
    } else {
        let kata = word.toLowerCase()
        let consonant = 0;
        let vowel = 0;
        for(let i=0;i<kata.length;i++) {
            if (kata[i] === 'a' || kata[i] === 'i' || kata[i] === 'u' || kata[i] === 'e' || kata[i] === 'o') {
                vowel++
            } else if (kata[i] !== ' '){
                consonant++
            }
        }
        return `Jumlah vokal: ${vowel}, Jumlah consonant: ${consonant}`
    }
}
// console.log(countVowelAndConsonant('ghabriel')) 

// 2
function count(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } else if(word === '') {
        return '';
    } else {
        let counter = 1;
        for (let i=0;i<word.length;i++) {
            if (word[i] === ' ' && word[i+1] !== ' ') {
                counter++;
            }
        }
        if (word === '') return ''
        else return counter;
    }
}
// console.log(count('ihsan alim'))


// 1
function even(word) {
    if (typeof word !== 'string') {
        return 'Error, input bukan string';
    } else {
        let genap = '';
        for(let i = 1;i<word.length;i+=2) {
            genap += word[i];
        }
        return genap;
    }
  }