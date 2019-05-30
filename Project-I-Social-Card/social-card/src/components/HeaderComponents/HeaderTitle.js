import React from 'react';
import './Header.css';
import './HeaderContent';
import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
    <div className="HeaderTitle">  
        <h3 className="main">Lambda School</h3><span className="stamp">@Lambda School - 26 Jan.</span>
        <HeaderContent />
    </div>
    );
};

export default HeaderTitle;