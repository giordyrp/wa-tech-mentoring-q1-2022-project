const Product = require('../mongoose/models/Product');
const Category = require('../mongoose/models/Category');
const advancedResults = require('../mongoose/middlewares/advancedResults');

exports.resolvers = {
  Query: {
    hello: () => 'Hello world!',
    products: advancedResults(Product),
    categories: advancedResults(Category),
  },
  Product: {
    category: async (parent) => {
      const category = await Category.findById(parent.category);
      return category;
    },
  },
};
