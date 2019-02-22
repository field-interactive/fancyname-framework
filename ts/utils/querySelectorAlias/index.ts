/**
 * jQuery like Syntax for document.querySelector() or document.querySelectorAll()
 * @param {String} domNodes
 * @return {Node | Array}
 */

const $ = (domNodes: string): Node | Array<Node> => {
    const items = document.querySelectorAll(domNodes);
    if (items.length > 1) {
        return Array.from(items)
    } else if (items.length === 1) {
        return items[0]
    }
};

export {$}
