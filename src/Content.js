import React from 'react';

const Content = (props) => {

  return (
    <main>
      <div className="kuonot" id="card">
        <h3 className="title">{props.title}</h3>

        <img className="image" src={props.pic} alt={props.title}></img>
      </div>
    </main>
  );
};

export default Content;
