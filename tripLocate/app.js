let contrySelect = document.getElementById('contries')
let citySelect = document.getElementById('cities')

let contriesData ={
    PleaseSelect: ['Please slelect contries...!'],
    iran : ['tehran', 'nowshahr', 'mashhad', 'tabriz', 'shiraz'],
    canada : ['toronto', 'vancover', 'alberta', 'otawa'],
    usa : ['california', 'losvegas', 'newyork', 'huston', 'boston'],
    germany : ['monikh', 'berlin', 'doserlfdof', 'dortmond'],
}


contrySelect.addEventListener('change', function () {
    let contryValue = contrySelect.value
    let mainCountriesCity = contriesData[contryValue]

    citySelect.innerHTML = ''

    mainCountriesCity.forEach(function (city) {
        citySelect.innerHTML += '<option>' + city + '</option>'
    })
})
