import {tab, tabContainer, tabNav} from '../variables'

const tabs = () => {
    if (!tab) {
        console.error('Tabcontainer does not exist');
        return false
    }

    const select = navItem => {
        const id = navItem.getAttribute('data-target');
        navItem.classList.add('active');
        tabContainer.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        tabContainer.querySelector(`.tab[data-target=${id}]`).classList.add('active')
    };

    tabNav.querySelectorAll('li').forEach((navItem, index) => {
        if (index !== 0) return false;
        select(navItem)
    });

    tab.addEventListener('click', e => {
        /*
         * If the tab container should get some Events, line 14 must be changed
         * */

        if (tabContainer.contains(e.target)) return false;

        tabNav.querySelectorAll('li').forEach(navItem => {
            navItem.classList.remove('active');
            select(e.target)
        })
    })
};

export {tabs}
