import {tab, tabContainer, tabNav} from '../variables'

const tabs = () => {
    if (!tab) {
        console.error('Tabcontainer does not exist')
        return false
    }

    const select = (navItem: Element) => {
        const id = navItem.getAttribute('data-target')
        navItem.classList.add('active')
        tabContainer.querySelectorAll('.tab').forEach((tab: Element) => tab.classList.remove('active'))
        tabContainer.querySelector(`.tab[data-target=${id}]`).classList.add('active')
    }

    tabNav.querySelectorAll('li').forEach((navItem: Element, index: number) => {
        if (index !== 0) return false
        select(navItem)
    })

    tab.addEventListener('click', (e: Event) => {
        /*
         * If the tab container should get some Events, line 14 must be changed
         * */

        if (tabContainer.contains(e.target as Element)) return false;

        tabNav.querySelectorAll('li').forEach(navItem => {
            navItem.classList.remove('active')
            select(e.target as Element)
        })
    })
};

export {tabs}
