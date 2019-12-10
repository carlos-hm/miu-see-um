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
    hours,
  } = req.body;

  const museum = await Museum.create({
    name,
    short,
    description,
    address,
    ticket,
    photoURL,
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

exports.updateMuseum = async (req, res) => {
  const { id } = req.params;
  const { 
    name, 
    short, 
    description, 
    address, 
    ticket, 
    photoURL,
    hours,
  } = req.body;

  const museum = await Museum.findByIdAndUpdate(id, {
    name, 
    short, 
    description, 
    address, 
    ticket, 
    photoURL,
    hours,
  });

  res.status(200).json(museum);
}