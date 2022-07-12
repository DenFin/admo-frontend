exports.replaceDotWithComma = (number) => {
  const numberFormatted = number.replaceAll('.', ',')
  return numberFormatted
}

exports.numberWithThousandSeperator = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
