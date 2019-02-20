import {easings} from './easings'

/**
 * Snoothscroll to an Element or Section
 * @param {String | Number} destination - Element / Height of Scroll
 * @param {Number} duration - Duration of scrolling
 * @param {String} [easing=linear] - Type of scrollanimation
 * @param {Function} [callback] - Callback when scroll is completed
 */
const smoothScroll = (destination, duration, easing = 'linear', callback) => {
    let dest = typeof destination === 'number' ? destination : document.querySelector(destination);
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

    const destinationOffset = typeof dest === 'number' ? dest : dest.offsetTop;

    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback()
        }
        return
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback()
            }
            return
        }

        requestAnimationFrame(scroll)
    }

    scroll()
};

export {smoothScroll}
