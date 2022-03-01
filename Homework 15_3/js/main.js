
const div = document.createElement('div');
document.body.prepend(div);

const ul1 = document.createElement('ul');
ul1.className = 'month';
ul1.textContent = 'Июнь';
div.prepend(ul1);
const ul2 = document.createElement('ul');
ul2.className = 'weekdays';
div.append(ul2);
const ul3 = document.createElement('ul');
ul3.className = 'days';
div.append(ul3);
   
      

 for (let i = 1; i <= 30; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      ul3.append(li);
       }


// Блок с наименования дней недели, начинается с понедельника (Пн) -->
const li3 = document.createElement('li');
li3.textContent = 'пн';
ul2.append(li3);
const li4 = document.createElement('li');
li4.textContent = 'вт';
ul2.append(li4);
const li5 = document.createElement('li');
li5.textContent = 'ср';
ul2.append(li5);
const li6 = document.createElement('li');
li6.textContent = 'чт';
ul2.append(li6);
const li7 = document.createElement('li');
li7.textContent = 'пт';
ul2.append(li7);
const li8 = document.createElement('li');
li8.textContent = 'сб';
ul2.append(li8);
const li9 = document.createElement('li');
li9.textContent = 'вс';
ul2.append(li9);