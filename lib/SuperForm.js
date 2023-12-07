import { SuperElement } from './SuperElement.js'

/**
 * @class Used to create form components
 * @extends SuperElement
 */
export function SuperForm () {
  SuperElement.call(this, 'form')
}

SuperForm.prototype = Object.create(SuperElement.prototype)
/**
 *gets data from the form
 * @param {string} name - gets the name filled in on the form
 */
SuperForm.prototype.getValue = function (name) {
  const formData = new FormData(this.element)

  return formData.get(name)
}