import { agree, notice } from '../variables'
import Cookies from 'js-cookie'

const cookieNotice = () => {
    if (notice) {
        if (Cookies.get('cookieNotice')) {
            notice.parentNode.removeChild(notice)
        } else {
            notice.classList.add('show')
        }
    }

    agree.addEventListener('click', e => {
        e.preventDefault()
        notice.parentNode.removeChild(notice)
        Cookies.set('cookieNotice', 'accepted', { expires: 365 })
    })
}

export { cookieNotice }
