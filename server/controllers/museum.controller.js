const Museum = require("../models/Museum");

exports.newMuseum = async (req, res) => {
  const { _id } = req.user;
  const { 
    name, 
    short, 
    description, 
    address, 
    ticket, 
    photoURL,
    mapURL,
    hours,
  } = req.body;

  const museum = await Museum.create({
    name,
    short,
    description,
    address,
    ticket,
    photoURL,
    mapURL,
    hours,
    creatorID: _id,
  });

  res.status(201).json({museum});
}

exports.getMuseum = async (req, res) => {
  const { id } = req.params;
  const museum = await Museum.findById(id);

  res.status(200).json({museum});
}

exports.getUserMuseum = async (req, res) => {
  const { id } = req.params;
  const museum = await Museum.findOne({ creatorID: id });

  res.status(200).json({museum});
}

exports.getMuseums = async (req, res) => {
  const museums = await Museum.find({ updated: true });

  res.status(200).json({museums});
}

exports.updateMuseum = async (req, res) => {
  const { id } = req.params;
  const { 
    name, 
    short, 
    description, 
    address, 
    ticket, 
    photoURL,
    mapURL,
    hours,
  } = req.body;

  const museum = await Museum.findByIdAndUpdate(id, {
    name, 
    short, 
    description, 
    address, 
    ticket, 
    photoURL,
    mapURL,
    hours,
    updated: true,
  });

  res.status(200).json({museum});
}