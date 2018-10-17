class View {
  constructor (target, model) {
    this.target = target
    this.model = model

    this.rootEl = document.createElement('div')
    this.rootEl.innerHTML = this.render()
    this.target.appendChild(this.rootEl)
    this.update = () => { this.rootEl.innerHTML = this.render() }
    model.addEvent(this.update)
  }
}
