const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_RUL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(port, () => console.log(`Backend server is runnig on port ${port}`));
