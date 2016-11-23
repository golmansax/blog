import React from 'react';
import { render } from 'react-dom';
import ImageModal from '../lib/components/ImageModal';
import './css/main.scss';

render(<ImageModal />, global.document.getElementById('image-modal'));
