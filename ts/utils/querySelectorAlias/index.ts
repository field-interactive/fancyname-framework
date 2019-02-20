/**
 * jQuery like Syntax for document.querySelector() or document.querySelectorAll()
 * @param {String} domNodes
 * @return {Node | Array}
 */

const $ = domNodes => {
    if (typeof jQuery == 'undefined') {
        const items = document.querySelectorAll(domNodes)
        if (items.length > 1) {
            return Array.from(items)
        } else if (items.length === 1) {
            return items[0]
        }
    }
}

export { $ }
