import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AuthorsData from './data/AuthorsData';


ReactDOM.render(<App state={AuthorsData}/>,
    document.getElementById('root'));


