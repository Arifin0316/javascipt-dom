const tombol = document.getElementById('ubahWarna');

tombol.addEventListener('click', function () {
  //   document.body.style.backgroundColor = "lightgreen"
  // document.body.setAttribute('class','warna')
  document.body.classList.toggle('warna');
});

const rWarna = document.createElement('button');
const textTombol = document.createTextNode('acak warna');
rWarna.appendChild(textTombol);
rWarna.setAttribute('type', 'button');
tombol.after(rWarna);

rWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  });

  const sMerah = document.querySelector('input[name=sMerah]');
  const sHijau = document.querySelector('input[name=sHijau]');
  const sBiru = document.querySelector('input[name=sBiru]');
  
  sMerah.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  })
  sHijau.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  })
  sBiru.addEventListener('input',function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
   document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  })

  document.body.addEventListener('mousemove',function(event){
    // posisi mouse
    // console.log(event.clientX)
    // ukuran browser
    const xPos = Math.round((event.clientX / window.innerWidth) *255);
    const yPos = Math.round((event.clientY / window.innerHeight) *255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',0)';
  })