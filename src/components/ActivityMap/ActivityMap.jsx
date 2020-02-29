import React, { Component } from 'react';
import ReactMapGL, {Popup, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Pins from '../Pins/Pins';
import './ActivityMap.scss';
import { withTranslation } from 'react-i18next';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWpvbG9sciIsImEiOiJjazQ0Znp0eHEwZ3ZvM21taXRoYzMxcmo2In0.Ve_XTroM0feG7vGKBYigAA';

class ActivityMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 53.9006,
        longitude: 27.5590,
        zoom: 9.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      places: props.activity
    };
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _onClickMarker = place => {
    this.setState({popupInfo: place});
  };

  _renderPopup() {
    const {popupInfo} = this.state;
    const {t} = this.props;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <div>
            <h2>{popupInfo.title}</h2>
            <p>{t(popupInfo.description)}</p>
          </div>
        </Popup>
      )
    );
  }

  render() {
    const {viewport} = this.state;

    return (
      <div className="map-container">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Pins data={this.state.places} onClick={this._onClickMarker} />

          {this._renderPopup()}

          <div className="fullscreenControlStyle">
            <FullscreenControl />
          </div>
          <div className="navStyle">
            <NavigationControl />
          </div>
          <div className="scaleControlStyle">
            <ScaleControl />
          </div>
        </ReactMapGL>
      </div>
    );
  }
}

export default withTranslation()(ActivityMap);