// const judul = document.getElementById('judul');
// judul.innerHTML = 'Sedang Belajar Dom';
// judul.style.color = 'blue';

// const sectionA = document.querySelector('section#a');

// sectionA.innerHTML = 'Mari Belajar DOM';

// const judul = document.querySelector('#judul');
// judul.style.color = 'grey';

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Randi');

// ... Manipulasi Element .........
// innerHTML .. untuk mengganti text HTML
// setAttribute().. untuk mensetting element pada pada attribute yang dimaksud
// Element.classList.add() .. untuk menambah Elemen
// Element.classList.remove()..untuk hapus Elemen
// Element.classList.toggle()..menambah jika elemenet tidak ada dan menghapus jika element masih ada
// Element.classList.item()..untuk mengetahui elemen apa aja yang ada
// Element.classList.add()..untuk mengecek elemeen yang yng dicari ada atau nda ada
// Element.classList.add()..untuk mengganti elemeen

//  ...... Manipulasi Node ...............
// document.createElement()
const pBaru = document.createElement('p');
// document.createtextnode()
const tesksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan dalam paragraf
pBaru.appendChild(tesksPBaru);
// simpan pBaru pada section a
const sectionA = document.getElementById('a');
// simpan diakhir element tersebut
sectionA.appendChild(pBaru);

// study kasus
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Sisipkan Item')
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// removechild
// const sectionA = document.getElementById('a')
const a = document.getElementsByTagName('a')[0];
sectionA.removeChild(a);

// replacechild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const h2Baru = document.createTextNode('Judul Baru');
h2.appendChild(h2Baru);
sectionB.replaceChild(h2, p4);

// menandai yang berubah
pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'grey';
h2.style.backgroundColor = 'pink';















