function convertToNewRoman(n) {}

module.exports = convertToNewRoman;

/* Roman Numerals Helper */
/* I	V	 X	 L	 C	 D	  M
 * 1	5	10	50	100	500	1000 */

const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        // Loop on index.
        for (var i in map) {
          
            while (num >= map[i]) {
              console.log("map",map[i]);
                str += i;
              num -= map[i];
              console.log("num",num);
            }
        }
        return str;
    }
    
    static fromRoman(str) {
      console.log("match", str.match(/CM|CD|XC|XL|IX|IV|\w/g));
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}
console.log(RomanNumerals.fromRoman("MMMCMXCIX"));
//console.log(RomanNumerals.toRoman(3999));
/* 
486 => CDLXXXVI
3999 => MMMCMXCIX
666 => DCLXVI
465 => CDLXV
  */
