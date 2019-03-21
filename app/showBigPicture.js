import { closeElement } from './util';

const MAX_COMMENTS = 5;
const mainContainer = $('main');
const templatePicture = $('.big-picture');

const getBigPicture = data => {
  const bigPicture = templatePicture.clone();
  $(bigPicture).removeClass('hidden');
  const commentsList = $(bigPicture).find('.social__comments');
  const commentNode = $(bigPicture).find('.social__comment');
  const closePicture = $(bigPicture).find('.big-picture__cancel');
  const commentsLoaderButton = $(bigPicture).find('.comments-loader');
  const countString = $(bigPicture).find('.social__comment-count');

  $(bigPicture)
    .find('.big-picture__img img')
    .attr({ src: `src/${data.url}` });
  $(bigPicture)
    .find('.likes-count')
    .text(data.likes);

  const openComments = commentsObj => {
    let commentsCounter = 0; // Offset counter

    commentsList.html(''); // clear container node

    renderCommentNodeList(commentsList, getMoreComments(commentsObj, commentsCounter), commentNode);
    if (commentsObj.comments.length < MAX_COMMENTS) {
      commentsCounter += commentsObj.comments.length;
      $(commentsLoaderButton).addClass('hidden');
    } else {
      commentsCounter += MAX_COMMENTS;
    }
    getCommentsCount(countString, commentsObj, commentsCounter);

    $(commentsLoaderButton).on('click', () => {
      renderCommentNodeList(commentsList, getMoreComments(commentsObj, commentsCounter), commentNode);
      commentsCounter += MAX_COMMENTS;
      getCommentsCount(countString, commentsObj, commentsCounter);

      if (commentsCounter >= commentsObj.comments.length) {
        $(commentsLoaderButton).addClass('hidden');
      }
    });
  };

  openComments(data);
  $(bigPicture)
    .find('.social__caption')
    .html(data.description);

  closeElement(bigPicture, closePicture);

  return bigPicture;
};

const renderComment = (node, comment) => {
  $(node)
    .find('.social__picture')
    .attr({ src: `src/${comment.avatar}` });
  $(node)
    .find('.social__text')
    .text(comment.message);

  return node.first();
};

const renderCommentNodeList = (node, comments, commentNode) => {
  for (let i in comments) {
    $(node).append(renderComment($(commentNode).clone(), comments[i]));
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

  $(node).html(`${availableNumberComments} из <span class="comments-count">${comments.length}</span> комментариев`);
};

export { mainContainer, getBigPicture };
