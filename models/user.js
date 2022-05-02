const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'This email is not valid']
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
}, {
  timestamps: true
})


module.exports = model('User', userSchema)