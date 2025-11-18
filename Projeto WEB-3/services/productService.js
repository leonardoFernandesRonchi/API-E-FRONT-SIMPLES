const Product = require('../models/Product');

module.exports = {
  async create(data) {
    return await Product.create(data);
  },

  async list() {
    return await Product.find();
  },

  async delete(id) {
    return await Product.deleteOne({ _id : id})
  },

  async get(id) {
    return await Product.findById(id);
  },

  async update(id, updatedData) {
    return await Product.findByIdAndUpdate(id, updatedData, { new: true });
  }
};
