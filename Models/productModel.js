const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/products.json');

// Get all products
function getProducts() {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data || '[]');
}

// Add a new product
function addProduct(product) {
  const products = getProducts();
  products.push(product);
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

// Get product by ID (index)
function getProductById(id) {
  const products = getProducts();
  return products[id];
}

module.exports = { getProducts, addProduct, getProductById };