import React, {Component} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {list: [], error: {}, title: ''};
    this.request = this.request.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getComments = this.getComments.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.changeListTo = this.changeListTo.bind(this);
  }

  changeListTo(list, title) {
    this.setState({list: list, title});
  }

  async getUsers() {
    let users = await this.request('https://jsonplaceholder.typicode.com/users');
    this.changeListTo(users, 'users');
  };

  async getComments() {
    let comments = await this.request('https://jsonplaceholder.typicode.com/comments');
    this.changeListTo(comments, 'comments');
  }

  async getTodos() {
    let todos = await this.request('https://jsonplaceholder.typicode.com/todos');
    this.changeListTo(todos, 'todo list');
  }

  async getPosts() {
    let posts = await this.request('https://jsonplaceholder.typicode.com/posts');
    this.changeListTo(posts, 'posts');
  }

  async request(url) {
    try {
      let response = await axios.get(url);
      return response.data;
    } catch (error) {
      this.setState({list: [], error});
      throw error;
    }
  }

  render() {
    if (this.state.error.message) return (<h1>{this.state.error.message}</h1>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Async/Await React example</h1>
        </header>
        <div>
          <button type="button" onClick={this.getUsers}>Get users</button>
          <button type="button" onClick={this.getComments}>Get comments</button>
          <button type="button" onClick={this.getPosts}>Get posts</button>
          <button type="button" onClick={this.getTodos}>Get todo list</button>
        </div>
        <div>
          <List list={this.state.list} title={this.state.title}/>
        </div>
      </div>
    );
  }
}

export default App;
