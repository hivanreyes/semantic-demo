import React from 'react';
import { Button } from '../../components';
import style from '../../styles/components/_initiatives.scss';

const Initiatives = () => (
  <div className={style.initiativeContainer}>
    <img
      src="https://openexplorer.nationalgeographic.com/assets/images/heropictures/Core_017_BrandImages2016-2017_2048.jpg"
      className={style.image}
      alt="Exploration for everyone"
    />
    <div className={style.centered}>
      <Button label="Learn more about Open Explorer" />
    </div>
  </div>
);

export default Initiatives;
