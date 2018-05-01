import React from 'react';
import style from '../styles/components/_observationCard.scss';

const ObservationCard = () => {
  return (
    <div className={style.containerObsCard}>
      <div className={style.content}>
        <div className={style.titleCard}>
          Investigatin local
        </div>
        <div className={style.subTitle}>
          Point Reyes Station, California
        </div>
        <div className={style.description}>
         Our goal for this expedition is to hunt down six creatures in New England that exhibit bioluminosity and one psuedo-luminious plant. Though we will start with the familiar firefly, our journey will take us from the sea to the dark swamps and forests. Using our OpenROV and being patient
        </div>
        
        <img className={style.image} src="https://s3.amazonaws.com/openexplorer-natgeo-assets/images/84dd94a4-8bd1-4c2a-86b2-451d53053c79-large.jpg?v=x" alt="asd" />
        <div className={style.post}>
          <span className={style.number}>1</span>
          <span className={style.postText}>post</span>
        </div>
      </div>
    </div>
  );
};

export default ObservationCard;
