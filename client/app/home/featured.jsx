import React from 'react';
import style from '../../styles/components/_featured.scss';

const Featured = () => (
  <div className={style.featuredContainer}>
    <img
      src="https://s3.amazonaws.com/openexplorer-natgeo-assets/images/07d30691-4e37-424e-991d-853427e72881-large.jpg?v=x"
      className={style.image}
      alt="Exploration for everyone"
    />
  </div>
);

export default Featured;
