function loadUserInTable(page){
    fetch('https://randomuser.me/api/?page=${page}')
    .then ((response) => response.json())
    .then((user)=>{
    console.log(user);
    const photo = document.body.querySelector('#photo');
    photo.src = user.results[0].picture.medium;
    const gender = document.body.querySelector('#gender');
    gender.textContent = user.results[0].gender;
    const name = document.body.querySelector('#name');
    name.textContent = `${user.results[0].name.first} ${user.results[0].name.last}`;
    const email = document.body.querySelector('#email');
    email.textContent = user.results[0].email;
    const phone = document.body.querySelector('#phone');
    phone.textContent = user.results[0].phone;
    window.user=user.results[0];
     
    })
}
    
    
    loadUserInTable(1);
    
     document.body.querySelector('.next').addEventListener('click', function(){
    const currentPage = Number.parseInt(this.dataset.page);
    this.dataset.page = currentPage +1;
    loadUserInTable(currentPage+1);
    console.log(this.dataset.page);
    })
    
    
    
    
    document.body.querySelector('.add').addEventListener('click', function(){
    const tr = document.createElement('tr');
    const content = `<td>
    <img src ="${user.picture.medium}" alt="">
    </td>
     <td>${user.gender}</td>
     <td>Açelya Leus</td>
     <td>celya.leus@example.com</td>
     <td>(300)-811-6504</td>`;
    tr.innerHTML = content;
    document.body.querySelector('tbody').append(tr);
    })
