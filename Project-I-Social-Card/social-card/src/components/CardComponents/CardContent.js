import React from 'react';
import './Card.css';

function CardContent() {
    return (
      <div className="CardContent">
          <h3 className="headline">Get Started with React</h3>
          <p className="content">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
          <div className="url">reactjs.org</div>
      </div>
    );
  };

  export default CardContent;