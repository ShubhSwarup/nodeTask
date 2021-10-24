const express = require("express");
require("../src/db/conn");
const order = require("../src/models/orders");
const orderRouter = require("./routers/order");
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.use("/orders",orderRouter);

app.listen(port, () => {
    console.log("connected at port no : " + port);
})