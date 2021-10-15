const removeFromArray = function(array, ...items) {  
    for (let i = 0; i < items.length; i++) {
        if (array.indexOf(items[i]) === -1) {
            continue;
        } else {
            array.splice(array.indexOf(items[i]),1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
