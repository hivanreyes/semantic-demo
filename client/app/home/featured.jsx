import React from 'react';
import { Button } from '../../components';
import style from '../../styles/components/_featured.scss';

const Featured = () => (
  <div className={style.featuredContainer}>
    <img
      src="https://s3.amazonaws.com/openexplorer-natgeo-assets/images/07d30691-4e37-424e-991d-853427e72881-large.jpg?v=x"
      className={style.image}
      alt="Exploration for everyone"
    />
    <div className={style.descriptionContainer}>
      <div className={style.position}>
        GIRONA, SPAIN, APR 15 2018
      </div>
      <div className={style.title}>
        Hidden deserts - discovering barrens worldwide
      </div>
      <div className={style.description}>
        Underwater macroalgal forests are among the most important ecosystems in our oceans. Their fronds and branches create a rich canopy, which harbors a diversity of species that are critical to nearshore trophic networks. Additionally, macroalgal forests offer a wide range of goods and services to populations living on the coast. They help ensure high water quality, provide refuge to species of
      </div>
      <div className={style.buttons}>
        <Button buttonType={'PRIMARY'} size={'SMALL'} label="Follow" />
      </div>
    </div>
  </div>
);

export default Featured;
