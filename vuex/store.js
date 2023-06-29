import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: [
             {
                 "image": "1.png",
                 "name": "T-shirt 1",
                 "price": 56000,
                 "article": "T1",
                 "available": true,
                 "category": "Мужские"
             }
        ],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state , products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            state.cart.push(product)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
                method: "GET"
        })
                .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
                 .catch((error) => {
                    console.log(error)
                     return error;
                 })
        },
        ADD_TO_CART({commit, product}) {
            commit('SET_CART', product);
        }
    },
    getters: {
        PRODUCTS:state => {
            console.log('1')
            return state.products;
        },
        CART(state) {
            console.log('2')
            return state.cart;
        }
    }
});
export  default store;