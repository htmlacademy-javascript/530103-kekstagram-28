
import './util.js';
import './data.js';

import {getPhotos} from './data.js';
import {renderThumbnail} from './thumbnails';
renderThumbnail(getPhotos());

