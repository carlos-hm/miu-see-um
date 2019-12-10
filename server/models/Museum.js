const { Schema, model } = require('mongoose')

const museumSchema = new Schema(
  {
    name: String,
    short: String,
    description: String,
    direction: String,
    ticket: String,
    hours: [
      {
        type: String
      }
    ],
    photoURL: String,
    halls: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Museum', museumSchema);