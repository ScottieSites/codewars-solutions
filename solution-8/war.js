class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args)
    
    return min
  }
}

let sif = new SmallestIntegerFinder()
sif.findSmallestInt([78,56,232,12,8])
sif.findSmallestInt([78,56,232,12,18])
sif.findSmallestInt([78,56,232,412,228])