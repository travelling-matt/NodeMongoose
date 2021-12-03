const obj1 = {nameFirst: 'matt'}
const obj2 = {nameLast: 'burton'}
const obj3 = {...obj1, ...obj2}
const obj4 = {...obj1, ...obj2, age:'49'}

console.log (obj1)
console.log (obj2)
console.log (obj3)
console.log (obj4)