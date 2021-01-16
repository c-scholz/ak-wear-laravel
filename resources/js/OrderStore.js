import axios from "axios"

export const state = {
    cart: [],
    motifs: [],
    products: []
}

export const getters = {
    motifs: state => {
        return state.motifs
    },
    products: state => {
        return state.products
    }
}

export const mutations = {
    ADD_TO_CART: function(state, item) {
        state.cart.push(item || state.currentItem)
    },
    REMOVE_FROM_CART: function(state, item) {
        let idx = state.cart.items.findIndex(cartItem => cartItem.id === item.id)
        state.cart.splice(idx, 1)
    },
    FETCH_MOTIFS(state, motifs) {
        return state.motifs = motifs
    },
    FETCH_PRODUCTS(state, products) {
        return state.products = products
    }
}

export const actions = {
    addToCart({commit}, item) {
        commit(ADD_TO_CART, item)
    },
    removeFromCart({commit}, item) {
        commit(REMOVE_FROM_CART, item)
    },
    fetchMotifs({commit}) {
        axios
            .get('/api/motifs')
            .then(res => {
                commit(FETCH_MOTIFS, res.data)
            })
            .catch(err => console.log(err))
    },
    fetchProducts({commit}) {
        axios
            .get('/api/products')
            .then(res => {
                commit(FETCH_PRODUCTS, res.data)
            })
            .catch(err => console.log(err))
    },
}

export const store = {
    state,
    getters,
    mutations,
    actions
}

export default store;