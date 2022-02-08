// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function f(a, b, c) {
//     if (a < b && c > a) {
//         return a;
//     } else if (a > b && c > b) {
//         return b;
//     } else if (c < b && c < a) {
//         return b;
//     }
// }
//
// console.log(f(25, 422, 4242));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function f(a, b, c) {
//     if (a > b && c < a) {
//         return a;
//     } else if (a < b && c < b) {
//         return b;
//     } else if (c > b && c > a) {
//         return b;
//     }
// }
//
// console.log(f(25, 422, 4242));

// - створити функцію яка повертає найбільше число з масиву
// let mas = [20, 33, 45, 56, 25, 26, 85, 3, 2, 1,];
//
// function nnn(zzz) {
//     let s = zzz[0];
//     for (let i = 0; i < zzz.length; i++) {
//         if (zzz[i] > s) {
//             s = zzz[i]
//         }
//     }
//     return s;
// }
//
// console.log(nnn(mas));

// // - створити функцію яка повертає найменьше число з масиву
// let mas = [20, 33, 45, 56, 25, 26, 85, 3, 2, 8,];
//
// function nnn(zzz) {
//     let s = zzz[0];
//     for (let i = 0; i < zzz.length; i++) {
//         if (zzz[i] < s) {
//             s = zzz[i]
//         }
//     }
//     return s;
// }
//
// console.log(nnn(mas));

// - створити функцію яка повертає найменьше число з масиву
// let mas = [20, 33, 45, 56, 25, 26, 85, 3, 2, 8,];

// function nnn(zzz) {
//     let s = zzz[0];
//     for (let number of zzz) {
//         if (number < s) {
//             s = number
//         }
//     }
//     return s;
// }
//
// console.log(nnn(mas));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mas = [20, 33, 45, 56, 25, 26, 85, 3, 500, 8,];
//
// function nnn(zzz) {
//     let s = 0;
//     for (let number of zzz) {
//         s = s + number
//     }
//     return s;
// }
//
// console.log(nnn(mas));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mas = [20, 33, 45, 56, 25, 26, 85, 3, 500, 8,];
//
// function nnn(zzz) {
//     let s = 0;
//     for (let number of zzz) {
//         s = s + number
//
//     }
//     return s / zzz.length;
// }
//
// console.log(nnn(mas));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function stah() {
//     let s = arguments[0]
//     let f = arguments[0]
//     for (let number of arguments) {
//         if (number > s) {
//             s = number
//         }
//         if (number < f) {
//             f = number
//         }
//     }
//     console.log('MnNum: ', f)
//     return s;
// }
//
// console.log(stah(8, 9, 0, -8, 765))

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа
// в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random(max100) {
//     let a =[]
//     for (let i = 0; i < 10; i++) {
//         a.push(Math.round(Math.random() * 100))
//     }
//     return a
// }
// console.log(random())


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// function random(limit, maxNum) {
//     let a =[]
//     for (let i = 0; i < limit; i++) {
//         a.push(Math.round(Math.random() * maxNum))
//     }
//     return a
// }
// console.log(random(10,100))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function random(arr) {
//     let a =[]
//     for (let i = arr.length; i > 0; i--) {
//         a.push(arr[i])
//     }
//     return a
// }
// console.log(random([1,2,3]))
