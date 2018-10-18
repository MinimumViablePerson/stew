# Stew (State View)

## Intro
Welcome to Stew, just create your state, and each view you create will stay in sync with it when it changes!
This is a tiny framework-like concept I built for fun and to practice some JavaScript, I hope you like it! (Work in progress)

## How to use it
The idea is simple. First, you create a model, like so:
```js
const todoStore = new Model({
	title: 'Welcome to my Todo App!',
	todos: [],
	showCompleted: false
})
```
Next, you create a view that will use data from that model:
```js
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
```
Instanciate it with a target element and the model you want to use:
```js
const todoView = new TodoView(document.body, todoStore)
```

And that's it! Now you can just go ahead and change any of the model properties, and the view will auto re-render to stay in sync.
