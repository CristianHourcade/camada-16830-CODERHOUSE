class Producto {

    constructor(title, price, stock, img, category) {
        this.title = title;
        this.price = price;
        this.img = img;
        this.stock = stock;
        this.category = category;
    }
    
    validarStock(cantidad){
        alert("Tengo stock para vos!!!! " + cantidad)
    }

}