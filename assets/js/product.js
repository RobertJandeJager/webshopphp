Vue.component('product', {
    data: function () {
        return {

        }

    },
    props: {
        product_data: {},
    },

    methods: {
        addToCart(id) {
            this.$root.$emit('add-to-cart', id)
        }
    },

    template: `
        <div class="card">
           <img :src="this.$imagepath + product_data.image" class="product-img" alt="...">
           <div class="card-body">
               <h5 class="card-title">{{product_data.name}}</h5>
               <p class="card-text" v-if="product_data.stock != 0">In Stock ({{product_data.stock}})</p>
               <p class="card-text" v-else>Out of Stock</p>
               <button class="btn btn-primary" :disabled="product_data.stock === 0" @click="addToCart(product_data.id)">Buy (€{{product_data.cost}})</button>
           </div>
        </div>`,

})

Vue.component('cart-item', {
    data: function () {
        return {

        }

    },
    props: {
        cart_item_data: {},
        amount: Number
    },

    methods: {
        getTotal() {
            return (this.cart_item_data.cost * this.amount).toFixed(2);

        }
    },

    template: `
        <div class="cart-item">
            <img :src="this.$imagepath + cart_item_data.image" class="cart-product-img">
            <h5 class="cart-product-name">{{cart_item_data.name}} (amount: {{amount}}) {{getTotal()}}</h5>
        </div>`,

})
