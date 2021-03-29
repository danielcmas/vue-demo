import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

const sessionModule = {
    state: {
        browserLanguage: '', browserWidth: '', browserHeight: ''
    },
    mutations: {
        setBrowserSettings(state, payload) {
            state.browserLanguage = payload.browserLanguage;
            state.browserWidth = payload.browserWidth;
            state.browserHeight = payload.browserHeight;
            console.log('Browser settings stored')
        }
    },
    namespaced: true,
    actions: {}
}

const usersModule = {
    state: {
        usersList: []
    },
    mutations: {
        updateUsersList(state, payload) {
            state.usersList = payload;
            console.log('Users updated')
        }
    },
    actions: {
        loadUsers ({ commit }) {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data)
                .then(users => {
                    console.log("Retrieved users from API " + users);
                commit('updateUsersList', users)
            })
        }
    },
    namespaced: true
}

const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {},
    actions: {},
    modules: {
        sessionModule, usersModule
    }
  })
export default store;
