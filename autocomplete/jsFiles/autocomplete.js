let $ = document
let autoCompleteWrapper = $.querySelector('.search-input')
let getInputElem = $.querySelector('input')
let autoCompleteBox = $.querySelector('.autocom-box')

getInputElem.addEventListener('keyup', function () {
    let searchValue = getInputElem.value

    if (searchValue) {
        autoCompleteWrapper.classList.add('active')
        let filteredWord = suggestions.filter(function (word) {
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })
        suggestionWordGenerator(filteredWord)
    } else {
        autoCompleteWrapper.classList.remove('active')

    }
})

function suggestionWordGenerator(wordsArray) {
    let listitemArray = wordsArray.map(function (word) {
        return '<li>'+ word +'</li>'
    })
    let emptyHandler
    if (!listitemArray.length) {
        emptyHandler = '<li>'+ getInputElem.value +'</li>'

    } else {
        emptyHandler = listitemArray.join('')
    }
    console.log(emptyHandler);
}