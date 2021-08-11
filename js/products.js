const listOfItens = document.querySelectorAll('.item')

for(let c = 0; c < listOfItens.length; c++){
    listOfItens[c].addEventListener(`click`, e => {
        const selected = document.querySelector('.selected')
        
        listOfItens[c].classList.toggle('selected')
        if(selected)selected.classList.remove('selected')
    })
}