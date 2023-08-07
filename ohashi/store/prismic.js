export const state = () => ({
  settings: {},
  navigation: {},
  about: {},
  menu: {},
  vacation: {}
})

export const mutations = {
  setSettings (state, settings) {
    state.settings = settings
  },
  setNavigation (state, navigation) {
    state.navigation = navigation
  },
  setAbout (state, about){
    state.about = about
  },
  setMenu (state, menu){
    state.menu = menu
  },
  setVacation (state, vacation){
    state.vacation = vacation
  }
}

export const actions = {
  async load (store) {
    const navigation = await this.$prismic.api.getSingle('navigation')
    const settings = await this.$prismic.api.getSingle('settings')
    const about = await this.$prismic.api.getSingle('about')
    const menu = await this.$prismic.api.getSingle('menu')
    const vacation = await this.$prismic.api.getSingle('vacation')

    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setAbout', about)
    store.commit('setMenu', menu)
    store.commit('setVacation', vacation)
  }
}
