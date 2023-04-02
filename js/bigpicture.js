const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

bigPicture.addEventListener ('click', ({url, description, comments, likes, socialcomments}) =>{
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.social__caption').alt = description;
  bigPicture.querySelector('.comments-count').textContent = comments;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comments') = socialcomments;
  socialCommentCount.classList.remove('.social__comment-count');
  commentsLoader.classList.remove('.comments-loader');
  bigPicture.classList.add
});


