// const closed = document.querySelector('.close');
// const card = document.querySelector('.card');

// closed.addEventListener('click', function () {
//     card.style.display = 'none';
// });


//  DOM Traversal

// const closed = document.querySelectorAll('.close');
// for (let i = 0; i < closed.length; i++) {
//     closed[i].addEventListener('click', function (e) {
//         // closed[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });

// // }

// closed.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         // menghentikan aksi default
//         e.preventDefault();
//         // menhengtikan bubbling
//         e.stopPropagation();
//     });
// });


// Method DOM Traversal
// parentNode-- Node
// parentElement - Element
// nextsibling - Node --- mengambil element selanjutnya jika di enter maka akan mengambil enter
// nextElementSibling - Element ----- mengambil element selanjutnya
// previousSibling - Node
// previousElementSibling


//event bubbling --- jika pada anaknya dikasih event maka pada event pada induknya juga akan running

const card = document.querySelectorAll('.card');
card.forEach(function (card) {
    card.addEventListener('click', function (e) {
        alert('oke');
    });
});


// jika menggunakan cara ini maka dapat menghentikan walapupun menambahkan element baru
const container = document.querySelector('.container');
container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); // untuk menghentikan aksi default
        e.stopPropagation(); // menghentikan bubling pada induknya jika anaknya diklik
    }
});



