import React from 'react';
import Button from './button';
import style from '../styles/components/_expeditionCard.scss';

const ExpeditionCard = () => {
  return (
    <div className={style.containerExpCard}>
      <img className={style.headerImg} src="https://images-openexplorer.nationalgeographic.com/ba192b3c-a515-49bf-838a-91d15fe0c308-large.jpg?v=x" alt="asd" />
      <div className={style.detailsCard}>
        <div className={style.titleCard}>
          Investigatin local
        </div>
        <div className={style.subTitle}>
          Point Reyes Station, California
        </div>
        <div className={style.description}>
         Our goal for this expedition is to hunt down six creatures in New England that exhibit bioluminosity and one psuedo-luminious plant. Though we will start with the familiar firefly, our journey will take us from the sea to the dark swamps and forests. Using our OpenROV and being patient 
        </div>
        <div className={style.post}>
          <span className={style.number}>1</span>
          <span className={style.postText}>post</span>
        </div>
        <div className={style.buttons}>
          <Button label="Follow" />
        </div>
      </div>
    </div>
  );
};

export default ExpeditionCard;
