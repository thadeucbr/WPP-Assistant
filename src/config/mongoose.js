import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Conectado ao banco de dados'))
  .catch((error) => console.log(error.message));