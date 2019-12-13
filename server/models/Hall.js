const { Schema, model } = require('mongoose');

const hallSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    artworks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Artwork'
      }
    ],
    museumID: Schema.Types.ObjectId
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model("Hall", hallSchema);