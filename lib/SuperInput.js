import { SuperElement } from './SuperElement.js'

/**
 * creates input for the form
 * @class
 * @extends SuperElement
 * @param {elementTag} type - {@link elementTag}
 * @param {Object} options
 * @param {string} options.name - assigns the attribute
 * @param {Array.<Array.string>} options.options - a list that contains names and values to set attributes.
 */
export function SuperInput ({ type, name, options = [] }) {
  SuperElement.call(this, 'input')
  this.element.type = type
  this.element.name = name

  for (let i = 0; i < options.length; i++) {
    const [name, value] = options[i]
    this.element.setAttribute(name, value)
  }
}

SuperInput.prototype = Object.create(SuperElement.prototype)

SuperInput.prototype.constructor = SuperInput
