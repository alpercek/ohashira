export const state = () => ({
  settings: {},
  navigation: {},
  about: {},
  menu: {}
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
  }
}

export const actions = {
  async load (store) {
    const navigation = await this.$prismic.api.getSingle('navigation')
    const settings = await this.$prismic.api.getSingle('settings')
    const about = await this.$prismic.api.getSingle('about')
    const menu = await this.$prismic.api.getSingle('menu')

    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setAbout', about)
    store.commit('setMenu', menu)
  }
}
