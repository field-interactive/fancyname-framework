import {$} from '../../build/js/querySelectorAlias'
import {smoothScroll} from '../../build/js/smoothscroll'

$('nav ul li a').forEach(item => {
    item.addEventListener('click', e => {
        if (item.contains(e.target)) {
            smoothScroll(e.target.hash, 300, 'linear', () => console.log('done'))
        }
    })
})
