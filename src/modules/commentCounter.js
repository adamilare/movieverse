const displayTotalComment = () => {
  const commentCountView = document.querySelector('#modal-commets-count');
  const commentsItems = document.querySelectorAll('.comment-item');

  let validCommentCount = 0;

  commentsItems.forEach((commentItem) => {
    const spans = commentItem.querySelectorAll('span');
    let validSpanCount = 0;
    spans.forEach((span) => {
      if (span.textContent.trim() !== '') {
        validSpanCount += 1;
      }
    });

    if (validSpanCount === spans.length) {
      validCommentCount += 1;
    }
  });

  commentCountView.innerHTML = validCommentCount;
};

export default displayTotalComment;
