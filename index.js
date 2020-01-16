function mapToNegativize(array) {
  const newArray = []
  for (const element of array) {
    newArray.push(element * -1)
  }
  return newArray
}

function mapToNoChange(array) {
  const newArray = []
  for (const element of array) {
    newArray.push(element)
  }
  return newArray
}

function mapToDouble(array) {
  const newArray = []
  for (const element of array) {
    newArray.push(element * 2)
  }
  return newArray
}

function mapToSquare(array) {
  const newArray = []
  for (const element of array) {
    newArray.push(element ** 2)
  }
  return newArray
}

function reduceToTotal(array, aggregator=0) {
  for (const element of array) {
    aggregator += element
  }
  return aggregator
}

function reduceToAllTrue(array) {
  for (const element of array) {
    if (!element) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(array) {
  for (const element of array) {
    if (element) {
      return true
    }
  }
  return false
}
