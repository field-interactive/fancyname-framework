import { $ } from '../../js/utils/querySelectorAlias'
import { smoothScroll } from '../../js/utils/smoothScroll'

$('nav ul li a').forEach(item => {
    item.addEventListener('click', e => {
        if (item.contains(e.target)) {
            smoothScroll(e.target.hash, 300, 'linear', () => console.log('done'))
        }
    })
})
