import React from 'react';
import Slider from 'react-slick';
import { ObservationCard } from '../../components';
import style from '../../styles/components/_sliderObservations.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Popular = () => (
  <div className={style.sliderObservations}>
    <Slider {...settings} className={style.slider}>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
      <div>
        <ObservationCard />
      </div>
    </Slider>
  </div>
);

export default Popular;
