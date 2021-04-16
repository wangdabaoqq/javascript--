
class Set {
  constructor () {
    this.items = {}
    this.length = 0
  }
  has (element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      this.length++
      return true;
    }
    return false;
  }
  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      this.length--;
      return true
    }
    return false
  }
  clear () {
   for (var key in this.items) {
     this.delete(key)
   }
  }
  size () {
    let count = 0
    for (let key in this.items) {
      if (this.has(key)) {
        count++
      }
    }
    return count
  }
  values () {
    let value = []
    for (let val in this.items) {
      if (this.has(val)) {
        value.push(val)
      }
    }
    return value
  }
  union (otherSet) {
     const unionSet = new Set()
     let values = this.values()
     for (let i = 0; i < values.length; i++) {
       unionSet.add(values[i])
     }
    values = otherSet.values()
    for(let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  intersection (otherSet) {
    const intersectionSet = new Set(); // {1}
    const values = this.values()
    const othervalues = otherSet.values()
    let big = values
    let small = othervalues
    if (othervalues.length > values.length) {
      big = othervalues
      small = values
    }
    small.forEach(el => {
       if (big.includes(el)){
           intersectionSet.add(el)
         }
    })
//     const intersectionSet = new Set()
//     const values = this.values()
//     for(let i = 0; i < values.length; i++) {
//       if (otherSet.has(values[i])) {
// //         console.log(values[i])
//         intersectionSet.add(values[i])
//       }
//     }
    return intersectionSet
  }
  difference (otherSet) {
    const differenceSet = new Set()
    this.values().forEach(el => {
       if (!otherSet.has(el)) {
         differenceSet.add(el)
       }
    })
    return differenceSet
  }
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let istrue = true
    this.values().every(el => {
      if (!otherSet.has(el)) {
        istrue = false
        return false
      }
      return true
    })
    return istrue
  }
}


// let setItem = new Set()

// const setA = new Set(); 
// setA.add(1);
// setA.add(2); 
// setA.add(3); 
// const setB = new Set(); 
// setB.add(2); setB.add(3); 
// setB.add(4); 
                      const setA = new Set(); setA.add(1); setA.add(2); 
                  const setB = new Set(); setB.add(1); setB.add(2); setB.add(3);
                      const setC = new Set(); setC.add(2); setC.add(3); setC.add(4); 
    console.log(setA.isSubsetOf(setB));
    console.log(setA.isSubsetOf(setC)); 

// const intersectionAB = setA.difference(setB); 
// console.log(intersectionAB.values()); 
// setItem.add(1)
// setItem.add(2)
// // setItem.clear()
// console.log(setItem.values())
// // console.log







