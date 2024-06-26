import { SuperElement } from './SuperElement.js'

/**
 * Used to create elements and give them content
 * @class
 * @extends SuperElement
 * @param {elementTag} type - {@link elementTag}
 * @param {Object} options
 * @param {string} options.content - adds text to inside elements
 * @param {string} options.font - adds a font to inside elements
 * @param {string} options.fontSize - changes the size of the font to inside elements
 * @param {Array.<Array.string>} options.options - a list that contains names and values to set attributes.
 */
export function SuperContent ({ type, content = '', font = '', fontSize = 16, options = [] } = {}) {
  // set an if condition so if value in the contructor isnt used, it wont accept it if it's empty.
  SuperElement.call(this, type, options)

  this.element.type = type
  this.element.style.fontFamily = font
  this.element.style.fontSize = fontSize + 'px'
  this.element.innerText = content
}

SuperContent.prototype = Object.create(SuperElement.prototype)
SuperContent.prototype.constructor = SuperContent

/**
 * puts a line-through toDoItems if they've been completed and can take the line off if it hasnt been completed.
 * @param {string} type - used to create an if statement to allow the strike function to strike a line through a todoitem or reverse the line
 */
SuperContent.prototype.strike = function (type) {
  if (type === 'strike') {
    this.element.style.textDecorationLine = 'line-through'
  } else if (type === 'unStrike') {
    this.element.style.textDecorationLine = 'none'
  }
}
