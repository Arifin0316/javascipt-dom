const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumb = document.querySelectorAll('.thumb');

container.addEventListener('click',function(e){
    // cek apaka yang di click adalah thumb
    if(e.target.className == 'thumb'){
       jumbo.src = e.target.src;
       jumbo.classList.add('fade')
       setTimeout(function(){
        jumbo.classList.remove('fade')
       },500)
    }
    thumb.forEach(function(thumb){
        if( thumb.classList.contains('actif')){
            thumb.classList.remove('actif')
        }
    })
    e.target.classList.add('actif')
});

console.log('halooo')
