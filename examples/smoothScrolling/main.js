import { $ } from '../../build/querySelectorAlias'
import { smoothScroll } from '../../build/smoothscroll'

$('nav ul li a').forEach(item => {
    item.addEventListener('click', e => {
        if (item.contains(e.target)) {
            smoothScroll(e.target.hash, 300, 'linear', () => console.log('done'))
        }
    })
})
