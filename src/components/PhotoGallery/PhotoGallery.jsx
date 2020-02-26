import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "./PhotoGallery.scss"


function PhotoGallery({gallery}) {
  return (
    <div className='photo-gallery'>
      <ImageGallery items={gallery}
        showBullets = {true}
        disableSwipe = {true}
      />;
    </div>
  );
}

export default PhotoGallery;