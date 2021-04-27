import React, { useState, useEffect } from 'react';

const Laskuri = () => {
  const [ maara, asetaMaara ] = useState(1);

  const increment = () => asetaMaara(maara + 1);

  return <p onClick={increment}>{ maara }</p>;
}

export default Laskuri;
