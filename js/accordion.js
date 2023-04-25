const lists = document.querySelectorAll('.feature-sub')
const btns = document.querySelectorAll('.feature__link')

// btn.addEventListener('click', () => console.log('Click!'))
// btn.addEventListener('click', () => {
//     console.log('2!')
//     console.log('4!')
// })

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => console.log(btns[i]))
// }
// btns.forEach((btnItem, index) => {
//     btnItem.addEventListener('click', () => console.log(btnItem))
// })

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