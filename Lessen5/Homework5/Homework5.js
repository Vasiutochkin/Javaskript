// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
// const s = (a, b) => a + b;
// console.log(s(5, 10));

// - створити функцію яка обчислює та повертає площу кола
// const off = (p, r) => {
//     return p * Math.pow(r, 2)
// }
// console.log(off(3.14, 10));

// - створити функцію яка обчислює та повертає площу циліндру
// const foo = (a, b) => {
//     return 2 * 3.14 * a * (b + a);
// }
// console.log(foo(2, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [5, 56, 45, 8, 6, 5, 2, 3, 59];
//
// const itra = (rar) => {
//     for (const rarElement of rar) {
//         console.log(rarElement)
//     }
// }
// itra(mas)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const par = (argum) => {
//     document.write(`<p>${argum}</p>`)
//
// }
// par("cau")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const ulLi = (text) => {
// document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
// document.write(`</ul>`)
// }
// ulLi("heloov")

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const foo = (text, namber) => {
//     document.write(`<ul>`);
//     {
//         for (let i = 0; i < namber; i++) {
//             document.write(`<li>${text}</li>`)
//         }
//     }
//     document.write(`</ul>`);
// }
// foo("hello", 5);
// foo("vol", 35)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = ["рука", 59, true, false, 52, "Ivan",52414,"dol"];

// const list = (arr) => {
//     document.write(`<ol>`)
//     {
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`)
//         }
//     }
//     document.write(`</ol>`)
// }
// list(mas)

// let mas = ["рука", 59, true, false, 52, "Ivan", 52414, "dol"];
// const list = (arr) => {
//     document.write(`<ol>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// list(mas)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
const objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(newArray);

