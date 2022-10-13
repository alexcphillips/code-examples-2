const isAnagram = (test, original) => {
    const testSorted = test.toLowerCase().split("").sort().join("");
    const originalSorted = original.toLowerCase().split("").sort().join("");
    return testSorted === originalSorted;
};

module.exports = isAnagram;
