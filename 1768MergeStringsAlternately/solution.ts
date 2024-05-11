// Problem:
// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

function mergeAlternately(word1: string, word2: string): string {
    let resultString = "";

    const x = word1.length;
    const y = word2.length;
    const z = Math.min(x, y);

    for (let i = 0; i < z; i++) {
        resultString += word1[i] + word2[i];
    }

    // Both are the same:
    if (x === y) {
        return resultString;
    }

    // First word is longer than second:
    else if (x > y) {
        return resultString + word1.slice(z);
    }

    // Second word is longer than first:
    else {
        return resultString + word2.slice(z);
    }
};
