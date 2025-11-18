const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.log('Erro ao conectar:', err));

mongoose.connection.on('error', err => {
  console.error('Erro de conexão com MongoDB:', err);
});

module.exports = mongoose;