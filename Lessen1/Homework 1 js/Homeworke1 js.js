// // 1- Створити змінні. Присвоїти кожному з них значення:
// // 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// // 3- Переприсвоїти кожній змінній з завдання значення на довільне.
let z1 = 'hello'
z1 = "красиво"
let z2 = 'owu'
z2 = "а"
let z3 = 'com'
z3 = "может"
let z4 = 'ua'
z4 = "и"
let z5 = 1
z5 = "нет"
let z6 = -999
z6 = 666
let z7 = 123
z7 = 256
let z8 = 3.14
z8 = 3
let z9 = 2.7
z9 = 1264
let z10 = 16
z10 = -562
let z11 = true
z11 = 545
let z12 = false
z12 = 21

// //2- Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(z1,z2,z3,z4,z5,z6,z7,z8,z9,z10,z11,z12)


alert(z1)
alert(z2)
alert(z3)
alert(z4)
alert(z5)
alert(z6)
alert(z7)
alert(z8)
alert(z9)
alert(z10)
alert(z11)
alert(z12)

document.write(z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12)


// Вивести кожну змінну за допомогою: console.log , alert, document.write -    ТАК ВОНИ ВЖЕ ВИВЕДЕНІ, ЧИ Я НЕ ТАК ЗРОЗУМІВ????
z1 = "красиво"
z2 = "а"
z3 = "может"
z4 = "и"
z5 = "нет"
z6 = 666
z7 = 256
z8 = 3
z9 = 1264
z10 = -562
z11 = 545
z12 = 21
document.write(z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, z11, z12)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let fN = "Ivan"
let mN = "Avramov"
let lN = "Vasiutochkin"
let person = fN + " " + mN + " " + lN
console.log(person)

// 6- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//7- Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let age = prompt('Ведить ваш вік',);
alert(`Тобі ${age} років!`);

let age1 = prompt('Як тебе звати',);
alert(`Твоє імя ${age1}`);

let age2 = prompt('Яке твоє призвіще',);
alert(`Твоє прізвище ${age2}`);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);
let b = "100"
console.log(typeof b);
let c = true
console.log(typeof c);
// // 10- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// // В однакових виразах не використовувати однакові оператори!!!
// // 5 ? 6 -> true
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 10 ? 10 -> true
// // 10 ? 10 -> true
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 123 ? '123' -> false
// // 123 ? '123' -> true

console.log(5 !== 6)
console.log(5 === 6)
console.log(5 > 6)
console.log(5 === 6)
console.log(10 === 10)
// console.log(10 == 10)
console.log(10 < 10)
console.log(10 !== 10)
console.log(10 > 10)
console.log(123 === "123")
console.log(123 == "123")

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?
// и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");
document.write(str - a + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");




