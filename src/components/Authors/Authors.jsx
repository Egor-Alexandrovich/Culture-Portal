import React, { Component } from 'react';
import Author from './Author/Author';
import css from './Authors.module.css'

class Authors extends Component {


render() {
  return (
    <div className={css.main} >
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
      <Author state={this.props.state} />
    </div>
  )
}
}

export default Authors;