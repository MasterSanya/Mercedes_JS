const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHead, mainScroll]

newArray.forEach(link => {
    link.addEventListener('click', (event) => {
        // Прекращаем стандартное поведение ссылки, чтобы не переходить мгновенно:
        event.preventDefault()

        // Получаем ID нужной секции:
        const ID = event.target.getAttribute('href').substr(1)

        // Прокручиваем до нужной секции:
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})