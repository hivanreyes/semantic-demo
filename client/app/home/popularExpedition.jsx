import React, { Component } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';
import { ExpeditionCard } from '../../components';
import style from '../../styles/components/_sliderExpeditions.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Popular = ({ expeditions }) => {
  let sliders = <div>No results</div>;

  if (expeditions.length) {
    sliders = expeditions.map(item => <div key={_.uniqueId('slider-')}><ExpeditionCard key={_.uniqueId('slider-')} data={item} /></div>);
  }

  return (
    <div className={style.sliderExpeditions}>
      <Slider {...settings} className={style.slider}>
        {sliders}
      </Slider>
    </div>
  );
};

export default Popular;
