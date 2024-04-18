const mongoose = require("mongoose");

const Produce = mongoose.model(
    "Produce",
    new mongoose.Schema({
        title: String,
        produceName: String,
        produceCode: String,
        quantity:Number,
        totleQuantity:Number,
        createDate: Date,
        updateDate:Date,
        dueDate:Date,
    })
);

module.exports = Produce;
