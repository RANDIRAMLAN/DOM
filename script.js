// DOM Selection
// document.getElementById() > menyeleksi dan mengembalikan by elemen id

const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Randi';

// document.getElementsByTagName > menyeleksi dan mengembalikan by htmlcollection

const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'pink';
    // p[2].style.backgroundColor = 'pink';

}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() ... mengembalikan by htmlcollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Randi Ramlan';





