// Всі функції повинні бути описані стрілочним типом!!!!
// const a = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (a > b && c > b) {
//         console.log(b)
//     } else if (a > c && c < b
//     ) {
//         console.log(c)
//     }
// }
// a(20, 51, 8)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const a1 = (x, y, z) => {
//     if (x > y && x > z) {
//         console.log(x);
//     } else if (y > x && y > z) {
//         console.log(y);
//     } else if (z > y && z > x) {
//         console.log(z);
//     }
// }
// a1(255,355,4455)

// - створити функцію яка повертає найбільше число з масиву
// let mas = [25, 45, 33, 111, 2];
// const big = (arr) => {
//     let a = arr[0];
//     for (const arrElement of arr) { //arrElement - кожний елемент масиву; arr - масив;
//         if (arrElement > a) { //arrElement - якщо елемент масиву більший ніж змінна а то: перезаписуємо її;
//             a = arrElement //перевизначаємо її;
//         }
//     }
//     return a
// }
// console.log(big(mas));

// - створити функцію яка повертає найменьше число з масиву
// let mas = [52, 65, 98, 77, 22, 566, 6869, 99, 555, 4154, 123, 25, 37, 426, 955, 85];
// const min = (masiv) => {
//     let maichislo = masiv[0];
//     for (const masivElement of masiv) {
//         if (masivElement < maichislo) {
//             maichislo = masivElement
//         }
//     }
//     return maichislo
// }
// console.log(min(mas))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let mas = [52, 65, 98, 77, 22, 566, 6, 99];
//
// const collfun = (bigmas) => {
//     let sum = 0;
//     for (const argumentbigmas of bigmas) {
//         sum = sum + argumentbigmas
//     }
//     return sum
// }
// console.log(collfun(mas))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mas = [52, 65, 98, 77, 22, 566, 6, 99];
// const goodfun = (bigmas) => {
//     let a = 0;
//     for (const bigma of bigmas) {
//         a = a + bigma
//     }
//     return a / bigmas.length
// }
// console.log(goodfun(mas))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const res = (...qwe) => {  //...-оператор котрий збирає все до купи ( в стрілочній функції потрібно використовувати його)
//     let min = qwe[0];
//     let max = qwe[0];
//     for (const arrElement of qwe) {
//         if (min > arrElement) {
//             min = arrElement;
//         }
//         if (max < arrElement) {
//             max = arrElement;
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(res(5,6,8,5,4,55,65,6))


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// const random = (max100) => {
//     let random1 = [];
//     for (let i = 0; i < 100; i++) {
//         random1.push(Math.round(Math.random() * 100))
//     }
//     return random1
// }
// console.log(random())

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// const lim = (limit,maxNum) => {
//     let a = [];
//     for (let i =0; i < limit; i++){
//         a.push(Math.round(Math.random()*maxNum))
//     }
//   return a
// }
// console.log(lim(20,50))


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let mas = [1,2,3,4,5,6,7,8,5,9];
//
// const hoh = (arr) => {
//     let a = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         a.push(arr[i])
//     }
//     return a
// }
// console.log(hoh(mas))

// let masa = [1,2,3,4,5,6,7,8,5,9];
// console.log(masa.reverse());