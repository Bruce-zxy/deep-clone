function deepClone(data) {
    var type = Object.prototype.toString.call(data).slice(8, -1);
    var obj = null;
    if (type === 'Array') {
        obj = [];
        data.forEach(function(item) { return obj.push(deepClone(item)) });
    } else if (type === 'Object') {
        obj = {};
        Object.keys(data).forEach(function(item) { return obj[item] = deepClone(data[item]) });
    } else {
        return data;
    }
    return obj;
};

module.exports = deepClone;