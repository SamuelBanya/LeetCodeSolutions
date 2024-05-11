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
