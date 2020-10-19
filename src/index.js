module.exports = function reverse (n) {
    let arr = n.split('');
    if(arr[0] === "-")arr.shift();
    if(arr[arr.length-1] === "0")arr.pop();
    arr = arr.reverse();
    return n = arr.join('')
}
