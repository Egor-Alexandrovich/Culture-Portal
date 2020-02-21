import React , { Component } from 'react';
import css from './Author.module.css'

class Author extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          id :0
        };
      }

    render() {
        return (
            <div className={css.main}>
                <div><img alt='Фото писателя' src={this.props.state.autorPage[0].image} className={css.imgimg}></img></div>
                <div>
                    <h2>{this.props.state.autorPage[0].name}</h2>
                    <p>{this.props.state.autorPage[0].yearsOfLife}</p>
                </div>
                <div>{this.props.state.autorPage[0].shortInfo}</div>
                <div>{this.props.state.autorPage[0].id}</div>
            </div>
        )
    }
}

// function Author(props) {
//     return (
//         <div className={css.main}>
//             <div><img alt='Фото писателя' src={props.state.autorPage[0].image} className={css.imgimg}></img></div>
//             <div>
//                 <h2>{props.state.autorPage[0].name}</h2>
//                 <p>{props.state.autorPage[0].yearsOfLife}</p>
//             </div>
//             <div>{props.state.autorPage[0].shortInfo}</div>
//             <div>{props.state.autorPage[0].id}</div>
//         </div>
//     );
// }

export default Author;