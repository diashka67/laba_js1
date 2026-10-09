/* 1
function getStringLength(value) {
    if (value === null || value === undefined) {
    return 0;
    }
    return value.length;

console.log(getStringLength())
}*/


/* 2
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
console.log(isString(new String('bams')))
*/

/*  3
function concatenateStrings(value1, value2) {
    return value1 + value2
}
console.log(concatenateStrings('aa', 'bb'))
*/


/* 4
function getFirstChar(value) {
return value.charAt(0)
}
console.log(getFirstChar(''))
*/

/* 5
function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}
console.log(removeLeadingAndTrailingWhitespaces('\t\t\tHello, World!            cat          Abracadabra '))
*/


/* 6
function removeLeadingWhitespaces(value) {
    return value.trimStart();
}
console.log(removeLeadingWhitespaces('  Abracadabra'))
console.log(removeLeadingWhitespaces('cat '))
console.log(removeLeadingWhitespaces('\t\t\tHello, World! '))
*/


/* 7
function removeTrailingWhitespaces(value) {
    return value.trimEnd();
}
console.log(removeTrailingWhitespaces('  Abracadabra'))
console.log(removeTrailingWhitespaces('cat '))
console.log(removeTrailingWhitespaces('\t\t\tHello, World! '))
*/

/* 8
function repeatString(str, times) {
    if (times < 0) return '';
    return str.repeat(times);
}
console.log(repeatString('A', 5))
console.log(repeatString('cat', 3))
console.log(repeatString('', 3))
console.log(repeatString('abc', -2))
*/

/* 9
function removeFirstOccurrences(str, value) {
    return str.replace(value, '')
}

console.log(removeFirstOccurrences('To be or not to be', 'be'))
console.log(removeFirstOccurrences('I like legends', 'end'))
console.log(removeFirstOccurrences('ABABAB', 'BA'))

*/

/* 10
function removeLastOccurrences(str, value) {
    let lastIndex = str.lastIndexOf(value);

    if (lastIndex === -1) {
    return str;
    }
    return str.slice(0, lastIndex) + str.slice(lastIndex + value.length);
}
console.log(removeLastOccurrences('To be or not to be', 'be'))
console.log(removeLastOccurrences('I like legends', 'end'))
console.log(removeLastOccurrences('ABABAB', 'BA'))
*/

/* 11
function sumOfCodes(str) {
    if (!str) return 0;
    return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
console.log(sumOfCodes('My String'))
console.log(sumOfCodes('12345'))
console.log(sumOfCodes(''))
console.log(sumOfCodes())
*/

/* 12
function startsWith(str, substr) {
    return str.startsWith(substr);
}
console.log(startsWith('Hello World', 'World'))
console.log(startsWith('Hello World', 'Hello'))
*/

/* 13
function endsWith(str, substr) {
    return str.endsWith(substr);
}
console.log(endsWith('Hello World', 'World'))
console.log(endsWith('Hello World', 'Hello'))
*/

/* 14
function formatTime(minutes, seconds) {
    let mm = ('0' + minutes).slice(-2);
    let ss = ('0' + seconds).slice(-2);
    return mm + ':' + ss;
}
console.log(formatTime(5, 30))
console.log(formatTime(1, 15))
console.log(formatTime(0, 45))
console.log(formatTime(0, 0))
*/


/* 15
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('abcdef'))
console.log(reverseString(12345))
*/

/* 16
function orderAlphabetically(str) {
    return str.split('').sort().join('');
}
console.log(orderAlphabetically('webmaster'))
console.log(orderAlphabetically('textbook'))
console.log(orderAlphabetically('abc123xyz'))
*/

/*17
function containsSubstring(str, substr) {
    return str.includes(substr)
}
console.log(containsSubstring('Hello, World!', 'World'))
console.log(containsSubstring('JavaScript is Fun', 'Python'))
console.log(containsSubstring('12345', '34'))
*/


/* 18 
function countVowels(str) {
    let matches = str.match(/[aeiouyAEIOUY]/g);
    return matches ? matches.length : 0;
}
console.log(countVowels('apple'))
console.log(countVowels('banana'))
console.log(countVowels('cherry'))
console.log(countVowels('aEiOu'))
console.log(countVowels('XYZ'))
*/


/* 19
function isPalindrome(str) {
    return str.replace(/\s/gi, '').toLowerCase().split('').reverse().join('') == str.replace(/\s/gi, '').toLowerCase()

}
console.log(isPalindrome('madam'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('apple'))
console.log(isPalindrome('No lemon, no melon'))
*/

/* 20
function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}
console.log(findLongestWord('The quick brown fox'))
console.log(findLongestWord('A long and winding road'))
console.log(findLongestWord('No words here'))
*/

/* 21
function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
console.log(reverseWords('Hello World'))
console.log(reverseWords('The Quick Brown Fox'))
*/

/* 22
function invertCase(str) {
    let chars = String(str).split('');
    let result = '';

    for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i].toLowerCase()) {
        result += chars[i].toUpperCase();
    } else {
        result += chars[i].toLowerCase();
    }
    }

    return result;
}

console.log(invertCase('Hello, World!'))
console.log(invertCase('JavaScript is Fun'))
console.log(invertCase(12345))
*/


/* 23 
function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}
console.log(getStringFromTemplate('John', 'Doe'))
console.log(getStringFromTemplate('Chuck', 'Norris'))

*/

/* 24
function extractNameFromTemplate(value) {
    return value.slice(7, -1)
}

console.log(extractNameFromTemplate('Hello, John Doe!'))
console.log(extractNameFromTemplate('Hello, Chuck Norris!'))
*/


/* 25
function unbracketTag(str) {
    return str.slice(1, -1)
}

console.log(unbracketTag('<div>'))
console.log(unbracketTag('<span>'))
console.log(unbracketTag('<a>')) */

/* 26
function extractEmails(str) {
    return str.split(';')
}
console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
console.log(extractEmails('info@gmail.com'))
*/

/* 27
function encodeToRot13(str) {
    return str.replace(/[a-zA-Z]/g, (char) => {
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    return output[input.indexOf(char)];
    });
}
console.log(encodeToRot13('hello'))
console.log(encodeToRot13('Why did the chicken cross the road?'))
console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'))
*/

/* 28
function getCardId(value) {
    let card = [
    'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
    'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ];
    return card.indexOf(value);
}

console.log(getCardId('A♣'))
console.log(getCardId('2♣'))
console.log(getCardId('3♣'))
console.log(getCardId('Q♠'))
console.log(getCardId('K♠'))
*/

