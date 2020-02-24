import React, { Component } from 'react';
import AuthorApiService from '../../services/authorapi-service';
import { withRouter } from 'react-router-dom';

class Authors extends Component {
  componentDidMount() {
    this.updateAuthors();
  }
  apiService = new AuthorApiService();
  state = {
    loading: true,
    data : null,
  }
  updateAuthors () {
    this.apiService.getAllAuthors()
      .then((data) => {
        this.setState({
          data: data,
          loading: false
        });
      })
  }
  renderAuthors(arr) {
    return arr.map((item) => {
      const { id, name } = item;
      const idStr = id+"";
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => {
              this.props.history.push(`/authors/${idStr}`)
            }}
            >
          {name}{id}
        </li>
      );
    });
  }
  render () {
    console.log(this.state);
    const { data } = this.state;

    if (!data) {
      return <div>
        <h2>Писатели Беларуси</h2>
      </div>;
    }

    const items = this.renderAuthors(data);
    return (
      <div>
        <h2>Писатели Беларуси</h2>
        <ul className="item-list list-group">
          {items}
        </ul>
      </div>
      
    )
  }
}
export default withRouter(Authors);