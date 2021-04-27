import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'


const Button = ({ icon }) => {
  return (

    <div className={`button ${icon}`} >
      <i className={`fas fa-3x-fa-${icon}`}></i>
      <Button className={`fas fa-3x-fa-${icon}`}></Button>
    </div>
  );
};

export default Button;
