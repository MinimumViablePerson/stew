
const Model = (() => {
  let nextId = 1

  return class {
    constructor (state) {
      this.state = {}
      this.events = []
      this.notify = (obj, key, value) => this.events.forEach(event => event(obj, key, value))
      this.defineProperties(state)
      this.id = nextId++
      return new Proxy(this, {
        get: function (obj, key) {
          return key === 'addEvent'
            ? obj.addEvent.bind(obj)
            : obj.state[key]
        },
        set: function (obj, key, value) {
          obj.state[key] = value
          obj.notify(obj.state, key, value)
        }
      })
    }

    defineProperties (properties) {
      Object.entries(properties).forEach(([key, value]) => {
        Object.defineProperty(this.state, key, { value, writable: true })
      })
    }

    addEvent (event) {
      this.events.push(event)
    }
  }
})()
