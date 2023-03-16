import movieservice from "./services/movies.service.js";
import InvolvementAPI from "./services/involvement.service.js";

const invovlementapi = new InvolvementAPI();

const getGenreList = (movie) => {
  let genreHtml = "";

  if (movie.genres.length) {
    movie.genres.forEach((genre) => {
      genreHtml += `<span class="badge text-bg-secondary">${genre}</span>`;
    });
  }

  return genreHtml;
};

const modalContent = (movie) => `
       <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 modal-img-wrapper")">
        <div class="image-container" style="background-image: url(${
          movie.image ? movie.image.original : ""
        })">
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12" id="modal-movie-info">
        <h1 class="modal-title">${movie.name}</h1>
        ${movie.summary}
        <p class="modal-genres">${getGenreList(movie)}</p>
        <div class="modal-bottom-div">
          <div class="flex modal-likes">
                      <button type="button" class="likeBtn" id="${movie.id}">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>
                      <span>${movie.likes ? movie.likes : 0} likes</span>
                    </div>
        </div>
      </div>
    </div>
    <hr>
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
    <hr>
    <div class="modal-new-comment" id="modal-comment-add">
      <h2>Add a comment</h2>
      <form id="form-comment">
        <input
          class="form-control form-control-lg"
          type="text" name="commenter"
          placeholder="Your name"
        />
        <textarea
          class="form-control form-control-lg"
          id="exampleFormControlTextarea1"
          name="comment"          rows="3"
          placeholder="Your insights"
        ></textarea>
        <button type="submit" id="submit-comment" class="btn btn-danger">Comment</button>
      </form>
    </div>
    `;

const commentItem = (comment) => {
  const listItem = document.createElement("li");
  listItem.className = "comment-item";

  listItem.innerHTML = `
          <span class="comment-time">${comment.creation_date}</span>
          <span class="commenter">${comment.username}:</span>
          <span class="comment-body">${comment.comment}</span>
    `;

  return listItem;
};

const commentsCounter = (modalContainer) => {
  const commentsItems = modalContainer.querySelectorAll(".comment-item");

  let validCommentCount = 0;

  commentsItems.forEach((commentItem) => {
    const spans = commentItem.querySelectorAll("span");
    let validSpanCount = 0;
    spans.forEach((span) => {
      if (span.textContent.trim() !== "") {
        validSpanCount += 1;
      }
    });

    if (validSpanCount === spans.length) {
      validCommentCount += 1;
    }
  });
  return validCommentCount;
};

const displayComments = (modalContainer, movieId) => {
  const commentsContainer = modalContainer.querySelector(".modal-comments ul");
  const commentCountView = modalContainer.querySelector("#modal-commets-count");

  commentsContainer.innerHTML = "";
  invovlementapi.getMovieComments(movieId).then((comments) => {
    if (comments.length) {
      comments.forEach((comment) => {
        commentsContainer.appendChild(commentItem(comment));
      });
    }
  });

  setTimeout(() => {
    commentCountView.innerHTML = commentsCounter(modalContainer);
  }, 1000);
};

const handleSubmit = (modalContainer, movieId, { commenter, comment }) => {
  invovlementapi
    .saveMovieComment(movieId, commenter, comment)
    .then((response) => {
      if (response.status === 201) {
        displayComments(modalContainer, movieId);
      }
    });
};

const getMovieDetailsForDisplay = (movieListContainer, modalContainer) => {
  movieListContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("addComment")) {
      const id = e.target.getAttribute("id");

      const selectedMovie = movieservice
        .getAllMovies()
        .find((movie) => movie.id === Number(id));

      modalContainer.innerHTML = modalContent(selectedMovie);
      const modalTitle = modalContainer.parentNode.querySelector("h1");

      modalTitle.innerHTML = selectedMovie.name;
      displayComments(modalContainer, selectedMovie.id);

      const form = document.querySelector("#form-comment");

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const formObject = {};
        formData.forEach((value, key) => {
          formObject[key] = value;
        });

        handleSubmit(modalContainer, selectedMovie.id, formObject);
        form.reset();
      });
    }
  });
};

export { getMovieDetailsForDisplay };
