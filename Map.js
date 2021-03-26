let arr1 = [{
    name: 'lv',
    id: 1
  },
  {
    name: 'tao',
    id: 2
  },
  {
    name: 'gao',
    id: 3
  }
]

let arr2 = [{
    age: 1,
    id: 1
  },
  {
    age: 11,
    id: 5
  },
  {
    age: 111,
    id: 6
  }
]

let map = new Map()
arr1.forEach(item => {
  map.set(item.id,item)
})
arr2.forEach(item => {
  if(map.has(item.id)){
    Object.assign(item,map.get(item.id))
  }
})
console.log(arr2);