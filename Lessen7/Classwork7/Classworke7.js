// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// // рік випуску, максимальна швидкість, об'єм двигуна.
// // додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, zavod, year, maxspeed, volume) {
//     this.model = model;
//     this.zavod = zavod;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const carsKey in this) {
//             if (typeof this[carsKey] !== "function") console.log(`${carsKey}-${this[carsKey]}`)
//         }
//     };
//     this.newMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     };
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     };
// }
//
// let addCar = new Cars("Tesla", "USA", 2019, 260, 2);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(25500);
// addCar.changeYear(2020);
// addCar.addDriver('Vitalaa');
// console.log(addCar);
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars2 {
//     constructor(model, producer, year, maxspeed, engineVal) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engineVal = engineVal;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info() {
//         for (const Key in this) {
//             console.log(`${Key}-${this[Key]}`)
//         }
//     };
//
//     newMaxSpeed(newSpeed) {
//         console.log(`їдемо з новою швидкістю ${this.maxspeed + newSpeed} на годину`);
//     }
//
//     changeYear(newValue) {
//         console.log(`новий рік випуску авто ${this.year = newValue}`)
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }
//
// let addCar2 = new Cars2('Tesla', 'USA', 2000, 370, 3.0);
// console.log(addCar2);
// addCar2.drive();
// addCar2.info();
// addCar2.changeYear(2021);
// addCar2.newMaxSpeed(50);
// addCar2.addDriver('Viktor')
// console.log(addCar2)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Prince {
    constructor(name, age, size) {
        this.neme = name;
        this.age = age;
        this.size = size;
    }
}

class Popeluska {
    constructor(name, year, size) {
        this.neme = name;
        this.year = year;
        this.size = size;
    }

}

const prince = new Prince("Kola",52,39);

const cindirelles = [
    new Popeluska("vika",12,21),
    new Popeluska("ola",25,31),
    new Popeluska("liza",23,21),
    new Popeluska("ket",25,39),
    new Popeluska("olga",92,60),
    new Popeluska("lesa",30,27),
    new Popeluska("nika",45,42),
    new Popeluska("nika",45,46),
    new Popeluska("nasta",18,25),
    new Popeluska("mila",46,36),
]
for (const popeluska of cindirelles) {
    if (popeluska.size === prince.size) {
        console.log(popeluska)
    }

}




