/**
 *
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */

const setCookie = (name: string, value: string, days: number): void => {
    const d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`
};

/**
 *
 * @param {String} name
 * @return {any}
 */

const getCookie = (name: string): any => {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null
};

/**
 *
 * @param {String} name
 */

const deleteCookie = (name: string): void => setCookie(name, '', -1);

export {setCookie, getCookie, deleteCookie}
