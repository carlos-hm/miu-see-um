const Hall = require("../models/Hall");
const Museum = require("../models/Museum");
const Artwork = require("../models/Artwork");

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


exports.getHalls = async (req, res) => {
  const { id } = req.params;
  // const museum = await Museum.findByIdAndUpdate(id).populate('halls');
  const museum = await Museum.findByIdAndUpdate(id).populate(
    { 
     path: 'halls',
     populate: {
       path: 'artworks',
       model: 'Artwork'
     } 
  })
  //.exec(function(err, docs) {});
  res.status(200).json(museum);
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
  const { artworks } = hall;

  const museumID = hall.museumID;
  const museum = await Museum.findById(museumID);

  const { halls } = museum;
  const indexhall = halls.indexOf(id);

  if(indexhall !== -1){
    halls.splice(indexhall, 1)
  }

  await Museum.findByIdAndUpdate(museumID, { $set: { halls } });
  
  artworks.forEach(async element => {
    await Artwork.findByIdAndDelete(element);
  });
  
  await Hall.findByIdAndDelete(id);

  res.status(200).json({ msg: "deleted" });
};


