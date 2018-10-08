const Validator = require('validator')
const _ = require('lodash')

module.exports = function validateProjectInput(data) {
  let errors = {}

  const validatorName = !_.isEmpty(data.name) ? data.name: ''
  const validatorCategory = !_.isEmpty(data.category) ? data.category : ''
  const validatorImageUrl = !_.isEmpty(data.imageUrl) ? data.imageUrl: ''

  if(Validator.isEmpty(validatorName)) {
    errors.name = 'Project name is required'
  }
  if(Validator.isEmpty(validatorCategory)) {
    errors.category = 'Project category is required'
  }
  if(Validator.isEmpty(validatorImageUrl)) {
    errors.imageUrl = 'Project imageUrl is required'
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
