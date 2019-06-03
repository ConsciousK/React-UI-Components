import React from 'react';
import './Header.css';
import './ImageThumbnail'
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
const HeaderContainer = () => {
    return (
        <div className="HeaderContainer">
            <ImageThumbnail />
            <HeaderTitle />
        </div>
    );
  };
  
  export default HeaderContainer;