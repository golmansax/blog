import React, { Component } from 'react';
import { PhotoSwipe } from 'react-photoswipe';
import imagesData from '../../data/imagesData.json';

// Create Map from url -> image
const IMAGE_LOOKUP = new Map(imagesData.map((image) => {
  return [image.url, image];
}));

export default class ImageModal extends Component {
  state = {
    activeImage: null,
  };

  componentWillMount() {
    document.querySelectorAll('.ZoomableImage').forEach((el) => {
      const src = el.getAttribute('src');
      console.log(src);
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.setState({ activeImage: IMAGE_LOOKUP.get(src) });
      });
    });
  }

  render() {
    const { activeImage } = this.state;
    console.log(activeImage);

    return (
      <PhotoSwipe
        isOpen={Boolean(activeImage)}
        items={activeImage ? [{
          src: activeImage.url,
          w: activeImage.width,
          h: activeImage.height,
          title: activeImage.title,
        }] : []}
        options={{
          fullscreenEl: false,
          shareEl: false,
        }}
        onClose={this.closeModal}
      />
    );
  }

  closeModal = () => this.setState({ activeImage: null });
}
