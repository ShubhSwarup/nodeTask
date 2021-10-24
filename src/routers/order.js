const express = require('express');
const orderRouter = new express.Router();
const order = require("../models/orders");

orderRouter.post("/create", async (req, res) => {
    try {
        const createOrder = new order(req.body);
        console.log(req.body);
        const insertOrder = await createOrder.save();
        res.status(201).send(insertOrder);
    } catch (error) {
        res.status(400).send(error);
    }
})

orderRouter.get("/", async (req, res) => {
    try {
        const getOrder = await order.find({})
        res.send(getOrder);
    } catch (error) {
        res.status(400).send(error);
    }
})

orderRouter.get("/search", async (req, res) => {
    try {
        const orderID = req.query.orderID;
        const getOrderByID = await order.find({ 'order_id': orderID });
        res.send(getOrderByID);
    } catch (error) {
        res.status(400).send(error);
    }
})

orderRouter.get("/list", async (req, res) => {
    try {
        const date = req.query.orderDate;
        console.log(date);
        const orderDate = new Date(date);
        console.log(orderDate);
        const getOrderByDate = await order.find({ 'order_date': orderDate }).toArray();
        res.send(getOrderByDate);
    } catch (error) {
        res.status(400).send(error);
    }
})

orderRouter.post("/update", async (req, res) => {
    try {
        const orderID = req.body.order_id;
        const newDeliveryDate = req.body.delivery_date;
        const updatedOrder = await order.updateOne({ 'order_id': orderID }, { delivery_date: newDeliveryDate }, { runValidators: true });
        res.send(updatedOrder);
    } catch (error) {
        res.status(500).send(error);
    }
})

orderRouter.delete("/delete", async (req, res) => {
    try {
        const orderID = req.query.orderID;
        const deleteOrder = await order.deleteOne({ 'order_id': orderID });
        res.send(deleteOrder);
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = orderRouter;