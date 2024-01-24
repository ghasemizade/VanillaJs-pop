const $ = document
const tagInputElem = $.getElementById('input')
const tagUlElem = $.querySelector('ul')
const tagsCountSpanElem = $.querySelector('span')
const removeAllBtn = $.querySelector('button')

let maxTagsCount = 10
let tags = ["React", "Js"]

const countTags = () => {
    tagInputElem.focus()
    tagsCountSpanElem.innerHTML = maxTagsCount - tags.length
}

const removeTag = (tagElem) => {
    
}

const removeAllLi = () => {
    tagUlElem.querySelectorAll('li').forEach(tag => tag.remove())
}

const createTag = () => {
    let tagLi = null
    removeAllLi();
    [...tags].reverse().forEach(tag => {
        tagLi = `<li>${tag}<i class="uit uit-multiply"></i></li>`    
        tagUlElem.insertAdjacentHTML('afterbegin', tagLi)
    })
    countTags()
}
createTag()
countTags()

const addTag = (event) => {
    if (event.key === "Enter") {
        let tagTitle = event.target.value

        if (tags.length < 10) {
            if (tagTitle.length < 10 && tagTitle.length > 0) {
                tags.push(tagTitle)
                createTag()
            }
        }
        event.target.value = ''
    }
}

tagInputElem.addEventListener('keyup', addTag)
removeAllBtn.addEventListener('click', () =>{
    tags.length = 0

    removeAllLi()
    countTags()
})