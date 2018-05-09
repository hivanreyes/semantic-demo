import React, { Component } from 'react';
import ReactMapboxGl, { ZoomControl, Cluster, Marker } from 'react-mapbox-gl';
import _ from 'lodash';
import classnames from 'classnames';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import style from '../../styles/components/_mapHome.scss';
import {
  faMapMarker,
  faDotCircle,
} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faMapMarker);

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiamVsZGVyIiwiYSI6ImNqY2psMDU4ZzB5aHUyd25zajlqeHNhdGEifQ.SgWQ-I8Xg7xbiI6AYtjTTg',
  scrollZoom: false,
  touchZoomRotate: false,
  center: [-103.59179687498357, 40.66995747013945],
  zoom: 3,
});

const markers = (data) => {
  if (data.length < 1) return '';
  return data.map((feat, key) => {
    const coor = feat.geometry.coordinates;
    const numberArray = [(Number(coor[0])), (Number(coor[1]))];

    const iconsClassNames = classnames({
      [style.markerIcon]: true,
      [style.orange]: feat.properties.stage.type == 'debriefing',
      [style.green]: feat.properties.stage.type == 'preparation',
      [style.blue]: feat.properties.stage.type == 'underway',
    });

    return (
      <Marker
        key={_.uniqueId('mark-')}
        style={style.marker}
        coordinates={numberArray}
      >
        <FontAwesomeIcon key={_.uniqueId('markIcon-')} icon="map-marker" className={iconsClassNames} />
      </Marker>
    );
  });
};


// in render()
class HomeMap extends Component {

  constructor(props) {
    super(props);
    this.clusterMarker = this.clusterMarker.bind(this);
  }

  clusterMarker(coordinates) {
    return (
      <Marker coordinates={coordinates} key={_.uniqueId('cluster-')}>
        <FontAwesomeIcon key={_.uniqueId('markIcon-')} icon="dot-circle" className={style.clusterIcon}/>
      </Marker>
    );
  }

  render() {
    const { data } = this.props;
    const mark = markers(data);

    return (
      <div className={style.container}>
        <Map
          style='mapbox://styles/mapbox/streets-v9'
          zoom={[1]}
          center={[-16.715447743111905, 17.05898991680172]}
          containerStyle={{
            height: '90%',
            width: '100%',
          }}
        >
          <Cluster ClusterMarkerFactory={this.clusterMarker} zoomOnClick={true}>
            {mark}
          </Cluster>

          <ZoomControl position="top-left" />
        </Map>
        <div className={style.policy}>Boundaries and names shown do not necessarily reflect the map policy of National Geographic.</div>
      </div>
    );
  };
};

export default HomeMap;
