const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, description, comments, likes, id}) => {
  const picElement = pictureTemplate.cloneNode (true);
  picElement.querySelector('.picture__img').src = url;
  picElement.querySelector('.picture__img').alt = description;
  picElement.querySelector('.picture__comments').textContent = comments.length;
  picElement.querySelector('.picture__likes').textContent = likes;
  picElement.dataset.thumbnailId = id;
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
