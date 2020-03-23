export const state = () => ({
  darkMode: false,
  shorcutMenu: true
})

export const actions = {
  toggleDarkMode({ commit }) {
    commit('TOGGLE_DARK_MODE')
  },
  toggleVisibilityShortcutMenu({ commit }) {
    commit('TOGGLE_VISIBILITY_SHORTCUT_MENU')
  }
}

export const mutations = {
  TOGGLE_DARK_MODE(state) {
    state.darkMode = !state.darkMode
  },
  TOGGLE_VISIBILITY_SHORTCUT_MENU(state) {
    state.shorcutMenu = !state.shorcutMenu
  }
}
