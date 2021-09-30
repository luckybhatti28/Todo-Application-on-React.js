import React, { Component } from "react";
import "./index.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      value: ''
    }
  }
  add_todo = () => {
    let obj = { title: this.state.value };
    this.setState({
      todos: [...this.state.todos, obj],
      value: ''
    })
  }
  DelteAll_Todo = (index) => {
    this.state.todos.splice(index)
    this.setState([])
  }

  Delte_Todo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }
  edit_todo = (index, val) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }
  hangleChange = (e, index) => {
    this.state.todos[index].title = e.target.value;
    this.setState({
      todos: this.state.todos
    })
  }
  update = (index) => {
    this.state.todos[index].edit = false;
    this.setState({
      todos: this.state.todos
    })
  }


  render() {
    let { todos, value } = this.state;

    return (

      <div style={{ textAlign: "center" }}>
        <h1 className="heading">Todo Application</h1>

        <br />

        <input className="iput" type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder='Enter Your Todo' />
        <br />
        <button className="Btn_iput AddBtn" type="button" onClick={this.add_todo}>Add Item</button>
        <button className="Btn_iput DelteBtn" type="button" onClick={(i) => this.DelteAll_Todo(i)}>Delete All</button>
        <ul>
          {todos.map((v, i) => {
            return <li className="li_text" key={i}>
              {v.edit ? <input className="li_iput" value={v.title} type="text" onChange={(e) => this.hangleChange(e, i)} /> : v.title}
              <div className="li_bttn">
              {v.edit ?
                <button className="Btn_li Update_btn" onClick={() => this.update(i)}>Update</button>
                :
                <button className="Btn_li Edit_Btn" type="button" onClick={() => this.edit_todo(i)}>Edit</button>
              }
              <button className="Btn_li Delte_Btn" type="button" onClick={() => this.Delte_Todo(i)}>Delete</button>
              </div>
            </li>
          })}
        </ul>
      </div>

    )
  }
}

export default App;