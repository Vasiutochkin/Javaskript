// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname, amail, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.amail = amail;
//     this.phone;
// }
//
// // - Створити пустий масив, наповнити його 10 об'єктами new User(....)
// const userArr = [
//     new User(3, 'vika', 'golovko', 'ggg.gmail.com', 30680000010),
//     new User(4, 'vin', 'krun', 'khg.gmail.com', 30680000001),
//     new User(1, 'serge', 'ivanov', 'nng.gmail.com', 30680000002),
//     new User(2, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003),
//     new User(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004),
//     new User(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005),
//     new User(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006),
//     new User(10, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007),
//     new User(9, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008),
//     new User(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009)
// ];
// console.log(userArr);
// //
// // - Взяти масив User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUser = userArr.filter((item) => {
//     if (item.id % 2 === 0) {
//         return item
//     }
// });
// console.log(filterUser)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(userArr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
class Client {
    constructor(id, names, surname, email, phone, order) {
        this.id = id;
        this.names = names;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let emptyArray= [
    new Client(3, 'vika', 'golovko', 'ggg.gmail.com', 30680000010,['book', 'game', 'ps4']),
    new Client(4, 'vin', 'krun', 'khg.gmail.com', 30680000001,['book','boks', 'game', 'ps4']),
    new Client(1, 'serge', 'ivanov', 'nng.gmail.com', 30680000002,['book', 'game', 'ps4']),
    new Client(2, 'nazar', 'golovko', 'gggkk.gmail.com', 30680000003,['book', 'game', 'ps4']),
    new Client(5, 'kola', 'golovko', 'ggggfdb.gmail.com', 30680000004,['book', 'ps4', 'game', 'ps4']),
    new Client(6, 'andre', 'golovko', 'gggxgv.gmail.com', 30680000005,['ps4']),
    new Client(7, 'ivan', 'golovko', 'ggvxvg.gmail.com', 30680000006,['book', 'game', 'ps4']),
    new Client(10, 'pol', 'golovko', 'ggxcbxg.gmail.com', 30680000007,[ 'game', 'ps4']),
    new Client(9, 'fog', 'golovko', 'ggbbbbg.gmail.com', 30680000008,['book', 'game',]),
    new Client(8, 'valla', 'golovko', 'gsdggg.gmail.com', 30680000009,['book', 'ps4'])
];
console.log(Client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в
// полі order по зростанню. (sort)
console.log(emptyArray.sort((a, b) => a.order.length - b.order.length));