import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
  render () {
    if (!this.props.user) return (<h5>Select a user!</h5>)
    return (
      <div>
        <img src={ this.props.user.thumbnail } alt={ this.user.user.first + ' image' } title={ this.user.user.first + ' image' } />
        <h2>{ this.props.user.first } { this.props.user.last }</h2>
        <h4>Age: { this.props.user.age }</h4>
        <p>Description: { this.props.user.description }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
