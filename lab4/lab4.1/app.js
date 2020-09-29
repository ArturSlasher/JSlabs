let list = 'Кузьмин Иван, Петров Петр, Фёдоров Иван';
let searchWord = prompt('Enter name and sername:', 'Кузьмин Иван');

let reg = new RegExp(searchWord);
let newList = list.replace(reg, 'Иванов Иван');
console.log(newList);