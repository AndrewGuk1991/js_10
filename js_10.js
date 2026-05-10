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










