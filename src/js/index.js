import dataJSON from './../../data.json'

const button = document.getElementById('calculate')
const selectIn = document.getElementById('selectIn')
const selectOut = document.getElementById('selectOut')
const valueIn = document.getElementById('valueIn')
const result = document.getElementById('result')

const currencies = {
    pln: 1,
    eur: 4,
    gbp: 6,
    usd: 5
}

function calculate() {
    const val = valueIn.value
    const currIn = selectIn.value
    const currOut = selectOut.value

    if (!val) {
        result.innerText = "wpisz kwotę"
        return
    }

    const valPln = val * currencies[currIn]
    console.log(val, valPln, currOut)


    result.innerText = `${valPln / currencies[currOut]} ${currOut.toUpperCase()}`
}

button.addEventListener('click', calculate)
