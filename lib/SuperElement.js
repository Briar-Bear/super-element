import { SuperEvent } from './SuperEvent.js'

/**
 * @typedef {Object} Element
 * @property {HTMLDivElement} element
 */

/**
 * the name of the element
 * @typedef {string} elementTag
 */

/**
 * creates elements
 * @constructor
 * @extends SuperEvent
 * @param {elementTag} type - {@link elementTag}
 */
export function SuperElement (type) {
  // extending the key values
/**
 * @type {HTMLElement}
*/
  this.element = document.createElement(type)

  Object.defineProperty(this, 'color', {
    get: function () {
      return this.element.style.color
    },

    set: (value) => {
      this.element.style.color = value
    }
  })
}

/**
 * inheriting superEvent and SuperAnimate prototypes
 */

SuperElement.prototype = Object.create(SuperEvent.prototype)
SuperElement.prototype.constructor = SuperElement

/**
 * Used to append
 * @param {HTMLElement|Element} parent - appends to the parent object
 */
SuperElement.prototype.appendTo = function (parent) {
  if (parent.element) {
    parent.element.append(this.element)
  } else {
    parent.append(this.element)
  }
}

/**
 * Used to remove element
 */
SuperElement.prototype.remove = function () {
  this.element.remove()
}

// SuperElement.prototype.colour = function (colour) {
//   this.element.style.color = colour
// }

/**
 * Used to disable content such as buttons
 */

SuperElement.prototype.disable = function () {
  this.element.setAttribute('disabled', '')
}

/**
 * Used to enable content such as buttons after they've been disabled
 */

SuperElement.prototype.enable = function () {
  this.element.removeAttribute('disabled', '')
}
