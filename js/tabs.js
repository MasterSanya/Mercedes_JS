const tabsHeaderElems = document.querySelectorAll('[data-tabs-header]')
const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        tabsHeaderElems.forEach(header => {
            // Если дата-атрибуты заголовка совпадают с дата-атрибутами выбранного элемента:
            if (header.dataset.tabsHeader === btn.dataset.tabsHandler) {
                // Делаем заголовок видимым (убираем класс hidden):
                header.classList.remove('hidden')
            } else {
                // Иначе прячем заголовок:
                header.classList.add('hidden')
            }
        })

        tabsContentElems.forEach(content => {
            // Если дата-атрибуты контента совпадают с дата-атрибутами выбранного элемента:
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                // Делаем блок видимым (убираем класс hidden):
                content.classList.remove('hidden')
            } else {
                // Иначе прячем блок:
                content.classList.add('hidden')
            }
        })
    })
}