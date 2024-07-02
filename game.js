function getPilihanComputer (){
    var comp = Math.random();
if(comp < 0.34) return 'gajah';
if (comp >= 0.34 && comp < 0.67 ) return 'orang';
return 'semut';
}

function getHasil (comp, player){
if( player == comp )return 'seri';
if(player == 'gajah') return (comp == 'orang') ? 'menang' : 'kalah';
if(player == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang';
if(player == 'semut') return (comp == 'orang') ? 'kalah' : 'menang';
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
   pil.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-computer');
    imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

    const info =document.querySelector('.info');
    info.innerHTML= hasil;
   })
})





// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click',function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info =document.querySelector('.info');
//     info.innerHTML= hasil;

// })
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click',function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info =document.querySelector('.info');
//     info.innerHTML= hasil;

// })
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click',function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

//     const info =document.querySelector('.info');
//     info.innerHTML= hasil;

// })

