// // - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
//
// const a = (arr) =>{
//     return arr
//         .replaceAll(".."," ")
//         .replaceAll("---", " ")
//         .replaceAll("__"," ")
//
// };
// console.log(a(n1));
// console.log(a(n2));
// console.log(a(n3));

//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const a = (length, nam) => {
//     let ff = [];
//     for (let i = 0; i < length; i++) {
//         ff.push(Math.round(Math.random() * nam))
//     }
//     return ff;
// }
// let a1 = a(38, 50);
// console.log(a1);
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// // Відсортувати його за допомоги sort
//
// // 1 варіант використовуючи попередню функцію
// a1.sort((a, b) => a - b);
// console.log(a1)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// const a = (length, nam) => {
//     let ff = [];
//     for (let i = 0; i < length; i++) {
//         ff.push(Math.round(Math.random() * nam))
//     }
//     return ff.filter(value => value % 2 ===0);
// }
// let a1 = a(38, 50);
// console.log(a1);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let a = (length, num) => {
//     let b = [];
//     for (let i = 0; i < length; i++) {
//         b.push(Math.floor(Math.random() * num))
//     } return b.map(value =>value.toString() )
// }
// console.log(a(80,800))

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до
// меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]



let sortNums = (arr, direction) => {
    if (direction === 'asc') return arr.sort((a, b) => a - b);
    if (direction === 'desc') return arr.sort((a, b) => b - a);
};
console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// //