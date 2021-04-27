import React from 'react';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeartBroken, faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div class = "footer">
      <div><FontAwesomeIcon icon={faHeart} /></div>
    </div>
  );
};

export default Footer;
