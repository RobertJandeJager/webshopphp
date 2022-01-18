

        <div id="app">
            <h2>{{ appname }}</h2>
            <h3> {{ description }}</h3>
        </div>

        <div class="container-fluid p-0">
            <section class="content container">
                <div class="row">
                    <div class="col-md-4 pt-3" v-for="food in foods">
                        <product :product_data="food"></product>
                    </div>
                </div>
            </section>
        </div>

        <div id="cart-list">
            <h2>Shopping Cart</h2>

            <div v-for="(count, productid) in productsInCart">
                <cart-item :cart_item_data="foods[productid-1]" :amount="count"></cart-item>
            </div>
        </div>


        