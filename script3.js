// event handler on klik
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'yellow';
// }

// p3.onclick = ubahWarna;

// eventlistener
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.addEventListener('click', function () {
    // p4.style.color = 'blue';
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(textLiBaru);
    const ul = document.querySelector('section#b ul');
    ul.appendChild(liBaru);

});

const p3 = document.querySelector('.p3');

p3.addEventListener('mouseover', function () {
    p3.style.color = 'blue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.color = 'black';
});