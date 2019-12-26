class Product {
    getName() {
        return this.name || 'Default name';
    }

    setName(name) {
        this.name = name;

        return this;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;

        return this;
    }
}


class Cart {
    products = [];

    hasProducts() {
        return this.products ? !!this.products.length : false;
    }

    getProducts() {
        return this.products || [];
    }

    addProduct(Product) {
        this.products.push(Product);

        return this;
    }

    addProducts(products) {
        var self = this;

        products.forEach(function (product) {
            self.addProduct(product);
        });

        return this;
    }

    removeProduct(Product) {
        var productIndex = this.products.indexOf(Product);
        this.products.splice(productIndex, 1);

        return this;
    }
}

class Customer {
    fullName = 'John Doe';

    getFullName() {
        return this.fullName;
    }

    setFullName(fullName) {
        this.fullName = fullName;

        return this;
    }
}

class Order {
    showOrder() {
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
    }

    setCart(Cart) {
        this.cart = Cart;

        return this;
    }

    getCart() {
        return this.cart;
    }


    getCustomer() {
        return this.customer;
    }

    setCustomer(Customer) {
        this.customer = Customer;

        return this;
    }
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
