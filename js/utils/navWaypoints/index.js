import { $ } from '../querySelectorAlias'

/**
 *
 * @param {NodeSelector} [navLinkSelector=document.querySelectorAll('nav ul li a')] - Selector for Links in Navigation for the Waypoints
 * @param {NodeSelector} [sectionSelector=document.querySelectorAll('section')] - Selector for the Waypoints to Check against the nav
 */

const navWaypoints = (navLinkSelector = $('nav ul li a'), sectionSelector = $('section')) => {

    // TODO make Polyfills work

    if (!'IntersectionObserver' in window) {
        import('./polyfill').then((module) => {
            module()
        })
    }
    ['scroll', 'load'].forEach(event => {
        window.addEventListener(event, () => {
            const config = {
                rootMargin: '0px'
            }

            let io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0.9) {
                        functionNav(entry)
                        io.unobserve(entry)
                    }
                })
            }, config)

            sectionSelector.forEach(section => {
                io.observe(section)
            })

            const functionNav = entry => {
                navLinkSelector.forEach(navPoint => {
                    navPoint.classList.remove('active')
                    if (`#${entry.target.id}` === navPoint.hash) {
                        navPoint.classList.add('active')
                    }
                })
            }
        })
    })

}

export { navWaypoints }
