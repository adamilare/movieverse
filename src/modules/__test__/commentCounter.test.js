import axios from 'axios';
import InvolvementAPI from '../services/involvement.service.js';
import displayCommentCounter from '../commentCounter.js';

document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>    
    <main class="container main-container">
        <div class="row movie-container-row"></div>
  </main>
    <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-div" role="document">
      <div class="modal-content">
       <div class="modal-header">
        <h2 class="modal-title fs-5" id="staticBackdropLabel">Movie title</h2>
        <button type="button" class="btn-close modal-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>      
        </div>
        <div class="modal-body">
          <div class="modal-comments" id="modal-comments">
          <div class="comments-header">
            <h2>Comments</h2><span class="comments-count" id="modal-commets-count"></span>
          </div>
          <ul class="comments-list">
            <li class="comment-item">
              <span class="comment-time">15/03/2023</span
              ><span class="commenter">Dare:</span
              ><span class="comment-body"></span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

describe('Movie comment counter', () => {
  let fetchTvShowsSpy;
  let fakeCommentDisplay;
  const interactionService = new InvolvementAPI();

  const fakeCommentsData = [
    {
      comment: 'This is nice!',
      creation_date: '2021-01-10',
      username: 'John',
    },
    {
      comment: 'Great content!',
      creation_date: '2021-02-10',
      username: 'Jane',
    },
  ];

  beforeEach(() => {
    fakeCommentDisplay = jest.fn((comments) => {
      if (comments.length) {
        const commentsContainer = document.querySelector('.modal-comments ul');

        commentsContainer.innerHTML = '';

        comments.forEach((comment) => {
          const listItem = document.createElement('li');
          listItem.className = 'comment-item';

          listItem.innerHTML = `
                <span class="comment-time">${comment.creation_date}</span>
                <span class="commenter">${comment.username}:</span>
                <span class="comment-body">${comment.comment}</span>
            `;
          commentsContainer.appendChild(listItem);
        });
      }
    });

    fetchTvShowsSpy = jest.spyOn(axios, 'get');
  });

  it('list of comments rendered on the DOM should be equal to the number of comments from the api', async () => {
    fetchTvShowsSpy.mockReturnValueOnce({
      data: fakeCommentsData,
    });

    const comments = await interactionService.getMovieComments(2);
    fakeCommentDisplay(comments);
    const commentElements = document.querySelectorAll('.comment-item');

    expect(commentElements.length).toEqual(fakeCommentsData.length);
  });

  it('Total comments count for the movie should be equal to the displayed count', async () => {
    fetchTvShowsSpy.mockReturnValueOnce({
      data: fakeCommentsData,
    });

    const comments = await interactionService.getMovieComments(1);
    fakeCommentDisplay(comments);
    displayCommentCounter();
    const commentCountView = document.querySelector('#modal-commets-count');
    const commentElements = document.querySelectorAll('.comment-item');
    expect(commentCountView.textContent).toBe(String(commentElements.length));
  });
});
