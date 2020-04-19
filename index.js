function replaceNumber (maxNumber = 100) {
  let rangeOfNumber = [...Array(maxNumber).keys()].map(n => n + 1)
  let output = []
  rangeOfNumber.forEach(number => {
    let input = ''
    if (number % 2 === 0) {
      input = 'yu'
    }
    if (number % 3 === 0) {
      input += input ? '-gi' : 'gi'
    }
    if (number % 5 === 0) {
      input += input ? '-oh' : 'oh'
    }
    if (!input) {
      input = number
    }
    output.push(input)
  })
  return output
}
replaceNumber(100)
replaceNumber(150)
