function Product() {
    this.getName = function() {
        return this.name || 'Default name';
    };

    this.setName = function(name) {
        this.name = name;

        return this;
    };

    this.getPrice = function() {
        return this.price;
    };

    this.setPrice = function(price) {
        this.price = price;

        return this;
    };
}


function Cart() {
    this.products = [];

    this.hasProducts = function() {
        return this.products ? !!this.products.length : false;
    };

    this.getProducts = function() {
        return this.products || [];
    };

    this.addProduct = function(Product) {
        this.products.push(Product);

        return this;
    };

    this.addProducts = function(products) {
        var self = this;

        products.forEach(function (product) {
            self.addProduct(product);
        });

        return this;
    };

    this.removeProduct = function(Product) {
        var productIndex = this.products.indexOf(Product);
        this.products.splice(productIndex, 1);

        return this;
    };
}

function Customer() {
    this.fullName = 'John Doe';

    this.getFullName = function() {
        return this.fullName;
    };

    this.setFullName = function(fullName) {
        this.fullName = fullName;

        return this;
    };
}

function Order() {
    this.showOrder = function() {
        if (!this.getCart().hasProducts()) {
            console.log(`Customer ${this.getCustomer().getFullName()} has not ordered any products`);

            return;
        }

        var products = this.getCart().getProducts();
        var orderMessage = `Customer ${this.getCustomer().getFullName()} has ordered: \n`;

        products.forEach(function (product, i) {
            orderMessage += `${i}. ${product.getName()} at the price of ${product.getPrice()} \n`;
        });

        console.log(orderMessage);
    };

    this.setCart = function(Cart) {
        this.cart = Cart;

        return this;
    };

    this.getCart = function() {
        return this.cart;
    };


    this.getCustomer = function() {
        return this.customer;
    };

    this.setCustomer = function(Customer) {
        this.customer = Customer;

        return this;
    };
}

var golf1   = new Product().setName('Golf I').setPrice(4500),
    golfGti = new Product().setName('Golf GTI').setPrice(20000),
    golfR32 = new Product().setName('Golf R32').setPrice(9000);

var denis     = new Customer().setFullName('Denis B.'),
    denisCart = new Cart();

denisCart.addProduct(golf1);
denisCart.addProducts([golfGti, golfR32]);
denisCart.removeProduct(golfGti);

var order142 = new Order().setCart(denisCart).setCustomer(denis).showOrder();


var mark     = new Customer().setFullName('Mark D.'),
    markCart = new Cart();

var order164 = new Order().setCart(markCart).setCustomer(mark).showOrder();
