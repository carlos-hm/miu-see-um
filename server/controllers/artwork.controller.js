const Artwork = require("../models/Artwork");
const Hall = require("../models/Hall");

exports.newArtwork = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    author,
    refNum,
  } = req.body;

  const artwork = await Artwork.create({
    title,
    description,
    author,
    photoURL: req.file.secure_url,
    refNum,
    hallID: id
  });

  await Hall.findByIdAndUpdate(id, { $push: { artworks: artwork._id } });

  res.status(201).json({artwork});
};

exports.getArtwork = async (req, res) => {
  const { id } = req.params;
  const artwork = await Artwork.findById(id);

  res.status(200).json({artwork});
};

exports.updateArtwork = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    author,
    refNum,
  } = req.body;

  const artwork = await Artwork.findByIdAndUpdate(id, { $set: { 
      title,
      description,
      author,
      photoURL: req.file.secure_url,
      refNum
    }
  }, { new: true });

  res.status(200).json({artwork});
};

exports.deleteArtwork = async (req, res) => {
  const { id } = req.params;
  const artwork = await Artwork.findByIdAndUpdate(id);
  
  const hallID = artwork.hallID;
  const hall = await Hall.findById(hallID);

  const { artworks } = hall;
  const indexArtwork = artworks.indexOf(id);

  if(indexArtwork !== -1) {
    artworks.splice(indexArtwork, 1)
  }

  await Hall.findByIdAndUpdate(hallID, { artworks });
  await Artwork.findByIdAndDelete(id);

  res.status(200).json({ msg: "deleted" });
};