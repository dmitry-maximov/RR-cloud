require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const router = require('./routers/index');
const errorMiddleware = require('./middlewares/errorMiddleware');
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 6000;

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(fileUpload({}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', router);

app.use(errorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
