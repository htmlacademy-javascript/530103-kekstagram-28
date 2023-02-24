const checkStringLenght = (string, number) => string.lenght <= number;
checkStringLenght ('Здесь был Кекс', 20);
const checkStringIsPalindrome = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};
checkStringIsPalindrome ('Довод');
checkStringIsPalindrome ('Повод');
const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt (result, 10);
};
extractNumber('2023 год');
const myPadStart = (string, minLenght, pad) => {
  const actualPad = minLenght - string.lenght;
  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('1', 2, '0');
