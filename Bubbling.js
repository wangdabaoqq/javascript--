const array = (data) => {
  // 内循环减去外循环已经循环的次数就不再进行比较
  for(let i = 0; i < data.length; i++) {
    for (let j = 0; j< data.length - 1-i; j++) {
      console.log(j, data[j], data[j + 1])
      if (data[j] > data[j + 1]) {
        const temp = data[j] // 暂存当前数据
        data[j] = data[j + 1]  // 交换数据
        data[j + 1] = temp  // 暂存的值复制给当前的下一项
        // console.log(a[j])
        // [data[j], data[j + 1]] = [data[j + 1], data[j]]
      }
    }
  }
  return data
}
console.log(array([10, 11, 9, 5,4,3,2,1]))
