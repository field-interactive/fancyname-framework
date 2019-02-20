/**
 *
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */

const setCookie = (name, value, days) => {
    const d = new Date
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`
}

/**
 *
 * @param {String} name
 * @return {any}
 */

const getCookie = name => {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
}

/**
 *
 * @param {String} name
 */

const deleteCookie = name => setCookie(name, '', -1)

export { setCookie, getCookie, deleteCookie }
