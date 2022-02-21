// Все робити за допомоги js.
// - створити блок,
let div = document.createElement("div");

// - додати йому класи wrap, collapse, alpha, beta
div.classList.add("wrap");
div.classList.add("collapse");
div.classList.add("alpha");
div.classList.add("beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.border = "1px solid red ";
div.style.background = "burlywood";
div.style.height = "150px";
div.style.fontSize = " 20px";
div.style.color = "#8a4b4b";

// - додати цей блок в body.
document.body.append(div);

// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true));

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює
// li та додає його до блоку .menu
// Завдання робити через цикли.
let menuAetems = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.getElementsByClassName("menu")[0];
console.log(menu);
for (const el of menuAetems) {
    let li = document.createElement("li");
    li.innerText = el;
    menu.appendChild(li);
}

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let didElement = document.createElement("div");
//     didElement.innerText = `${element.title} ${element.monthDuration}`;
//     document.body.appendChild(didElement);
// }

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divClass = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerText = coursesAndDurationArrayElement.title
    let p = document.createElement("p")
    p.innerText = coursesAndDurationArrayElement.monthDuration

    divClass.appendChild(h1);
    divClass.appendChild(p);
    document.body.appendChild(divClass);


}