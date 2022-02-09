// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function foo(a, b) {
//     return a * b;
// }
//
// console.log(foo(12, 60));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function foo(p, r) {
//     return p * Math.pow(7, 2);
// }
//
// console.log(foo(3.14, 7))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(r, h) {
//
//     return 2 * 3.14 * r * (h + r);
// }
//
// console.log(cylinder(2, 20))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let chisla = [5, 2, 2, 5, 652, 9, 65, 63, 5, 41, 23, 65,];
//
// function off(gg) {
//     for (let i = 0; i < gg.length; i++) {
//         console.log(gg[i])
//     }
// }
//
// off(chisla)
//
// let vv = [52, 52, 63, 47, 64, 98, "gffg", "gff"];
// let bb = ["gf", 52, 69, 1, 2, 3, 6, 4]
//
// function kll(pp) {
//     for (let ppElement of pp) {
//         console.log(ppElement)
//     }
// }
//
// kll(vv)
// kll(bb)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function arg(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// arg("hello")
// arg('tach')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function argument(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// argument("korona")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function argChi(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// argChi("hello my frend", 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [5,6,4,"fdf","lomik",true,451,52,52,5];
// function spis(zag) {
//     document.write(`<ol></`)
//     for (let i = 0; i < zag.length; i++){
//         document.write(`<li>${zag[i]}</li>`)
//     }
//     document.write(`</ol>`)
//
// }
// spis(mas)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
