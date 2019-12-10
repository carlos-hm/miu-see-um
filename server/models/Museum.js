const { Schema, model } = require('mongoose')

const museumSchema = new Schema(
  {
    name:  {
      type: String,
      required: true,
    },
    short: String,
    description: String,
    address: String,
    ticket: String,
    photoURL: String,
    creatorID: {
      type: Schema.Types.ObjectId,
      required: true
    },
    hours: {
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    },
    halls: [
      {
        type: Schema.Types.ObjectId
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Museum', museumSchema);