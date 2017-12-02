import React, { Component } from 'react'
import { Preview } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Sub extends Component {

  constructor(){
    super()
    this.state = {
      postEntry: {
        title: '',
        text: ''
      },
      // posts: [
      //   {title:'iPhoneX Released', text:'Check out this new phone'},
      //   {title:'Elon Musk', text:'Beats Trump'},
      //   {title:'Raspberry Pi', text:'Build circuit board'},
      //   {title:'Amazon Lex', text:'AI from Amazon'}
      // ]
    }
  }


  updateNextPost(attr, event){
    console.log(attr + '===' + event.target.value)
    let updated = Object.assign({}, this.state.postEntry)
    updated[attr] = event.target.value
    this.setState({
      postEntry: updated
    })
  }

  submitPost(){
     console.log('submitPost: ' + JSON.stringify(this.state.postEntry))
     this.props.addPost(this.state.postEntry)
     
    // let updated = Object.assign([], this.state.posts)
    // updated.push(this.state.postEntry)
    // this.setState({
    //   posts: updated
    // })
  }

  render(){
    const posts = this.props.post.all || []

    return(
        <div className="container">
          <div className="row">

              <div className="col-md-4 col-md-offset-2">
                <h2>Tech</h2>
                    { posts.map((post, i) => {
                      return (
                        <Preview {...post} key={i} />
                       )
                     })
                    }
              </div>

              <div className="col-md-4">
                <h3>Submit Comment</h3>
                <input type="text" onChange={this.updateNextPost.bind(this, 'title')} placeholder="Title" className="form-control" /><br />
                <textarea onChange={this.updateNextPost.bind(this, 'text')} placeholder="Text" className="form-control"></textarea><br />
                <button onClick={this.submitPost.bind(this)} className="btn btn-info">Submit</button>
              </div>

          </div>
        </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    post: state.post
  }
}

const dispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(actions.addPost(post))
  }
}

export default connect(stateToProps, dispatchToProps)(Sub)
