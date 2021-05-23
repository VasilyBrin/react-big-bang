import React, { Component } from 'react';
import './App.css';
import Post from './components/Post/Post'

class App extends Component {
  state = {
    posts: [
      {name: 'Basil', year: 1957},
      {name: 'Kate', year: 1996},
      {name: 'Alex', year: 1986}
    ],
    pageTitle: 'React components'
  }

changeTitleHendler = (newTitle) => {
  this.setState({
    pageTitle: newTitle
  })
}

handleInput = (event) => {
  this.setState ({
    pageTitle: event.target.value
  })
}

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    // const posts = this.state.posts

  return (
    <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <input type="text" onChange={this.handleInput}/>

      <button 
      onClick={this.changeTitleHendler.bind(this, 'Changed!')}
      >Change title</button>

      {
        this.state.posts.map((post, index) => {
          return (
            <Post
              key={index}
              name={post.name}
              year={post.year}
              onChangeTitle={() => this.changeTitleHandler(post.name)} 
            />
          )
        })
      }
      </div>
     );
  }
}

export default App;
