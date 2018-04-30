import React from 'react';
import Slider from 'react-slick';
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

const Popular = () => (
  <div className={style.sliderExpeditions}>
    <Slider {...settings}>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
      <div>
        <ExpeditionCard />
      </div>
    </Slider>
  </div>
);

export default Popular;
