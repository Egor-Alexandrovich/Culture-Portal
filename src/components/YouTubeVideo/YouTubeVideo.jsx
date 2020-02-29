import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import './YouTubeVideo.scss';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class YouTubeVideo extends Component {
  constructor({videoId}) {
    super()
    this.state = {
      isOpen: false,
      videoId: videoId
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal() {
    this.setState({isOpen: true})
  }
 
  render() {
    return (
      <div className="wrapper">
        <div className="content">
          <h2>Видео об авторе:</h2>
          <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
          <button className="btn btn-dark" onClick={this.openModal}>Смотреть</button>
        </div>   
      </div>
    )
  }
}

export default YouTubeVideo;