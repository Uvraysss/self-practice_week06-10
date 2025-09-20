//In class
const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'
const sad = text => text.toUpperCase() + 'T-T'
console.log(greet('Alice', shout)); //ALICE!!!
console.log(greet('Alice', sad)); //ALICET-T

const fun1 = (numbers, formatter) => formatter(numbers)
const even = (numbers) => numbers.filter((number) => number % 2 === 0)
console.log(fun1([1, 2, 3, 4, 5, 6], even)) // [2, 4, 6]

function a(){
    return "a"
}
function b(){
    return "b"
}

function x(){
    function y() {}
    const z = () => {
        const m = () => {
            function n() {}
        }
    }
}

let y = 100 //global variable
let sum = 5
sum = 2 // เลือกค่าล่าสุดในการรันโปรแกรม
function getScore(x) {
  //   let y = 10 //local variable
  //global function
  let mid = 40
  let final = 30
  function doSomething() {
    // console.log(`dosomething: ${y + sum + x + mid + final}`)
    return `dosomething: ${y + sum + x + mid + final}`
  }
  doSomething()
  return mid + final + x + y + sum
  //   return doSomething()
}
const score = getScore(1)
console.log(score)
// console.log(doSomething()) //cannot access
// console.log(x, mid, final) //cannot access

const z = 1;
function makeAdder(x) {
    console.log(x)
    // console.log(y) //y is not defined
    console.log(z)
    return function doSomething(y){
        return x + y + z
    } 
    // return doSomething //return function
    // return doSomething() //return result of function
}
const result = makeAdder(10) //return ฟังก์ชัน doSomething ที่จดจำค่า x = 10 ไว้ (closure) ซึ่งตอนนี้เป็นฟังก์ชัน ไม่ใช่ค่าจำนวน
console.log(typeof result) 
console.log(result(3)) //เรียกฟังก์ชัน result (ซึ่งคือ doSomething) โดยส่ง y = 3 ได้ผลลัพธ์เท่ากับ 14

const add5 = makeAdder(5)
const add10 = makeAdder(10)
console.log(add5(3)) // 3 + 5 + 1
console.log(add10(4)) // 4 + 10 + 1

function counter() {
    let count = 0
    function increment() {
        return ++count
    }
    function decrement() {
        return --count;
    }
    function getCount() {
        return count
    }
    return {
        addCount: increment,
        decreseCount: decrement, 
        getCountValue: getCount 
    }
}

const c = counter()

console.log(c.addCount())
console.log(c.addCount())
console.log(c.addCount())
console.log(c.decreseCount())
console.log(c.getCountValue())

function idGenerator(){
    let count = 0
    return function(){
        ++count
        return count
    }
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())

function outerFunction(a){
    return function innerFunction(b){
        return a + b
    }
}

const addFive = outerFunction(5)
console.log(addFive(3))

const addTen = outerFunction(10)
console.log(addTen(2))

//Self-Practice

/*
1.Write a function makeTransformer(transform) that takes a transformation function and returns a new function to apply it to a string.
const upperCase = makeTransformer(str => str.toUpperCase())
console.log(upperCase("hello")) // "HELLO"
const reverse = makeTransformer(str => str.split("").reverse().join(""))
console.log(reverse("hello")) // "olleh"
*/

const makeTransformer = (formatter) => (word) => formatter(word)
const upperCase = makeTransformer(str => str.toUpperCase())
const reverse = makeTransformer(str => str.split("").reverse().join(""))

console.log(upperCase("hello"))
console.log(reverse("hello")) 

/*
2.Write a function limitCalls(fn, n) that returns a new function which can only call fn up to n times.
const sayHi = () => "Hi"
const limited = limitCalls(sayHi, 2)
console.log(limited()) // "Hi"
console.log(limited()) // "Hi"
console.log(limited()) // null or "Limit reached"
*/

function limitCalls(fn, n){
    let count = 0 
    return function(...args) {
        if (count < n) {
            count++       
            return fn(...args) 
        } else {
            return null
        }
    }
}

const sayHi = () => "Hi"
const limited = limitCalls(sayHi, 2)

console.log(limited())
console.log(limited())
console.log(limited())

/*
3.Write a function createAccumulator() that returns a function which adds numbers passed to it and keeps a running total.
const acc = createAccumulator()
console.log(acc(5)) // 5
console.log(acc(3)) // 8
console.log(acc(10)) // 18
*/

function createAccumulator(){
    let sum = 0
    return function(num){
        sum += num
        return sum 
    } 
}
const acc = createAccumulator()

console.log(acc(5))
console.log(acc(3))
console.log(acc(10))

/*
4.Write a function createFilter(condition) that returns a function to filter an array based on the provided condition.
const filterEven = createFilter(n => n % 2 === 0)
console.log(filterEven([1,2,3,4,5])) // [2,4]
const filterBig = createFilter(n => n > 10)
console.log(filterBig([5,12,7,20])) // [12,20]
*/

function createFilter(condition) {
    return function(arr) {
        return arr.filter(condition)
    }
}

const filterEven = createFilter(n => n % 2 === 0)
console.log(filterEven([1,2,3,4,5]))
const filterBig = createFilter(n => n > 10)
console.log(filterBig([5,12,7,20]))

/*
5.Write a function delayLog(message, delay) that returns a function which, when called, will log the message after a delay in milliseconds.
const logHello = delayLog("Hello after 1s", 1000)
logHello() // After 1 second, prints "Hello after 1s"
 */

function delayLog(message, delay){
    return function() {
        setTimeout(() => {
            console.log(message)
        }, delay)
    }
}

const logHello = delayLog("Hello after 1s", 1000)
logHello() 
const logBye = delayLog("Goodbye after 2s", 2000)
logBye() 