import React from 'react';
import { ReactComponent as WebsiteSVG } from '../../../../assets/websiteSVG.svg';

const index = () => {
  return (
    // <div className="hero__right">
    //     <iframe className="video" 
    //     src="https://www.youtube.com/embed/AYJMpRvQbYY"
    //     title="Deploy a website to github pages 2021" 
    //     allowFullScreen></iframe>
    // </div>
    <div className="hero__right">
      <div className="hero__right--img">
        <WebsiteSVG />
      </div>
    </div>
  )
}

export default index;