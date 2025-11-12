/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  return b >= a && b >= c ? b : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    (queen.x - king.x) ** 2 === (queen.y - king.y) ** 2
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (a === b || a === c || b === c) && a + b > c && a + c > b && b + c > a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const chars = ['X', 'IX', 'V', 'IV', 'I'];
  const values = [10, 9, 5, 4, 1];
  let ans = '';
  let n = num;
  for (let i = 0; i < chars.length; i += 1) {
    while (n >= values[i]) {
      n -= values[i];
      ans += chars[i];
    }
  }
  return ans;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(str) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i) ans += ' ';
    switch (str[i]) {
      case '.':
      case ',':
        ans += 'point';
        break;
      case '-':
        ans += 'minus';
        break;
      default:
        ans += digits[str[i]];
    }
  }
  return ans;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let n = num;
  while (n) {
    if (n % 10 === digit) return true;
    n = Math.trunc(n / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let right = 0;
  for (let i = 0; i < arr.length; i += 1) {
    right += arr[i];
  }
  let left = 0;
  for (let i = 0; i < arr.length; i += 1) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const ans = [];
  for (let i = 0; i < size; i += 1) {
    ans[i] = [];
  }
  let dir = 1;
  let x = 0;
  let y = 0;
  for (let i = 1; i <= size * size; i += 1) {
    ans[y][x] = i;
    if (dir === 1 && (x + 1 === size || ans[y][x + 1] !== undefined)) dir = 2;
    if (dir === 2 && (y + 1 === size || ans[y + 1][x] !== undefined)) dir = 3;
    if (dir === 3 && (x - 1 < 0 || ans[y][x - 1] !== undefined)) dir = 4;
    if (dir === 4 && (y - 1 < 0 || ans[y - 1][x] !== undefined)) dir = 1;
    if (dir === 1) x += 1;
    if (dir === 2) y += 1;
    if (dir === 3) x -= 1;
    if (dir === 4) y -= 1;
  }
  return ans;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = matrix;
  const size = m.length;
  const half = Math.trunc(size / 2);
  if (!size) return m;
  let [y, x, Y, X] = [0, 0];
  while (y < half) {
    Y = size - y - 1;
    X = size - x - 1;
    [m[y][x], m[x][Y], m[Y][X], m[X][y]] = [m[X][y], m[y][x], m[x][Y], m[Y][X]];
    if (x === Y - 1) {
      y += 1;
      x = y;
    } else {
      x += 1;
    }
  }
  return m;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(_arr) {
  const arr = _arr;
  const sink = (_i, depth) => {
    let i = _i;
    let l;
    let r;
    let t;
    while (depth) {
      l = i * 2 + 1;
      r = i * 2 + 2;
      t = i;
      if (l < depth && arr[l] - arr[t] > 0) t = l;
      if (r < depth && arr[r] - arr[t] > 0) t = r;
      if (t === i) break;
      [arr[i], arr[t], i] = [arr[t], arr[i], t];
    }
  };
  if (arr.length > 1) {
    for (let i = Math.trunc((arr.length - 2) / 2); i >= 0; i -= 1) {
      sink(i, arr.length);
    }
    for (let i = arr.length - 1; i > 0; i -= 1) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      sink(0, i);
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const half = Math.ceil(str.length / 2);
  const chars = [];
  for (let period, position, i = 0; i < str.length; i += 1) {
    position = i;
    period = 0;
    do {
      position = position % 2 ? half + Math.trunc(position / 2) : position / 2;
      period += 1;
    } while (position !== i && period < iterations);
    if (period !== iterations) {
      for (let j = iterations % period; j; j -= 1) {
        position =
          position % 2 ? half + Math.trunc(position / 2) : position / 2;
      }
    }
    chars[position] = str[i];
  }
  let ans = '';
  for (let i = 0; i < str.length; i += 1) {
    ans += chars[i];
  }
  return ans;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(num) {
  const d = [];
  const str = String(num);
  for (let i = 0; i < str.length; i += 1) d[i] = Number(str[i]);

  const pos = [];
  const cnt = [];
  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (pos[d[i]] === undefined) {
      pos[d[i]] = i;
    }

    cnt[d[i]] = (cnt[d[i]] ?? 0) + 1;

    for (let j = d[i] + 1; j < 10; j += 1) {
      if (pos[j] !== undefined) {
        cnt[d[pos[j]]] -= 1;
        [d[i], d[pos[j]]] = [d[pos[j]], d[i]];

        let p = 0;
        for (let k = i + 1; k < d.length; k += 1) {
          while (!cnt[p]) {
            p += 1;
          }
          cnt[p] -= 1;
          d[k] = p;
        }

        let ans = 0;
        for (i = 0; i < d.length; i += 1) {
          ans *= 10;
          ans += d[i];
        }
        return ans;
      }
    }
  }
  return num;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
