const sumAll = function(start, stop) {
    let sum = 0;

    if (typeof start !== "number" || typeof stop !== "number" || start < 0 || stop < 0) return "ERROR";

    let orderedParams = Array.from(arguments).sort((a,b) => a - b);

    for (let i = orderedParams[0]; i <= orderedParams[1]; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
