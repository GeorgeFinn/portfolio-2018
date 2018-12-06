const express = require('express')
const router = express.Router()

const Project =  require('../../models/Project')
const validateProjectInput = require('../../validation/project')

// GET api/projects/test
// Public
router.get('/test', (req, res) => res.json({
  msg: "Projects works"
}))

// POST api/projects/add
// Add Project
// Public
router.post('/add', (req, res) => {
  const {errors, isValid} = validateProjectInput(req.body)
  //Validation
  if (!isValid) {
    return res.status(400).json(errors)
  }

  Project.findOne({name: req.body.name}).then(project => {
    if (project) {
      errors.project = 'Project already exists'
      return res.status(400).json(errors)
    } else {
      const newProject = new Project({name: req.body.name, category: req.body.category, imageUrl: req.body.imageUrl, url: req.body.url})
        .save()
        .then(project => res.json(project))
        .catch(err => res.json(err))
    }
  })
})

// GET api/projects/all
// Get projects
// Public
router.get('/all', (req, res) => {
  const errors = {}
  Project.find()
  .then(projects => {
    if(!projects) {
      errors.noprojects = 'There are no projects'
      return res.status(404).json(errors);
    }
    res.json(projects)
  })
  .catch(err => {
    res.status(404).json({ project: 'There are no projects'})
  })
})

module.exports = router
