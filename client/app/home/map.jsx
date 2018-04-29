import React from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';
import style from '../../styles/components/_mapHome.scss';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiamVsZGVyIiwiYSI6ImNqY2psMDU4ZzB5aHUyd25zajlqeHNhdGEifQ.SgWQ-I8Xg7xbiI6AYtjTTg',
  scrollZoom: false,
  touchZoomRotate: false,
});

// in render()
const HomeMap = () => (
  <div className={style.container}>
    <Map
      style='mapbox://styles/mapbox/streets-v9'
      containerStyle={{
        height: '100%',
        width: '100%',
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
      <ZoomControl position="top-left" />
    </Map>
  </div>
);

export default HomeMap;
