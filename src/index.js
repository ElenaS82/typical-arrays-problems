
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0 ) {
    return 0;
   }
   let arr = array.sort((a, b) => a - b);
   return arr[0];
}
exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0 ) {
    return 0; 
   }
   let arr = array.sort((a, b) => a - b);
   return arr.reverse()[0];
}

exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0 ) {
    return 0; 
   }
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
     sum = sum + array[i];
   }
    return sum / array.length;
}
