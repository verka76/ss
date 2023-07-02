import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        products: [
            {
                image: "1.png",
                name: "Рубашка хлопоквая ETRO",
                price: 56000,
                article: "T1",
                available: true,
                category: "Мужские"
            },
            {
                image: "2.png",
                name: "Сарафан I Am Studio",
                price: 78000,
                article: "T2",
                available: true,
                category: "Женские"
            },
            {
                image: "3.png",
                name: "Рубашка OODJI",
                price: 34000,
                article: "T3",
                available: false,
                category: "Женские"
            },
            {
                image: "4.png",
                name: "Костюм спортивный  Siberia",
                price: 53000,
                article: "T4",
                available: true,
                category: "Мужские"
            },
            {
                image: "5.png",
                name: "Платье Femme",
                price: 65000,
                article: "T5",
                available: false,
                category: "Женские"
            },
            {
                image: "6.png",
                name: "Шорты джинсовые Tom Tailor",
                price: 87000,
                article: "T6",
                available: true,
                category: "Женские"
            }
        ],
        cart: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state , products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if (state.cart.length){
                let isProductExists=false;
                state.cart.map(function (item) {
                    if(item.article === product.article){
                        isProductExists=true
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product)
                }
            }
            else {
            state.cart.push(product)
            }
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index,1)
        },
        INCREMENT:(state, index) => {
            state.cart[index].quantity++
        },
        DECREMENT:(state, index) => {
            if(state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }

        },
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
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        INCREMENT_CART_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CART_ITEM({commit}, index) {
            commit('DECREMENT',index )
        },
        DELETE_FROM_CART({commit},index){
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: {
        PRODUCTS:state => {
            return state.products;
        },
        CART:state => {
            return state.cart;
        }
    }
});
export  default store;