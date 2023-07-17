const getKg = document.getElementById('kg') 
const getCm = document.getElementById('cm')
const getRangeKg = document.getElementById('kg-range')
const getRangeCm = document.getElementById('cm-range')
const getRes = document.getElementById('desc')

getRangeKg.addEventListener('change', bmiCal)

getRangeCm.addEventListener('change', bmiCal)

function bmiCal() {
    var newRangeKg = getRangeKg.value
    var newRangeCm = getRangeCm.value
    
    getKg.innerHTML = newRangeKg + ' kg'
    getCm.innerHTML = newRangeCm + ' cm'
    
    let bmiValue = (newRangeKg / (Math.pow(newRangeCm / 100, 2))).toFixed(1)
    getRes.innerHTML = bmiValue
}