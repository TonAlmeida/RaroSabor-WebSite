const listOfItens = document.querySelectorAll('.item')
console.log(listOfItens)
for(let c = 0; c < listOfItens.length; c++){
    listOfItens[c].addEventListener(`click`, e => {
        listOfItens[c].classList.toggle('selected')
        //document.querySelector('.selected').classList.remove('selected')
    })
}