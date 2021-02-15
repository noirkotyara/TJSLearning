import { allowedNodeEnvironmentFlags } from "process"
import { applyMiddleware, bindActionCreators } from "redux"

let array3 = [1, 2, 3, 4, 5]

Array.prototype.multBy = function (n) {
    return this.map((elem) => {
        return elem * n
    })
    // console.log(this)
}
let board = {}
// console.log(board)
export const JsLearning = () => {
    return (
        <div>
            This is here -- {array3.multBy(4)}

        </div>
    )
}

//to do bind function
// function logPerson() {
//         console.log(this)
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}` )
// }


// const person1 = {name: 'Lena', age: 22, job: 'front'}
// const person2 = {name: 'Dianna', age: 18, job: 'back'}

// function bind(context, fn){
//     return function log(...args){
//         fn.apply(context, args)
//     }
// }

// bind(person1, logPerson)()
// bind(person2, logPerson)()



// Написать класс Dog, который наследуется от класcа Animal. 
// Класс Animal имеет метод getName (name можно передать в конструктор). 
// Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».


// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     getName(){
//         return this.name
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name)
//         this.dogname = name
//     }
//     bark(){
//         return `Dog ${this.dogname} is barking`
//     }
// }

// let object = new Dog('jess')
// console.log(object.getName())


//with prototype
// let animal = function(name){
//     this.name = name
// }
// animal.prototype.getName = function(){
//     return this.name
// }


// let dog = function (name) {
//     animal.apply(this, [name])
// }

// dog.prototype = Object.create(animal.prototype)

// dog.prototype.bark = function(){
//     return `Dog ${this.name} is barking`
// }

// let jessDog = new dog('Jess')
//     console.log(dog.prototype)


///bind

// let person = function () {
//     console.log(this)
//     console.log(`it is ${this.name} ${this.id} ${this.age} ${this.hello}`)
// }

// const person1 = { id: 1, name: 'lena', age: 22, hello: 'fgfgf' }
// const person2 = { id: 2, name: 'Ivan', age: 18 }

// function bind(fn, obj) {
//     return () => {
//         console.log(arguments)
//         fn.apply(obj, arguments)
//     }
// }

// let func1 = bind(person, person1)
// bind(person, person1)()
// console.log(bind.arguments())
// bind(person ,person2)()

//13.02.2021

// let dog = {
//     breed: 'Beagles',
//     lovesToChase: 'rabbits'
// }

// function chase() {
//     console.log(this.breed + ' loves chasing ' + this.lovesToChase )
// }

// dog.foo = chase
// dog.foo()
// chase() //error

// function Yo(name) {
//     this.name = name
//     return this;
// }

// Yo.prototype.hello = function () {
//     alert(this.name)
// }

// var yo1 = new Yo('dima')
// yo1.__proto__
// var yo2 = new Yo('dianna')
// yo2.hello()

//самовызывающайся функция

// var func = (function(){
//     // переменные не выходят отсюда
//     var city = 'Minsk'
//     var a = 3 // записівается в lexical environment
//     return function(){
//         alert(a)
//     }
// })()


// var a = {
//     name: 'Dima',
//     sayName: function () {
//         alert(this.name)
//     }
// }

// var b = {
//     name: 'Sveta'
// }

// b.sayName = a.sayName
// b.sayName() // Dima

// var c = a.sayName.bind(a)
// c()//Dima

// window.setTimeout(a.sayName, 1000) //this --> window

