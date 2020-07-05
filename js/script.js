const fDirection = document.querySelector('select[name=flex-direction]')
const jContent = document.querySelector('select[name=justify-content]')
const aItems = document.querySelector('select[name=align-items]')
const dadBox = document.querySelector('div.dad')

fDirection.onchange = e =>  {
    var eSelect = e.target.value

    dadBox.style.flexDirection = eSelect
}

jContent.onchange = e => {
    let eSelect = e.target.value

    dadBox.style.justifyContent = eSelect
}

aItems.onchange = e => {
    let eSelect = e.target.value

    dadBox.style.alignItems = eSelect
}
