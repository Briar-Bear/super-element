import { expect, test, jest } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperInput } from '../lib/SuperInput.js'

test('should create an instance of SuperInput', () => {
  const input = $e('input', {})
  expect(input.constructor).toBe(SuperInput)
})

// testing the click prototype from SuperEvent

test('should listen for the click event.', () => {
  const clicker = $e('input', { type: 'button', name: 'testClick' })
  const mockCallback = jest.fn(() => {})
  clicker.click(mockCallback)
  clicker.element.click.apply(clicker.element)

  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing the keyUp prototype

test('should listen for the keyUp event.', () => {
  const keyListener = $e('input', { type: 'button', name: 'testKeyUp' })
  const mockCallback = jest.fn(() => {})
  keyListener.click(mockCallback)
  keyListener.element.click.apply(keyListener.element)

  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing the disable method

test('should apply the disabled attribute to the element.', () => {
  const disabler = $e('input', { type: 'button', name: 'testDisable' })
  disabler.disable()
  expect(disabler.element).toHaveProperty('disabled', true)
})

// testing the enable method

test('should remove the disabled attribute from the element.', () => {
  const enabler = $e('input', { type: 'button', name: 'testEnable' })
  enabler.enable()
  expect(enabler.element).toHaveProperty('disabled', false)
})

// testing the appendTo method

test('should append elements', () => {
  const appendTest = $e('input', { type: 'button', name: 'testAppend' })
  const container = $e('content', { type: 'div' })
  appendTest.appendTo(container)
  expect(container.element.childNodes).toHaveLength(1)
})

// testing the appendTo method without the super constructors

test('should append content', () => {
  const content = $e('content')
  const append = document.createElement('div')

  content.appendTo(append)

  expect(append.childNodes).toHaveLength(1)
})

// testing the remove method

test('should remove elements', () => {
  const remover = $e('input', { type: 'button', name: 'testRemove' })
  const container = $e('content', { type: 'div' })
  remover.appendTo(container)
  remover.remove()
  expect(container.element.childNodes).toHaveLength(0)
})

// testing the options arg

test('should retrieve set options', () => {
  const input = $e('input', { type: 'text', name: 'inputTest', options: [['value', 'test']] })

  const getInput = input.element.getAttribute('value')

  expect(getInput).toBe('test')
})

// testing options
test('should test preventDefault to be true', () => {
  const input = $e('input', { type: 'button', name: 'btnTest', options: [['value', 'test']] })
  const mockCallback = jest.fn(() => {})

  input.click(mockCallback, { preventDefault: true })
  input.element.click()
  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing superEvent element

test('should test for addListener keyUp function', () => {
  const input = $e('input', { type: 'button', name: 'btnTest', options: [['value', 'test']] })
  const mockCallback = jest.fn(() => {})

  input.keyUp(mockCallback, { preventDefault: true })
  input.element.keyUp(input.element)
  expect(mockCallback.mock.calls).toHaveLength(1)
})
