// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let txt = document.getElementById('text');
// let btn = document.getElementById('btn');
//
// btn.onclick = ev => {
//     txt.style.display = 'none'
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let txt = document.getElementById('text');
// let btn = document.getElementById('btn');
//
// btn.onclick = ev => {
//     btn.style.display = 'none'
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// let age = document.getElementById('numAge');
// let btn = document.getElementById('btn');
//
// btn.onclick = ev => (age.value > 18)
//     ? alert('ok')
//     : alert('not ok')
//

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let a1 = document.getElementById('a1');
// let subMenu = document.getElementById('subMenu');
// flag = false;
//
// a1.onclick = ev => {
//     if (flag){
//         subMenu.style.display = 'block';
//         flag = false;
//     }
//     else {
//         subMenu.style.display = 'none';
//         flag = true;
//     }
// }

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
//
// let comment = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
// ]
//
// let com = document.getElementById('com');
// comment.forEach(i => {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement("p");
//     let btn = document.createElement("button");
//
//     btn.innerText = 'close';
//     h1.innerText = i.title;
//     p.innerText = i.body;
//
//     com.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(btn);
//
//     btn.onclick = function () {
//         p.hidden ? p.hidden = false : p.hidden = true
//     }
//
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// btn.onclick = ev => {
//     let btn = document.getElementById('btn');
//     let inp1 = document.getElementById('inp1').value;
//     let inp2 = document.getElementById('inp2').value;
//     let inp11 = document.getElementById('inp11').value;
//     let inp22 = document.getElementById('inp22').value;
//     console.log(inp1, inp2, inp11, inp22)
//
// }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// let div = document.getElementById('div');
//
// function genTable(row, col, tag) {
//     let tab = document.createElement('table');
//     for (let i = 0; i < row; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < col; j++) {
//             let td = document.createElement('td');
//             td.innerText = 'aaaaa';
//             tr.appendChild(td);
//         }
//
//         tab.appendChild(tr);
//     }
//     tag.appendChild(tab);
// }
//
// genTable(5, 5, div)

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//
// let div = document.getElementById('div');
// let btn = document.getElementById('btn');
// let numRow = document.getElementById('numRow');
// let numCol = document.getElementById('numCol');
// let text = document.getElementById('content');
//
// btn.onclick = ev => {
//     let tab = document.createElement('table');
//     for (let i = 0; i < numRow.value; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < numCol.value; j++) {
//             let td = document.createElement('td');
//             td.innerText = text.value;
//             tr.appendChild(td);
//         }
//         tab.appendChild(tr);
//     }
//     div.appendChild(tab);
// }

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let btn_prev = document.querySelector('#gallery .buttons .prev');
// let btn_next = document.querySelector('#gallery .buttons .next');
// let images = document.querySelectorAll('#gallery .photos img');
//
// let currentImageIndex = 0;
// btn_next.onclick = function () {
//     if (currentImageIndex >= images.length - 1) {
//         images[currentImageIndex].style.display = 'none';
//         currentImageIndex = 0;
//         images[currentImageIndex].style.display = 'block';
//     } else {
//         images[currentImageIndex].style.display = 'none';
//         currentImageIndex++;
//         images[currentImageIndex].style.display = 'block';
//     }
// }
//
// btn_prev.onclick = function () {
//     images[currentImageIndex].style.display = 'none';
//     if (currentImageIndex === 0){
//         currentImageIndex = images.length - 1;
//     } else {
//         currentImageIndex--;
//     }
//         images[currentImageIndex].style.display = 'block';

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
//
// let matArr = ['pizdec', 'hui', 'bleat'];
// let inp = document.getElementById('inp');
// let btn = document.getElementById('btn');
//
//
// btn.onclick = (ev) => {
//
//     for (let matEl of matArr) {
//         if (inp.value === matEl) {
//             alert('U r bad boy');
//             return;
//         } else {
//             alert('teach more words')
//         }
//     }
// }



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//



// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
