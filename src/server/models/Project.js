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
  url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const Project = mongoose.model('project', ProjectSchema)
module.exports = Project
