const Product = require('../mongoose/models/Product');
const Category = require('../mongoose/models/Category');
const advancedResults = require('../mongoose/middlewares/advancedResults');

exports.resolvers = {
  Query: {
    hello: () => 'Hello world!',
    products: advancedResults(Product),
    product: async (parent, args) => {
      const product = await Product.findById(args.id);
      return product;
    },
    categories: advancedResults(Category),
  },
  Product: {
    category: async (parent) => {
      const category = await Category.findById(parent.category);
      return category;
    },
  },
};
