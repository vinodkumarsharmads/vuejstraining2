import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

// realtime firebase
fb.ingredientsCollection.onSnapshot(snapshot => {
  let ingredientArray = []
  snapshot.forEach(doc => {
    let ingredient = doc.data()
    ingredient.id = doc.id

    ingredientArray.push(ingredient)
  })

  store.commit('setIngredients', ingredientArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: [],
    ingredients : {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPerformingRequest(state, val) {
      state.performingRequest = val
    },
    setPosts(state, val) {
      state.posts = val
    },
    setIngredients(state, val) {
      state.ingredients = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async addIngredient({ dispatch }, form) {

      // create post in firebase
      await fb.ingredientsCollection.add({
        createdOn: new Date(),
        name: form.name,
        quantity: form.quantity
      })
      // fetch user profile and set in state
      dispatch('setIngredients', form)
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title,
        email : form.email,
        password : form.password
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
      }
    },
    async logout({ commit }) {
      // log user out
      await fb.auth.signOut()

      // clear user data from state
      commit('setUserProfile', {})

      // redirect to login view
      router.push('/login')
    }
  }
})

export default store