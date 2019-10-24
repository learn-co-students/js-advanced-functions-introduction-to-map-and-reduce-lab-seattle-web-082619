function mapToNegativize (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * -1);
  }
  return newArr
}

function mapToNoChange (arr) {
  const newArr = [...arr];
  return newArr;
}

function mapToDouble (arr) {
  const newArr = [];
  arr.forEach(item => newArr.push(item * 2));
  return newArr;
}

function mapToSquare (arr) {
  const newArr = [];
  arr.forEach(item => newArr.push(item ** 2))
  return newArr
}

function reduceToTotal (arr, start=0) {
  arr.forEach(item => start += item)
  return start
}

function reduceToAllTrue (arr) {
  for (const item of arr) {
    if (!item) {return false}
  }
  return true
}

function reduceToAnyTrue (arr) {
  for (const item of arr) {
    if (item) {return true}
  }
  return false
}
