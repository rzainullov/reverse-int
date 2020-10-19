module.exports = function reverse (n) {
    let arr = n.toString().split('');
    if(arr[0] === "-")arr.shift();
    if(arr[arr.length-1] === "0")arr.pop();
    arr = arr.reverse();
    return n = parseInt(arr.join(''))
}

