function defaultToString (item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof iteem === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}
class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
  toString () {
    return `[#${this.key}: ${this.value}]`
  }
  keyValues () {
    const valuesPairs = []
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuesPairs.push(this.table)
      }
    }
    return valuesPairs
  }
  keys () {
    return this.keyValues().map(value => value.key)
  }
  values () {
    return this.keyValues().map(value => value.value)
  }
  forEach (callback) {
    const valuePairs = this.keyValues()
    for (let index = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[index].key, valuePairs[index].value)
      if (result === false) {
        break
      }
    }
  }
  size () {
    return this.keyValues().length
  }
  isEmpty () {
    return this.size() === 0
  }
  clear () {
    this.table = {}
  }
  toString () {
    if (!this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objstring = `${valuePairs[0].toString()}`
    for (let index = 1; index < valuePairs.length; index++) {
      objstring = `${objstring},${valuePairs[i].toString()}`
    }
    return objstring
  }
}
class Dictionary {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  hasKey () {
    return this.table[this.toStrFn(key)] !== null
  }
  set (key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove (key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  get(key) {
    // 访问两次this.tableKey => 消耗更多
    // if (this.hasKey(key)){
    //   return this.table[this.toStrFn(key)]
    // }
    // 访问一次this.tableKey => 消耗更少
    // return undefined
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value
  }
}