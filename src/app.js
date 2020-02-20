import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Styleguide from './components/StyleGuide/StyleGuide';
import Team from './components/Team/Team';
import Authors from './components/Authors/Authors';
import Worklog from './components/Worklog/Worklog';
import AuthorDescription from './components/AuthorDescription/AuthorDescription';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

// PARTICIPANTS

// import Yahor from './assets/images/first-cat.jpg';
// import Sergey from './assets/images/second-cat.jpg';
// import Anton from './assets/images/third-cat.jpg';
// import Ilya from './assets/images/fourth-cat.jpg';
// import Natalia from './assets/images/fifth-cat.jpg';
// import Artsiom from './assets/images/sixth-cat.jpg';

class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/authors">
              <Authors />
            </Route>
            <Route path="/authors/:id">
              <AuthorDescription />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/worklog">
              <Worklog />
            </Route>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
          </Switch>
          <Footer />
      </Router>
    )
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="head-wrapp d-flex justify-content-center">
//         <div className="head d-flex flex-column align-items-center justify-content-center">
//           <nav className="lang d-flex align-items-center justify-content-center">
//             <div className="main">
//               <ul className="list">
//                 <li className="item">RU
//                   <ul className="sub-list">
//                     <li className="sub-item">ENG</li>
//                     <li className="sub-item">BLR</li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//           <div className="app-name"><span>Писатели Беларуси</span></div>
//           <div className="head-buttons-block">
//             <button type="button" className="btn btn-dark head-buttons">На главную</button>
//             <button type="button" className="btn btn-dark head-buttons">Список писателей</button>
//           </div>
//         </div>  
//       </header>
//     )
//   }
// }

// class About extends React.Component {
//   render() {
//     return(
//       <div className="about-wrapp d-flex align-items-center justify-content-center">
//         <div className="about d-flex flex-column align-items-center justify-content-center">
//           <h1>О портале</h1>
//           <p>
//             Белорусская литература условно делится на несколько периодов: 
//             «Давняя (древняя) белорусская литература» (ХI—ХVІІ вв.), 
//             «Новая беларуская литература» (перв.пол. XVIII—ХІХ в.в.), 
//             и «Новейшая белорусская литература» (литература от начала ХХ в.). 
//             Литература первой половины XVIII в. определяется как «Литература переходного периода» — время, 
//             когда формировались основы новой поэтики. 
//             Литература второй половины XVIII ст. – первой четверти ХІХ ст. 
//             именуется как «Литература эпохи Просветительства». 
//             Белорусскую литературу от середины 20-х гг. до конца ХІХ в. 
//             воодушевляла романтичная мысль про национальное Возрождение. 
//             Романтичный пафос этого этапа предопределяет и его название — «Литература эпохи романтизма»
//           </p>
//         </div>
//       </div>  
//     )
//   }
// }

// class Autor extends React.Component {
//   render() {
//     return (
//       <div className="autor-wrapp d-flex justify-content-center">
//         <div className="day-autor d-flex flex-column align-items-center">
//           <h1>Автор дня</h1>
//           <button type="button" className="btn btn-dark">Подробнее</button>
//         </div>
//       </div>
//     )
//   }
// }    

// class Team extends React.Component {
//   render() {
//     return (
//       <div className="about-team-wrapp d-flex align-items-center justify-content-center">
//         <div className="about-team d-flex flex-column align-items-center justify-content-center">
//           <h1 className="our-team">Наша команда</h1>
//           <div className="team d-flex flex-wrap align-items-center justify-content-center">
//             <div className="participant d-flex flex-column align-items-center">
//               <img className="team-img" src={Yahor} alt = "Yahor"/>
//               <h2>Yahor Shulha</h2>
//             </div>
//             <div className="participant">
//               <img className="team-img" src={Sergey} alt = "Sergey"/>
//               <h2>Sergey Potapov</h2>
//             </div>
//             <div className="participant">
//               <img className="team-img" src={Anton} alt = "Anton"/>
//               <h2>Anton Yanovskyi</h2>
//             </div>
//             <div className="participant">
//               <img className="team-img" src={Ilya} alt = "Ilya"/>
//               <h2>Ilya Androsau</h2>
//             </div>
//             <div className="participant">
//               <img className="team-img" src={Natalia} alt = "Natalia"/>
//               <h2>Natalia Zarubina</h2>
//             </div>
//             <div className="participant">
//               <img className="team-img" src={Artsiom} alt = "Artsiom"/>
//               <h2>Artsiom Lipchyk</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }    

// class Footer extends React.Component {
//   render() {
//     return(
//       <div className="footer-wrapp d-flex justify-content-center">
//         <footer className="footer d-flex justify-content-center">
//           Сайт разработан GROUP-20, RS 2019Q3
//         </footer>
//       </div>
//     )
//   }
// }

export default App;