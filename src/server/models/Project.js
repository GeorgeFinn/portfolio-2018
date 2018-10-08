const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  imageUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Project = mongoose.model('project', ProjectSchema)
