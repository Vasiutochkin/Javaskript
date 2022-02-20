// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentById = document.getElementById("content");
console.log(contentById);

// -- отримує текст з блоку з id "rules"
let rulesById = document.getElementById("rules");
console.log(rulesById);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentById.innerHTML = '<h1>Блеф кэтчер</h1>';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesById.innerHTML = `<p>Всем известно значение слова блеф в покере.
 А вот, что значит блеф кэтчер знают не все начинающие покеристы. 
 В переводе с английского слово «catch» обозначает «ловить». 
 Следовательно, блеф кэтчер – это рука, способная побить (словить) только блеф.
 Против более сильных комбинаций такая рука проигрывает.</p>`;

// -- змініть кожному елементу колір фону на червоний
let childrenBackground = document.body.children;
for (const childrenBackgroundElement of childrenBackground) {
    childrenBackgroundElement.style.backgroundColor = `rgba(141, 141, 121, 0.89)`;
}

// -- змініть кожному елементу колір тексту на синій
let childrenColorText = document.body.children;
for (const childrenColorTextElement of childrenColorText) {
    childrenColorTextElement.style.color = `#721313`;
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesId = document.getElementById(`rules`);
console.log(rulesId.classList)
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let clasRulel = document.getElementsByClassName(`fc_rules`);
for (const clasRulelElement of clasRulel) {
    clasRulelElement.style.color = `rgba(238, 238, 37, 0.89)`;
}


