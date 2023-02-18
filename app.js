const word = prompt("Enter a word:");

const reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
document.write(`${word} is a palindrome`);
} else {
document.write(`${word} is not a palindrome`);
}
