# 📝 Find Word Indexes in a String (JavaScript)

This project demonstrates how to find all starting indexes of a specific word inside a given string using **JavaScript**.  
It includes two approaches:
1. **Basic Version** (checks only the first letter – partial matching).
2. **Improved Version** (checks the full word – correct matching).

---

## 📌 Problem Statement

Write a JavaScript program to find all the starting positions (indexes) of a given word inside a bigger string.

### Example


---

## 🔎 Approach

1. Traverse the string character by character.
2. At each position, extract a substring of length equal to the word we are searching for.
3. Compare the substring with the word.
4. If they match, save the starting index in an array.
5. Return the array of indexes.

---

## 💻 Code

### 1. Basic Version (checks only the first character)

```js
const bigString = "This is a big string with the word big repeated in the big string.";
const wordToFind = "big";

let data = [];
for (let i = 0; i < bigString.length; i++) {
    if (wordToFind.startsWith(bigString[i])) {
        data.push(i);
    }
}
console.log("Partial match indexes:", data);



---

## 🔎 Approach

1. Traverse the string character by character.
2. At each position, extract a substring of length equal to the word we are searching for.
3. Compare the substring with the target word.
4. If they match, store the starting index in an array.
5. Return all such indexes.

---

## 💻 Code

### 1. ✅ Recursive Approach

```js
function findWordRecursive(wordToFind, bigStringInput) {
    let resultArray = [];
    let word = wordToFind;
    let bigString = bigStringInput;

    function getIndex(index) {
        // base case
        if (index > bigString.length - word.length) return resultArray;

        // compare substring with word
        if (bigString.slice(index, index + word.length) === word) {
            resultArray.push(index);
        }

        // recursive call
        return getIndex(index + 1);
    }

    return getIndex(0);
}

const bigString = "This is a big string with the word big repeated in the big string.";
const wordToFind = "big";

const resultRecursive = findWordRecursive(wordToFind, bigString);
console.log("Recursive Result:", resultRecursive); 
// Output: [10, 33, 49]
