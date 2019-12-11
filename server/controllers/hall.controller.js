const Hall = require("../models/Hall");
const Museum = require("../models/Museum");

exports.newHall = async (req, res) => {
  const { id } = req.params;
  const {
    name,
  } = req.body;

  const hall = await Hall.create({ 
    name, 
    museumID: id 
  });

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
  const hall = await Hall.findById(id);

  const museumID = hall.museumID;
  const museum = await Museum.findById(museumID);

  const { halls } = museum;
  const indexhall = halls.indexOf(id);

  if(indexhall !== -1){
    halls.splice(indexhall, 1)
  }

  await Museum.findByIdAndUpdate(museumID, { $set: { halls } });
  await Hall.findByIdAndDelete(id);

  res.status(200).json({ msg: "deleted" });
};


