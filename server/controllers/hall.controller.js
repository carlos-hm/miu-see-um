const Hall = require("../models/Hall");
const Museum = require("../models/Museum");

exports.newHall = async (req, res) => {
  const { id } = req.params;
  const {
    name,
  } = req.body;

  const hall = await Hall.create({ name });

  await Museum.findByIdAndUpdate(id, { $push: { halls: hall._id } });

  res.status(201).json(hall);
};


exports.getHall = async (req, res) => {
  const { id } = req.params;
  const hall = await Hall.findById(id);

  res.status(200).json(hall);
}

exports.updateHall = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const hall = await Hall.findByIdAndUpdate(id, { name });
  res.status(200).json(hall);
}

exports.deleteHall = async (req, res) => {
  const { id } = req.params;
  await Hall.findByIdAndDelete(id);

  res.status(200).json({ msg: "deleted" });
};


