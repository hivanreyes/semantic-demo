import React from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';
import style from '../styles/components/_button.scss';

const TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const SIZE = {
  BIG: 'BIG',
  SMALL: 'SMALL',
};

const getButtonClassNames = ({ buttonType, size }) => (
  classnames({
    [style.button]: true,
    [style.primary]: buttonType === TYPE.PRIMARY,
    [style.secondary]: buttonType === TYPE.SECONDARY,
    [style.big]: size === SIZE.BIG,
    [style.small]: size === SIZE.SMALL,
  })
);

const WrappedButton = (props) => {
  const { label } = props;
  const buttonClassNames = getButtonClassNames(props);
  return (
    <Button className={buttonClassNames}>
      {label}
    </Button>
  );
};

export default WrappedButton;
