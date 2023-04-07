import { getRandomArrayElement } from './util.js';
import { getRandomInteger } from './util.js';
const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const MIN_LIKES_PHOTO = 15;
const MAX_LIKES_PHOTO = 200;
const COMMENTS_COUNT = 5;
const COMMENTS_PHOTOS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESRIPTIONS_PHOTOS = [
  'Это я кушаю',
  'Это я сплю',
  'Это я гуляю',
  'Это я ловлю мышей',
  'Это я со своим другом',
  'Это я бегаю'
];

const FIRST_NAMES = ['Cергей', 'Владимир', 'Андрей', 'Денис', 'Павел', 'Артем'];


const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1,2)}, () =>
    getRandomArrayElement(COMMENTS_PHOTOS)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(FIRST_NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESRIPTIONS_PHOTOS),
  likes: getRandomInteger(MIN_LIKES_PHOTO, MAX_LIKES_PHOTO),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENTS_COUNT)},
    createComment
  ),
});

const getPhotos = () =>
  Array.from({length:PHOTOS_COUNT}, (_,index) =>
    createPhoto(index + 1));

export {getPhotos};
