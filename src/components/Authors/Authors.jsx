import React , { Component } from 'react';
import Author from './Author/Author';
import css from './Authors.module.css'

class Authors extends Component {

// constructor(props) {
//   super(props);
  
//   this.state = {
//     id :0
//   };
// }

  render() {
    return (
      <div className={css.main}>
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


// function Authors(props) {
//   return (
//     <div className={css.main}>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//         <Author state={props.state}/>
//     </div>
//   );
// }

export default Authors;