import express, { json } from 'express';
import router from './routes/index.routes.js';

const app = express();

app.use(json());
app.use(router);


app.listen(3331, () => {
  console.log('Servidor rodando na porta 3331');
});
