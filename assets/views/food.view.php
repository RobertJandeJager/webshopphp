<div class="container-fluid p-0">
    <div class="row">
        <?php foreach ($foods as $food) : ?>
            <div class="col-md-4">
                <img src="<?= $_ENV['IMAGE_PATH'] . $food['image'] ?>" width="100%">
                <div class="card-body">
               <h5 class="card-title"> <?= $food['name'] ?></h5>
               <!-- <p class="card-text" v-if="product_data.stock != 0">In Stock ({{product_data.stock}})</p>
               <p class="card-text" v-else>Out of Stock</p> -->
               <button class="btn btn-primary"  @click="addToCart(product_data.id)">Buy (€<?= $food['cost']?>)</button>
           </div>
            </div>
        <?php endforeach ?>
    </div>
</div>