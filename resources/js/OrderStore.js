import Vue from 'vue';

export const store = Vue.observable({
    currentItem: {
    },
    cart: []
})

export const mutations = {
    addToCart: function(item) {
        store.cart.push(item || store.currentItem);
        if(!item) {
            store.currentItem = this.getEmptyItem();
        }
    },
    removeFromCard: function(idx) {
        store.cart.splice(idx, 1);
    },
    setNewCurrentItem: (type) => {
        store.currentItem = this.getEmptyItem(type);
    },
    getEmptyItem: (type) => { 
        switch (type) {
            case "shirt": 
                return {
                    type: "shirt",
                    sizes: [{}, {
                        xs: 0,
                        s: 0,
                        m: 0,
                        l: 0,
                        xl: 0,
                        xxl: 0,
                        xxxl: 0
                    }],
                }
            case "hoodie": 
                return {
                    type: "hoodie",
                    sizes: [{
                        s: 0,
                        m: 0,
                        l: 0,
                        xl: 0,
                        xxl: 0,
                        xxxl: 0,
                        xxxxl: 0
                    }, {}],
                }            
            case "bundle":
                return {
                    type: "bundle",
                    sizes: [{
                        xs: 0,
                        s: 0,
                        m: 0,
                        l: 0,
                        xl: 0,
                        xxl: 0,
                        xxxl: 0
                    },{
                        s: 0,
                        m: 0,
                        l: 0,
                        xl: 0,
                        xxl: 0,
                        xxxl: 0,
                        xxxxl: 0
                    }]
                }
            default: 
                return {
                    type: ""
                }
        }
    }
}