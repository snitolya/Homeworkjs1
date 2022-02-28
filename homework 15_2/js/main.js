
const div = document.createElement('div'); // создаём див в HTML 
document.body.prepend(div);

createTable(div , 5, 5); 
function createTable(parent, kolonka, rady) { // создаём функцию, parent - эл,в котором монтируется наша табличка 
        let table = document.createElement('table'); 


for (let i = 0; i < rady; i++) { // сначала переюираем ряды.
        const tr =document.createElement('tr') ; // 1 цикл создаёт tr -ряды таблички
        tr.textContent = 'Olya';
        table.append(tr);
    for (let a = 0; a < kolonka; a++) {
        const td =document.createElement('td') ;// 2 цикл создаёт td - колонки таблички и заполняет 1 цикл td
        td.textContent = 'Filanovich';
        tr.append(td);   
      }   
}
parent.append(table); // в parent закидываем нашу таблицу
}