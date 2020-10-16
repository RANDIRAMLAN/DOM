// DOM Selection
// DOM Manipultion
// DOM Traversal
// Event Handling

// document.querySelector() menghasilkan 1 element

const p4 = document.querySelector('#b p');
p4.innerHTML = "randi";
p4.style.color = 'pink';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.color = 'red';

// document.querySelectorAll() ... untuk memilih semua elemrent
const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].innerHTML = 'Select ALL';

}
