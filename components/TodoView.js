class TodoView extends View {
  render () {
    const { todos, title } = this.model
    return `
      <h1>${title}</h1>
      <input type='text' placeholder='Enter your todo here...' />
      <ul>
        ${todos.map(todo => `<li>${todo.text}</li>`)}
      </ul>
    `
  }
}
