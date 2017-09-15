// @flow
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { geolocated } from 'react-geolocated';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet-universal';

import MapCss from './MapCss';

const MapComponent = styled.div`
    ${MapCss};
    width: 100%;
    height: 100%;
    min-height: 650px;
    border: solid 1px red;
`;

/* const mapIcon = Icon({
  iconUrl: 'static/images/marker-icon.png',
  iconSize: [24, 24],
}); */

class Map extends PureComponent<Object, Object> {
  static propTypes = {
    ...LeafletMap.PropTypes,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isGeolocationAvailable, isGeolocationEnabled, coords, locations, showMyLocation } = this.props;
    const position = !isGeolocationAvailable || !isGeolocationEnabled || !coords ? [0, 0] : [this.props.coords.latitude, this.props.coords.longitude];
    console.log('position', position);
    return (
      <MapComponent>
        <LeafletMap center={position} zoom={12} style={{ width: '100%', height: '650px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          { (!isGeolocationAvailable || !isGeolocationEnabled || !coords) && !showMyLocation ? 'Geolocation disabled' :
            <Marker position={position}>
            <Popup>
                <span>{position}</span>
              </Popup>
          </Marker>
          }
        </LeafletMap>
      </MapComponent>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Map);
