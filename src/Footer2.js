import React from 'react';
import Button from './Button';

import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer2 = () => {
  return (
    <div class = "footer2">
      <div><FontAwesomeIcon icon={faHeartBroken} /></div>
    </div>
  );
};

export default Footer2;
