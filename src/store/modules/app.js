import Cookie from 'js-cookie'

const app = {
    state: {
        sidebar: {
            opened: !+Cookie.get('sidebarStatus')
        }
    },
    mutations: {
        TOOGLE_SIDEBAR: state => {
            if (state.sidebar.opened) {
                Cookie.set('sidebarStatus', 1)
            } else {
                Cookie.set('sidebarStatus', 0)
            }
        }
    },
    actions: {
        toggleSideBar: ({
            commit
        }) => {
            console.log(state.sidebar.opened)
            commit('TOOGLE_SIDEBAR')
            console.log(state.sidebar.opened)
        }
    }
}

export default app
