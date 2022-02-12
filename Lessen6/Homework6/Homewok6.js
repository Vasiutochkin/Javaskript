// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a1 = 'hello world';
// console.log(a1.length)
//
// let a2 = 'lorem ipsum';
// console.log(a2.length)
//
// let a3 = 'javascript is cool';
// console.log(a3.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a1 = 'hello world';
// let toUpperCase1 = a1.toUpperCase();
// console.log(toUpperCase1);
//
// let a2 = 'lorem ipsum';
// let toUpperCase2 = a2.toUpperCase();
// console.log(toUpperCase2);
//
// let a3 = 'javascript is cool';
// let toUpperCase3 = a3.toUpperCase();
// console.log(toUpperCase3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a1 = 'HELLO WORLD';
// let totoLowerCase1 = a1.toLowerCase();
// console.log(totoLowerCase1);
//
// let a2 = 'LOREM IPSUM';
// let totoLowerCase2 = a2.toLowerCase();
// console.log(totoLowerCase2);
//
// let a3 = 'JAVASCRIPT IS COOL';
// let totoLowerCase3 = a3.toLowerCase();
// console.log(totoLowerCase3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replaceAll(" ", ""))


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
// let string = "HTML JavaScript PHP";
// document.write(insert_dash(string))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// const err = (argument) => {
//     return argument[0].toUpperCase()+argument.slice(1)
// }
// document.write(err("repak"))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
