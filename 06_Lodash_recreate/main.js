const _ = {

    clamp(number, lower, upper) {
      var lowerClampedValue = Math.max(number, lower);
      var clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      };
      if (start > end) {
        var temp = end;
        end = start;
        start = temp;
      }
      var isInRange = start <= number && number < end;
      return isInRange;
    },
  
    words(string) {
      var words = string.split(" ");
      return words;
    },
 
  
  };
  
  
  

  module.exports = _;