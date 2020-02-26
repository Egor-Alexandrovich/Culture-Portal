import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';

function PhotoGallery({gallery}) {
  return <ImageGallery items={gallery} />;
}

export default PhotoGallery;