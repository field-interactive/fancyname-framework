const setCookie = (name, value, days) => {
    const d = new Date
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`
}

const getCookie = name => {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
}

const deleteCookie = name => setCookie(name, '', -1)

export { setCookie, getCookie, deleteCookie }
