import { closeElement } from './util';

const MAX_COMMENTS = 5;
const mainContainer = document.querySelector('main');
const templatePicture = document.querySelector('.big-picture');

const getBigPicture = data => {
  const bigPicture = templatePicture.cloneNode(true);
  bigPicture.classList.remove('hidden');
  const commentsList = bigPicture.querySelector('.social__comments');
  const commentNode = bigPicture.querySelector('.social__comment');
  const closePicture = bigPicture.querySelector('.big-picture__cancel');
  const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
  const countString = bigPicture.querySelector('.social__comment-count');

  bigPicture.querySelector('img').src = `src/${data.url}`;
  bigPicture.querySelector('.likes-count').textContent = data.likes;

  const openComments = commentsObj => {
    let commentsCounter = 0; // Offset counter

    commentsList.innerHTML = ''; // clear container node

    renderCommentNodeList(commentsList, getMoreComments(commentsObj, commentsCounter), commentNode);
    commentsCounter += MAX_COMMENTS;
    getCommentsCount(countString, commentsObj, commentsCounter);

    commentsLoaderButton.addEventListener('click', () => {
      renderCommentNodeList(commentsList, getMoreComments(commentsObj, commentsCounter), commentNode);
      commentsCounter += MAX_COMMENTS;
      getCommentsCount(countString, commentsObj, commentsCounter);

      if (commentsCounter >= commentsObj.comments.length) {
        commentsLoaderButton.classList.add('hidden');
      }
    });
  };

  openComments(data);
  bigPicture.querySelector('.social__caption').innerHTML = data.description;

  closeElement(mainContainer, bigPicture, closePicture);

  return bigPicture;
};

const renderComment = (node, comment) => {
  node.querySelector('.social__picture').src = `src/${comment.avatar}`;
  node.querySelector('.social__text').textContent = comment.message;

  return node;
};

const renderCommentNodeList = (node, comments, commentNode) => {
  for (let i in comments) {
    node.appendChild(renderComment(commentNode.cloneNode(true), comments[i]));
  }
};

const getMoreComments = ({ comments }, offset) => {
  return comments.slice(offset, offset + MAX_COMMENTS);
};

const getCommentsCount = (node, { comments }, currentCount) => {
  let availableNumberComments;

  // Можно и нужно упросить расчет счетчика комментариев
  if (currentCount === MAX_COMMENTS) {
    availableNumberComments = MAX_COMMENTS;
  } else if (currentCount < comments.length) {
    availableNumberComments = currentCount;
  } else if (currentCount === comments.length) {
    availableNumberComments = currentCount;
  } else if (currentCount > comments.length) {
    availableNumberComments = currentCount - (currentCount - comments.length);
  }

  node.innerHTML = `${availableNumberComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

export { mainContainer, getBigPicture };
