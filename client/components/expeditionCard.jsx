import React from 'react';
import Button from './button';
import _ from 'lodash';
import TruncateMarkup from 'react-truncate-markup';
import style from '../styles/components/_expeditionCard.scss';

const ExpeditionCard = ({ data }) => {
  let postLabel = 'post';
  if (data.postCount !== 1) postLabel = 'posts';
  const firstLocation = data.firstLocation + ' ' + data.duration;
  return (
    <div className={style.containerExpCard}>
      <img className={style.headerImg} src={data.banner} alt={data.name} />
      <div className={style.detailsCard}>
        <div className={style.titleCard}>
          <TruncateMarkup lines={1}>
            <div>
              {data.name}
            </div>
          </TruncateMarkup>

        </div>
        <div className={style.subTitle}>
          <TruncateMarkup lines={1}>
            <div>
              <span>
                {firstLocation}
              </span>
            </div>
          </TruncateMarkup>
        </div>
        <div className={style.description}>
          <TruncateMarkup lines={8}>
            <div>
              <span>
                {_.replace(data.description, /<(?:.|\n)*?>/gm, '')}
              </span>
            </div>
          </TruncateMarkup>
        </div>
        <div className={style.post}>
          <span className={style.number}>{data.postCount}</span>
          <span className={style.postText}>{postLabel}</span>
        </div>
        <div className={style.buttons}>
          <Button buttonType={'PRIMARY'} size={'SMALL'} label="Follow" />
        </div>
      </div>
    </div>
  );
};

export default ExpeditionCard;
