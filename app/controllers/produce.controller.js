const db = require("../models");
const Produce = db.produce;
const Role = db.role;

exports.produces = async (req, res) => {
    let response = await Produce.find({})
    if (response) {
        res.status(200).send(response)
    } else {
        res.status(200).send("data not found!")
    }
}

exports.produce = async (req, res) => {
    if (req.params.id) {
        let response = await Produce.findById(req.params.id)
        if (response) {
            res.status(200).send(response)
        } else {
            res.status(200).send("data not found!")
        }
    }
}

exports.create = async (req, res) => {
    console.log(req.body);
    if (req.body) {
        let response = await Produce.create({
            title: req.body.title,
            produceName: req.body.produceName,
            produceCode: req.body.produceCode,
            quantity: req.body.quantity,
            totleQuantity: req.body.totleQuantity,
            createDate: new Date(),
            updateDate: null,
            dueDate: req.body.dueDate,
        })
        if (response) {
            res.status(200).send(response)
        } else {
            res.status(200).send("data not found!")
        }
    }
}




exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};
