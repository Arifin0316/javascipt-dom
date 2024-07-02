// dom selection
// documet.getElementById

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'arifin';

// document.getElemetsBytagname()
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'blue';
// }

// document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini di ubah dari js'



// document.querySelector -> menghasilkan element
// const p4 = document.querySelector('#b p');
// p4.style.color ='green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.color = 'orange'
// li2.style.backgroundColor = 'black';

// // document.querySelectorAll() -> bisa menagkap semua element

// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++ ){
//     p[i].style.backgroundColor = 'blue';
// }


// dom  manipulation 
// inerhtml

// const judul = document.getElementById('judul');
// judul.innerHTML = 'samsul arifin';

// stayl css
// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'black';
// judul.style.color= 'blue';

// getatribut

// const judul = document.getElementsByTagName('h1')[0];
// const a = document.querySelector('section#a a');

// class list

// const p2 = document.querySelector('.p2');

// buat element baru

// const pBaru = document.createElement('p');
// const textBaru = document.createTextNode('paragraf baru');

// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(textBaru);

// // simpan pBaru di akhir section a
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);


// const liBaru = document.createElement('li');
// const textliBaru = document.createTextNode('item baru');

// liBaru.appendChild(textliBaru);
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// // removeChild untuk menghapus elemet
// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const textH2Baru = document.createTextNode('judul baru');

// h2Baru.appendChild(textH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgreen'
// h2Baru.style.backgroundColor = 'lightgreen'
// liBaru.style.backgroundColor = 'lightgreen'


// const p3 = document.querySelector('.p3')

// function ubahWarnaP2 () {
//     p2.style.backgroundColor = 'lightgreen'
// }
// function ubahWarnaP3 () {
//     p3.style.backgroundColor = 'lightgreen'
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// // 

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click',function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li')
//     const textBaru = document.createTextNode('item baru')
    
//     liBaru.appendChild(textBaru);
//     ul.appendChild(liBaru);

// });

// const p3 = document.querySelector('.p3')

// p3.addEventListener('click',function(){
//     p3.style.backgroundColor = "aqua"
// })

// p3.addEventListener('dblclick',function(){
//     p3.style.color = 'red'
// } )
// p3.addEventListener('mouseenter',function(){
//     p3.style.backgroundColor = 'red'
// } )
// p3.addEventListener('mouseleave',function(){
//     p3.style.backgroundColor = 'white'
// } )