const { Schema, model } = require("mongoose");

const artworkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    author: {
      type: String,
      required: true,
    },
    photoURL: String,
    audioURL: String,
    refNum: Number,
    hallID: {
      type: Schema.Types.ObjectId,
      ref: 'Hall',
      required: true
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Artwork', artworkSchema);