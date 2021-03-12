module.exports = function reverse (n) {
    if (arguments.length > 1 || !Number.isInteger(n)) {
        return "error";
      }
      return parseInt(n.toString().split("").reverse().join(""));
}
