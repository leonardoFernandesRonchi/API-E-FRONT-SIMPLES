const productService = require('../services/productService');

module.exports = {
async create(req, res) {
    console.log('Corpo recebido:', req.body); 
    const product = await productService.create(req.body);
    res.json(product);
},

  async list(req, res) {
      const products = await productService.list();
      res.json(products);
  },

  async delete (req, res) {
    const { id} = req.params;
    await productService.delete(id);
    res.json({ message: 'Deletado com sucesso!'});
  },


  async get (req, res) {
    const {id} = req.params;
    const product = await productService.get(id);
    res.json (product);
  },

 async update(req, res) {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedProduct = await productService.update(id, updatedData);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
 }
};
