let app = new Vue({
    el: '#app',

    data: {
        appname: 'The Vegan Shop',
        description: 'All vegan products guaranteed',
        mainurl: 'index.php',
        productsInCart: {},
        foods: [
            {
                id: 1,
                name: 'Burger',
                image: 'v_burger.png',
                cost: 1.25,
                stock: 1,
            },
        
            {
                id: 2,
                name: 'Peanut Dish',
                image: 'v_peanutdish.png',
                cost: 3.75,
                stock: 2,
            },
        
            {
                id: 3,
                name: 'rice stuff',
                image: 'v_ricedish.png',
                cost: 12.95,
                stock: 3,
            },
        
            {
                id: 4,
                name: 'some salad or something',
                image: 'v_salad.png',
                cost: 12.95,
                stock: 3,
            },
        
            {
                id: 5,
                name: 'Something with fruit',
                image: 'v_slicedfruitdish.png',
                cost: 12.95,
                stock: 3,
            },
        
            {
                id: 6,
                name: 'Soup, just Soup, its just soup',
                image: 'v_soup.png',
                cost: 12.95,
                stock: 3,
            },
        
        ],
    },

    mounted() {
        this.$on('add-to-cart', function (id) {
            // FIXME: subtract in *.html
            // id = id - 1;
            if (id in this.productsInCart) {
                // this.productsInCart[id]++
                Vue.set(this.productsInCart, id, this.productsInCart[id] + 1)
            } else {
                // this.productsInCart[id] = 1;
                Vue.set(this.productsInCart, id, 1)
            }
        })
    },


})

Vue.config.devtools = true
Vue.config.productionTip = false