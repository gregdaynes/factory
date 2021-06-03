"use strict"

module.exports = function factory(defaultProperties = {}) {
  const config = {}
  const props = {}

  for (let [key, value] of Object.entries(defaultProperties)) {
    const obj = key.charAt(0) === "$" ? config : props
    obj[key] = value
  }

  return function factory(newProperties = {}) {
    let state = Object.assign({}, props, newProperties)

    for (let [key, value] of Object.entries(state)) {
      if (typeof value === "function") {
        state[key] = value()
      } else if (value === null) {
        state[key] = null
      } else if (value === undefined) {
        delete state[key]
      } else {
        state[key] = value
      }
    }

    if (config.$save) {
      Object.defineProperty(state, "save", {
        // bind state to this, but if fat arrows are being used
        // the first argument will be the same
        value: config.$save.bind(state, state),
      })
    }

    return state
  }
}
