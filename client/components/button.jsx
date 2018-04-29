import React from 'react';
import { Button } from 'react-bootstrap';
import style from '../styles/components/_button.scss';

const WrappedButton = (props) => {
  const { label } = props;
  return (
    <Button className={style.button}>
      {label}
    </Button>
  );
};

export default WrappedButton;
