import React from 'react';
import TruncateMarkup from 'react-truncate-markup';
import { Button } from '../../components';
import _ from 'lodash';
import style from '../../styles/components/_featured.scss';

const Featured = (data) => {
  const firstLocation = data.data.firstLocation + ' ' + data.data.duration;
  let description = _.replace(data.data.description, /<(?:.|\n)*?>/gm, '');
  description = _.replace(description, /&lt;(?:.|\n)*?&gt;/gm, '');

  return (
    <div className={style.featuredContainer}>
      <img
        src={data.data.banner}
        className={style.image}
        alt={data.name}
      />
      <div className={style.descriptionContainer}>
        <div className={style.position}>
          {firstLocation}
        </div>
        <div className={style.title}>
          <TruncateMarkup lines={1}>
            <div>
              {data.data.name}
            </div>
          </TruncateMarkup>
        </div>
        <div className={style.description}>
          <TruncateMarkup lines={4}>
            <div>
              {description}
            </div>
          </TruncateMarkup>
        </div>
        <div className={style.buttons}>
          <Button buttonType={'PRIMARY'} size={'SMALL'} label="Follow" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
