const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

// From lesson:
// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => {
//         btns.forEach((btnItem) => {
//             btnItem.classList.remove('feature__link_active')
//         })

//         btnItem.classList.add('feature__link_active')

//         lists.forEach((listItem) => {
//             listItem.classList.add('hidden')
//         })

//         lists[index].classList.remove('hidden')
//     })
// })

// My code:
btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        btnItem.classList.toggle('feature__link_active')
        lists[index].classList.toggle('hidden')
    })
})