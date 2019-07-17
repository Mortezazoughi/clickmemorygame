import React from 'react';
import image from './mystery-background.png';

const Header = () => (
  <header className="header" style={headerStyle}>
    <h1>Click Memory Game!</h1>
    <h3>Test your memory in this game.</h3>
    <h3>
      Click on an image to gain a point and if
      <h3> you click on the same image twice,</h3>
    </h3>
    <h2 style={{ fontStyle: 'italic' }}>GAME WILL BE OVER.</h2>
  </header>
);

const headerStyle = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  color: '#fff',
  minHeight: '90px',
  backgroundSize: 'cover',
  padding: '85px 60px 5px 40px',
  textAlign: 'right'
};

export default Header;
