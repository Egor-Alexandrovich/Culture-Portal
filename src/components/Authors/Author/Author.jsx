import React , { Component } from 'react';
import css from './Author.module.css'

// class Author extends Component {

//     render() {
//         return (
//             <div className={css.main}>
//                 <div><img alt='Фото писателя' src={this.props.state.image} className={css.imgimg}></img></div>
//                 <div>
//                     <h2>{this.props.state.name}</h2>
//                     <p>{this.props.state.yearsOfLife}</p>
//                 </div>
//                 <div>{this.props.state.shortInfo}</div>
//                 <div>{this.props.state.id}</div>
//             </div>
//         )
//     }
// }

function Author(props) {
    return (
        <div className={css.main}>
            <div><img alt='Фото писателя' src={props.state.image} className={css.imgimg}></img></div>
            <div>
                <h2>{props.state.name}</h2>
                <p>{props.state.yearsOfLife}</p>
            </div>
            <div>{props.state.shortInfo}</div>
            <div>{props.state.id}</div>
        </div>
    );
}

export default Author;