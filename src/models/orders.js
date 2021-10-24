const express = require('express');
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    order_id: {
        type: Number,
        required: true,
        unique: true
    },
    item_name: {
        type: String,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
    },
    order_date: {
        type: Date,
        required: true,
    },
    delivery_date: {
        type: Date,
        required: true,
    }
})

//cresting new collection
const order = new mongoose.model("Order",orderSchema)

module.exports = order;


// "order_id": "123",
// "item_name":"Samsung Mobile",
// "cost":"400",
// "order_date":"2020/12/01",
// "delivery_date":"2020/12/11"