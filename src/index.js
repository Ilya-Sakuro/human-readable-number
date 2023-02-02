module.exports = function toReadable(num) {
   if (num === 0) return "zero";
   const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
   ];
   const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
   ];
   if (num < 20) return ones[num];
   if (num < 100) return tens[Math.floor(num / 10)] + " " + ones[num % 10];
   if (num < 1000) {
      let result = ones[Math.floor(num / 100)] + " hundred";
      let remainder = num % 100;
      if (remainder) result += " " + toReadable(remainder);
      return result;
   }
   return "invalid";

}