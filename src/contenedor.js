class Contenedor {
    constructor(route) {
      this.route = route;
      this.products = [];
    }
  
    getAll() {
      return this.products;
    }
    save(obj) {
      obj.id = !this.products.length ? 1 : parseInt(this.products[this.products.length - 1].id) + 1;
      this.products.push(obj);
      return obj
    }
  
    getById(id) {
      return this.products.find((product) => product.id == id);
    }
  
    updateProduct(id, obj) {
      const productIndex = this.products.findIndex(product => product.id == id);
      
      if (productIndex != -1) {
        this.products[productIndex].title = obj.title || this.products[productIndex].title;
        this.products[productIndex].price = obj.price || this.products[productIndex].price;
        this.products[productIndex].thumbnail = obj.thumbnail || this.products[productIndex].thumbnail;
        return this.products[productIndex];
      }
      return false;
    }
  
    deleteById(id) {
      const index = this.products.findIndex(prod=>prod.id == id)
      if(index != -1){
        this.products = this.products.filter((product) => (product.id != id));
        return true
      }
      return false
    }
  }
  const products = new Contenedor('./src/products.txt');
  

  
  module.exports = products;