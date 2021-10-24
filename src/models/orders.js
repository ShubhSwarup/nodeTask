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
