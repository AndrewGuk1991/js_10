// console.log(this)

// 'use strict';

// const a = () => {
//     console.log(this)
// }
//
// a()
//
// function foo() {
//     console.log(this)
// }
//
// foo()

// const user = {
//     firstName: "Dima",
//     showName: () => {
//         console.log(this.firstName)
//     }
// }

// const user = {
//     firstName: "Dima",
//     showName () {
//         console.log(this.firstName)
//     }
// }
//
// user.showName()

// const user = {
//     firstName: "Dima",
//     showName () {
//         const a = () => {
//             console.log(this.firstName)
//         }
//         a()
//     }
// }
//
// user.showName()


// const user = {
//     firstName: "Dima",
//     showName: () => {
//
//         const a = () => {
//             console.log(this)
//         }
//         a()
//     }
// }
//
// user.showName()

// function fff() {
//     // this === window;
//     const user = {
//         firstName: "John",
//         showName () {
//             console.log(this.firstName)
//         }
//     }
//     return user
// }
//
// const obj = fff()
// obj.showName()

// function fff() {
//     // this === window;
//     const user = {
//         firstName: "John",
//         showName: () => {
//             console.log(this.firstName)
//         }
//     }
//     return user
// }
//
// const obj = fff()
// obj.showName()

// function fff() {
//     // this === window;
//     const user = {
//         firstName: "John",
//         showName: () => {
//             // this === window
//             const a = function () {
//
//                 console.log(this.firstName)
//             }
//             a()
//         }
//     }
//     return user
// }
//
// const obj = fff()
// obj.showName()
//
//
// const startEngine = () => {
//     console.log(`start ${this.brand}`)
// }

// function startEngine  () {
//     console.log(`start ${this.brand}`)
// }
//
// const car1 = {
//     brand: 'bmw'
// }
//
// const car2 = {
//     brand: 'opel'
// }
//
//
// car1.f = startEngine
// car2.f = startEngine
//
// car1.f()
// car2.f()


// let car3 = {
//     color: 'red',
//     showColor() {
//         (
//             () => {
//                 console.log(this.color)
//             }
//         )()
//     }
// }
//
// car3.showColor()

// let car4 = {
//     color: 'red',
//     showColor() {
//         console.log(this.color)
//     }
// }
//
// let foo = car4.showColor
// foo()
//
// car4.showColor()


// const car1 = {
//     brand: 'opel',
//     speed: 150,
//     startEngine(a, b) {
//         console.log(a, b)
//         console.log(`start ${this.brand}`);
//     }
// }

// car1.startEngine()

// const car2 = {
//     brand: 'lexus',
//     speed: 250,
// }

// car1.startEngine.call(car2, 2, 2)
// car1.startEngine.apply(car2, [2, 2])

// const res = car1.startEngine()
// console.log(res)

// car1.startEngine.apply(car2)

// const a = () => {
//     console.log(this)
// }
//
// a()

// 'use strict'

// const user = {
//     firstName: "John",
//     showName() {
//         const a = () => {
//             console.log(this.firstName)
//         }
//         a()
//     }
// }
//
// user.showName()

// call, apply, bind

const car1 = {
    brand: 'opel',
    speed: 200,
    startEngine(a,b) {
        console.log(a, b)
        console.log(`start ${this.brand}`)
    }
}

const car2 = {
    brand: 'ford',
    speed: 250,
}

car1.startEngine.call(car2, 1, 2)
car1.startEngine.apply(car2, [2, 3])









