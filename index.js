function map(obj, cb) {
  const arr = []
  obj.forEach(item => arr.push(cb(item)))
  return arr
}

function negativize(num) {
  return num * -1
}

function mapToNegativize(arr) {
  return map(arr, negativize)
}

function mapToNoChange(arr) {
  return map(arr, (self) => self)
}

function mapToDouble(arr) {
  return map(arr, (num) => num * 2)
}

function mapToSquare(arr) {
  return map(arr, (num) => num ** 2)
}

function reduce(accumulator = 0, obj, cb) {
  obj.forEach(item => {
    accumulator = cb(accumulator, item)
  })
  return accumulator
}

function add(a, b) {
  return a + b
}

function allTrue(a, b) {
  return !!a && !!b
}

function anyTrue(a, b) {
  return !!a || !!b
}

function reduceToTotal(arr, start = 0) {
  return reduce(start, arr, add)
}

function reduceToAllTrue(arr) {
  return reduce(true, arr, allTrue)
}

function reduceToAnyTrue(arr) {
  return reduce(false, arr, anyTrue)
}