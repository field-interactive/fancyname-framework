import {agree, notice} from '../variables'
import {getCookie, setCookie} from './cookieHelper'

const cookieNotice = (): void => {
    if (notice) {
        if (getCookie('cookieNotice')) {
            notice.parentNode.removeChild(notice)
        } else {
            notice.classList.add('show')
        }
    }

    agree.addEventListener('click', e => {
        e.preventDefault();
        notice.parentNode.removeChild(notice);
        setCookie('cookieNotice', 'accepted', 365)
    })
};

export {cookieNotice}
