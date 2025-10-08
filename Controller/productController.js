const Product = require('../Models/productModel');

exports.getHome = (req, res) => {
  const products = Product.getProducts();
  res.render('home', { products });
};

exports.getAddProduct = (req, res) => {
  res.render('addProduct');
};

exports.postAddProduct = (req, res) => {
  const { name, image, description } = req.body;
  const newProduct = { name, image, description };
  Product.addProduct(newProduct);
  res.redirect('/');
};

exports.getProductDetails = (req, res) => {
  const id = req.params.id;
  const product = Product.getProductById(id);
  res.render('productDetails', { product });
};
