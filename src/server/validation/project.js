const Validator = require('validator')

module.exports = function validateProjectInput(data) {
  let errors = {}

  const validatorName = data.name.length !== 0 ? data.name: ''
  const validatorCategory = data.category.length !== 0 ? data.category : ''
  const validatorImageUrl = data.imageUrl.length !== 0 ? data.imageUrl: ''

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
    isValid: errors === {}
  }
}
