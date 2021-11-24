function isbnValidator(isbn) {
  const formatErr = "Not in correct format.";
  //0-0000-0000-0
  //000-0-0000-0000-0
  if (isbn.length === 13) {
    const hyphenSeparated =
      isbn[1] === "-" && isbn[6] === "-" && isbn[11] === "-";
    const spaceSeparated =
      isbn[1] === " " && isbn[6] === " " && isbn[11] === " ";
    if (hyphenSeparated || spaceSeparated) {
      let sum = 0;
      let factor = 10;
      for (let i = 0; i <= 10; i++) {
        if ([1, 6].includes(i)) {
          continue;
        } else if (!isNaN(isbn[i])) {
          sum += parseInt(isbn[i]) * factor--;
        } else {
          return formatErr;
        }
      }
      if (isbn[12] === "X") {
        sum += 10;
      } else if (!isNaN(isbn[12])) {
        sum += parseInt(isbn[12]);
      } else {
        return formatErr;
      }
      return sum % 11 === 0;
    }
    return formatErr;
  } else if (isbn.length === 17) {
    //000-0-0000-0000-0
    const hyphenSeparated =
      isbn[3] === "-" &&
      isbn[5] === "-" &&
      isbn[10] === "-" &&
      isbn[15] === "-";
    const spaceSeparated =
      isbn[3] === " " &&
      isbn[5] === " " &&
      isbn[10] === " " &&
      isbn[15] === " ";
    if (hyphenSeparated || spaceSeparated) {
      let sum = 0;
      let isOne = true;
      for (let i = 0; i < isbn.length; i++) {
        if ([3, 5, 10, 15].includes(i)) {
          continue;
        } else if (!isNaN(isbn[i])) {
          sum += parseInt(isbn[i]) * (isOne ? 1 : 3);
          isOne = !isOne;
        } else {
          return formatErr;
        }
      }
      return sum % 10 === 0;
    }
    return formatErr;
  }
  return formatErr;
}
module.exports = isbnValidator;
