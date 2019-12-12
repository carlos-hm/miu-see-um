const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photoUrl: {
      type: String,
      default: 'https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email'})
module.exports = model('User', userSchema);