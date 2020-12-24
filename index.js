const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      
      let newCollection
      if (Array.isArray(collection)) { 
      for(let i = 0; i < collection.length; i ++) {
        callback(collection[i])
      }
     } else { 
      for(let i = 0; i < Object.keys(collection).length; i ++) { 
        // debugger
        callback(collection[Object.keys(collection)[i]])
     }}
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i ++) {
          // debugger
          newCollection.push(callback(collection[i]))
        }
    } else { 
      for (let i = 0; i < Object.keys(collection).length; i ++) {
        newCollection.push(callback(collection[Object.keys(collection)[i]]))
      }
    }
      return newCollection 
    },

    reduce: function(collection, callback, acc=0) {
      if (acc != 0)
      for (let i = 0; i < collection.length; i++) { 
        // debugger
        acc = callback(acc, collection[i], collection)
      } else { 
        for (let i = 1; i < collection.length; i++) { 
        // debugger
        acc = callback(acc, collection[i], collection) 
        }
        acc = acc + collection[0]
      } 
      return acc
    },

    find: function(collection, predicate) { 
      for(let i = 0; i < collection.length; i ++ ) { 
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) { 
      let newCollection = []
      for(let i = 0; i < collection.length; i ++ ) { 
        // debugger
        if (predicate(collection[i])) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function(collection) {
      let size 
      if (Array.isArray(collection)) { 
      size = collection.length
      } else { 
        size = Object.keys(collection).length
      }
      return size
    }, 

    first: function(collection, n=1) { 
      if (n>1){
        return collection.slice(0, n)
      } else { 
        return collection[0]
      }
    },

    last: function(collection, n=1) { 
      let size = collection.length
      // debugger
      if (n>1){
        return collection.slice((size - n), size)
      } else { 
        return collection[(size - 1)]
      }
    },

    compact: function(array) { 
      let newCollection = []
    for(let i = 0; i < array.length; i ++) {
      if (!!array[i]){
        newCollection.push(array[i])
      } 
    }
    return newCollection
    },

    sortBy: function(array, callback) { 
      let newCollection = [...array]
      return newCollection.sort( (a,b) => {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, array) {
        for (let value of array) {
            receiver.push(value);
        }
    },

    flatten: function(collection, shallow, newArray=[]) {
        if (!Array.isArray(collection)) return newArray.push(collection)

        if (shallow) {
            for (let val of collection)
                Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
        } else {
            for (let val of collection) {
                this.flatten(val, false, newArray)
            }
        }

        return newArray
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      const keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      const values = []
      for(let key in object) { 
        values.push(object[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
