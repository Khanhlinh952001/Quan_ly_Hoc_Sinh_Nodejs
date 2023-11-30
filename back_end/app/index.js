const express = require("express");
const app = express();
const router = require("./routers");
app.use(express.json());

app.use(router);

app.listen(7000, () => {
  console.log(`Server started on http://localhost:7000`);
});

// sync mysql and sequelize ====================================================================
const { sequelize } = require("./model");
sequelize.sync({ alter: true });
