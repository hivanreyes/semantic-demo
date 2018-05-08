import React from 'react';
import _ from 'lodash';
import TruncateMarkup from 'react-truncate-markup';
import style from '../styles/components/_observationCard.scss';

const ObservationCard = ({ data }) => {
  let postLabel = 'post';
  if (data.commentsCount !== 1) postLabel = 'posts';
  return (
    <div className={style.containerObsCard}>
      <div className={style.content}>
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
                {data.locationName}
              </span>
            </div>
          </TruncateMarkup>
        </div>
        <div className={style.description}>
          <TruncateMarkup lines={4}>
            <div>
              <span>
                {_.replace(data.shareText, /<(?:.|\n)*?>/gm, '')}
              </span>
            </div>
          </TruncateMarkup>
        </div>
        <img className={style.image} src={data.media} alt={data.name} />
        <div className={style.post}>
          <span className={style.number}>{data.commentsCount}</span>
          <span className={style.postText}>{postLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default ObservationCard;
