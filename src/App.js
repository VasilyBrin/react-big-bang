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

changeTitleHendler = () => {
  const oldTitle = this.state.pageTitle
  const newTitle = oldTitle + ' (changed)'
  this.setState({
    pageTitle: newTitle
  })
}

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    const posts = this.state.posts

  return (
    <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>

      <button onClick={this.changeTitleHendler}>Change title</button>

      <Post 
      name={posts[0].name} 
      year={posts[0].year}
      onChangeTitle={this.changeTitleHendler.bind(this, posts[0].name)} 
      />
      <Post 
      name={posts[1].name} 
      year={posts[1].year}
      onChangeTitle={() => this.changeTitleHendler(posts[1].name)} 
      />
      <Post 
      name={posts[2].name} 
      year={posts[2].year}
      onChangeTitle={() => this.changeTitleHendler(posts[2].name)} 
      />
      </div>
  );
  }
}

export default App;
