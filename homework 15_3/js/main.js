
   const div = document.querySelector('div');
//     document.body.append(div);

    const ul1 = document.createElement('ul');
    ul1.className = 'month';
    div.append(ul1);
    const ul2 = document.createElement('ul');
    ul2.className = 'weekdays';
    div.append(ul2);
    const ul3 = document.createElement('ul');
    ul3.className = 'days';
    div.append(ul3);

// Блок с заголовками (наименования месяца и года)
const li1 = document.createElement('li');
    li1.className = 'month-name';
    ul1.append(li1);
const li2 = document.createElement('li');
    li2.className = 'year-name';
    ul1.append(li2);

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

// табличная часть, дни месяца -->
for (let i = 1; i <= 31; i++) {  
 const li = document.createElement('li');
        li.textContent = i; 
        ul3.append(li);
       }



const nowDate = new Date(),
       nowDateNumber = nowDate.getDate(),
       nowMonth = nowDate.getMonth(),
       nowYear = nowDate.getFullYear(),
       container = document.getElementById('month-calendar'),
       monthContainer = container.getElementsByClassName('month-name')[0],
       yearContainer = container.getElementsByClassName('year-name')[0],
       daysContainer = container.getElementsByClassName('days')[0],
       prev = container.getElementsByClassName('prev')[0],
       next = container.getElementsByClassName('next')[0],
       monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
   

const curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year,month) {
        let monthDays = new Date(year, month + 1, 0).getDate(),
            monthPrefix = new Date(year, month, 0).getDay(),
            monthDaysText = '';
    
        monthContainer.textContent = monthName[month];
        yearContainer.textContent = year;
        daysContainer.innerHTML = '';
    
        if (monthPrefix > 0){
            for (let i = 1  ; i <= monthPrefix; i++){
                monthDaysText += '<li></li>';
            }
        }
    
        for (let i = 1; i <= monthDays; i++){
            monthDaysText += '<li>' + i + '</li>';
        }
    
        daysContainer.innerHTML = monthDaysText;
    
        if (month == nowMonth && year == nowYear){
            days = daysContainer.getElementsByTagName('li');
            days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
        }
    }
    
    setMonthCalendar(nowYear,nowMonth);
    
    prev.onclick = function () {
        let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    
        curDate.setMonth(curDate.getMonth() - 1);
    
        let curYear = curDate.getFullYear(),
            curMonth = curDate.getMonth();
    
        setMonthCalendar(curYear,curMonth);
    }
    
    next.onclick = function () {
        let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));
    
        curDate.setMonth(curDate.getMonth() + 1);
    
        let curYear = curDate.getFullYear(),
            curMonth = curDate.getMonth();
    
        setMonthCalendar(curYear,curMonth);
    }
   