import React from 'react';
import css from './Author.module.css'

function Author(props) {
    return (
        <div className={css.main}>
            <div><img alt='Фото писателя' src={props.state[1].photo} className={css.imgimg}></img></div>
            <div>
                <h2>{props.state[1].name}</h2>
                <p>{props.state[1].yearsOfLife}</p>
            </div>
            <div>{props.state[1].about}</div>
            <div> ID :{props.state[1].id}</div>
        </div>
    );
}

export default Author;