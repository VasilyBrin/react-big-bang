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
    pageTitle: 'React components',
    showPosts: false
  }

  togglePostsHandler = () => {
    this.setState ({
      showPosts: !this.state.showPosts
    })
  }

  onChangeName(name, index) {
    const post = this.state.posts[index]
    post.name = name
    const posts = [...this.state.posts]
    posts[index] = post
    this.setState({ posts })
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    let posts = null

    if (this.state.showPosts) {
      posts = this.state.posts.map((post, index) => {
        return (
        <Post
          key={index}
          name={post.name}
          year={post.year}
          onChangeName={event => this.onChangeName(event.target.value, index)} 
        />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.togglePostsHandler}
        >Toggle posts</button>
          { posts }
        </div>
     );
  }
}

export default App;
