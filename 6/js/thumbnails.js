const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, description, comments, likes}) => {
  const picElement = pictureTemplate.cloneNode (true);
  picElement.querySelector('.picture_img').src = url;
  picElement.querySelector('.picture_img').alt = description;
  picElement.querySelector('.picture_comments').textContent = comments.length;
  picElement.querySelector('.picture_likes').textContent = likes;

  return picElement;
};

const renderThumbnail = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const picElement = createThumbnail (picture);
    fragment.append(picElement);
  });
  container.append(fragment);
};

export {renderThumbnail};
