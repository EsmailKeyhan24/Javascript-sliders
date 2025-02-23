const _btnslides=document.getElementById('btnslides')
const _figure=document.querySelectorAll('.line>figure')
for(i=0; i<_figure.length; i++){
    _span=document.createElement('span')
    _span.classList.add('Btns')
    _btnslides.appendChild(_span)
}



// =====================.line _figure =================== 
const figcaption=document.querySelectorAll('.line>figure>figcaption')
const _line=document.querySelector('.line')
_line.style.width=_figure.length*700+'px'
const span=document.querySelectorAll('#btnslides>span')



span.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{
        _line.style.transform='translateX(-'+(index*594)+'px)'

        for(i=0; i<figcaption.length; i++){
            figcaption[i].classList.remove('show')
        }
        figcaption[index].classList.add('show')
    }) 
})



    // setInterval(function para(x) {
    //     _line.style.transform='translateX(-'+(x*594)+'px)'
    // }, 1000);


