// Way 1
module.exports = {
    sum: (a, b) => {
        return a + b;
    },
    mul: (a, b) => {
        return a * b;
    },
    g: 9.8,
    pi: 3.14,
};

// Way 2
module.exports.sum = (a, b) => {
    return a + b;
};
module.exports.mul = (a, b) => {
    return a * b;
};
module.exports.g = 9.8;
module.exports.pi = 3.14;
