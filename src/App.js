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

  changeTitleHendler = pageTitle => {
    this.setState({ pageTitle })
  }


  render () {
    const divStyle = {
      textAlign: 'center'
    }

  return (
    <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <button onClick={this.togglePostsHandler}
      >Toggle posts</button>

     {this.state.showPosts
          ?this.state.posts.map((post, index) => {
            return (
              <Post
              key={index}
              name={post.name}
              year={post.year}
              onChangeTitle={() => this.changeTitleHandler(post.name)} 
            />
            )
          })
          : null
        }
      </div>
     );
  }
}

export default App;
