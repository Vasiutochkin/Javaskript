//  - створити масив з:
//     - з 5 числових значень
//     - з 5 стрічкових значень
//     - з 5 значень стрічкового, числового та булевого типу
//     - та вивести його в консоль
// let d1 = true;
// let d2 = true;
// let d3 = false;
// let d4 = false;
// let d5 = false;
// let a = [[1,2,3,4,5],["fg","fh","fk","fl","fz"],[(d1), (d2), (d3), (d5)]]
// console.log(a)


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let a = ["пустий",562, "масив"]
// console.log(a [0])

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
// ];
// document.write(`<div class="zzz">`)
// for (const user of users) {
//     document.write(`<div>${user.name}</div>`)
// }
// document.write(`</div>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
// ];
// document.write(`<div class="zzz">`)
// for (const user of users) {
//     document.write(`<div>${user.name[1]}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let blok = 0;
// while (blok < 20) {
//     console.log("20 блоків: " + blok);
//     blok++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let g =0;
// while(g<20){
//     document.write(`<div>20 блоків: ${g}</div>`);
//     g++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let v = ["один", "два", "три", "чотири", "пять"];
// for (i=0; i < v.length; i++){
//     // document.write(`<div>тут маэ бути число:</div>` +v[i]);
//     document.write(`<div>тут маэ бути число: ${v [i]} </div>`);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let a = ["12","20","30","reee","fd","32","12","36","32","36",]
// for (i=0; i < a.length; i++) {
//     console.log(a[i])
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let a = [12,"20",30,"reee","fd","32","hhhhhhh",36,32,36,]
// for (i=0; i < a.length; i++) {
//     console.log(a[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let a = [true,"20",true,"reee","fd",true,"hhhhhhh",false,32,false,]
// for (i=0; i < a.length; i++) {
//     if (typeof a[i] === `boolean`)
//     console.log(a[i])
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let a = [2,"20",58,"reee","fd",true,"hhhhhhh",false,32,false,]
// for (i=0; i < a.length; i++) {
//     if (typeof a[i] === `number`)
//         console.log(a[i])
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let a = [2,"20",58,"reee","fd",true,"hhhhhhh",false,32,false,]
// for (i=0; i < a.length; i++) {
//     if (typeof a[i] === `string`)
//         console.log(a[i])
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let a = [];
// a[0]=2;
// a[1]=6;
// a[2]="gggg";
// a[3]="koll";
// a[4]="batoon";
// a[5]=true;
// a[6]=true;
// a[7]=false;
// a[8]=523;
// a[9]="hjo"
// for (i=0; i < a.length; i++) {
//         console.log(a[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i < 10; i++){
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i < 100; i++){
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0; i < 100; i+=2){
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0; i < 100; i++){
//     if (i % 2 === 0){
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');}
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0; i < 100; i++){
//     if (i % 3 === 0){
//         console.log('поточний крок циклу : ' + i + ' ');
//         document.write('поточний крок циклу : ' + i + ' ');}
// }