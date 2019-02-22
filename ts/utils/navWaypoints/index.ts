/**
 *
 * @param {NodeList} [navLinkSelector=document.querySelectorAll('nav ul li a')] - Selector for Links in Navigation for the Waypoints
 * @param {NodeList} [sectionSelector=document.querySelectorAll('section')] - Selector for the Waypoints to Check against the nav
 */

interface Waypoints {
    (navLinkSelector?: NodeList, sectionSelector?: NodeList): void
}

const navWaypoints: Waypoints = (navLinkSelector = document.querySelectorAll('nav ul li a'), sectionSelector = document.querySelectorAll('section')) => {
    ['scroll', 'load'].forEach((event: any): void => {
        window.addEventListener(event, (): void => {
            if (!('IntersectionObserver' in window) ||
                !('IntersectionObserverEntry' in window) ||
                !('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
                import('./polyfill').then((IntersectionObserverPolyfill) => IntersectionObserverPolyfill.default())
            }

            const config: object = {
                rootMargin: '0px'
            };

            let io: any = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.9) {
                        functionNav(entry)
                    }
                })
            }, config);

            sectionSelector.forEach(section => {
                io.observe(section)
            });

            const functionNav = entry => {
                navLinkSelector.forEach((navPoint: HTMLAnchorElement) => {
                    navPoint.classList.remove('active');
                    if (`#${entry.target.id}` === navPoint.hash) {
                        navPoint.classList.add('active')
                    }
                })
            }
        })
    })

};

export {navWaypoints}
