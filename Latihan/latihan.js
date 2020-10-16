const tombolUbahWarna = document.getElementById('tombol-ubah-warna');
tombolUbahWarna.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'grey';
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda');
});

const tombolBaru = document.createElement('button');
const namaTombol = document.createTextNode('Gonta Ganti Warna');
tombolBaru.appendChild(namaTombol);
tombolBaru.setAttribute('type', 'button');
tombolUbahWarna.after(tombolBaru);
tombolBaru.addEventListener('click', function () {
    //untuk mengacak angak 0 - 1
    const acak = Math.round(Math.random() * 255 + 1);
    const acak1 = Math.ceil(Math.random() * 255 - 1);
    const acak2 = Math.floor(Math.random() * 255 - 1);
    // mengacak warna
    document.body.style.backgroundColor = 'rgb(' + acak + ',' + acak1 + ',' + acak2 + ')';
});

// const smerah = document.querySelector('input[name=smerah]');
// const shijau = document.querySelector('input[name=shijau]');
// const sbiru = document.querySelector('input[name=sbiru]');

// smerah.addEventListener('input', function () {
//     const r = smerah.value;
//     const g = shijau.value;
//     const b = sbiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// shijau.addEventListener('input', function () {
//     const r = smerah.value;
//     const g = shijau.value;
//     const b = sbiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// sbiru.addEventListener('input', function () {
//     const r = smerah.value;
//     const g = shijau.value;
//     const b = sbiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
// });

// document.body.addEventListener('mousemove', function (event) {
//     // posisi mouse
//     const xpos = Math.round(event.clientX / window.innerWidth) * 255;
//     const ypos = Math.round(event.clientY / window.innerHeight) * 255;
//     document.body.style.backgroundColor = 'rgb(' + xpos + ',' + ypos + ',100)';

// });





