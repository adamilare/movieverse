const homePage = () => `
    <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="./assets/movieverse-logo.png"
          width="22%"
          alt="movieverse"
        />
        MovieVerse
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              >TV Shows <span class="badge">4</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Movies <span class="badge">4</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Movie Schedules <span class="badge">4</span></a
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-secondary" type="submit">
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </nav>

  <main class="container mt-4">
    <div class="row movie-container-row">
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="movie-card card">
          <img
            src="./assets/avengersendgame.jpg"
            class="card-img-top"
            alt="avengers"
          />
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">Avengers: Endgame</h5>

              <div class="flex">
                <button type="button" class="likeBtn">
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
                <span>2 likes</span>
              </div>
            </div>
            <p class="card-text">
              <span class="badge text-bg-secondary">Action</span>
              <span class="badge text-bg-secondary">SCI-FI</span>
            </p>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-danger">Comment</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="movie-card card">
          <img
            src="./assets/avengersendgame.jpg"
            class="card-img-top"
            alt="avengers"
          />
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">Avengers: Endgame</h5>

              <div class="flex">
                <button type="button" class="likeBtn">
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
                <span>2 likes</span>
              </div>
            </div>
            <p class="card-text">
              <span class="badge text-bg-secondary">Action</span>
              <span class="badge text-bg-secondary">SCI-FI</span>
            </p>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-danger">Comment</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="movie-card card">
          <img
            src="./assets/avengersendgame.jpg"
            class="card-img-top"
            alt="avengers"
          />
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">Avengers: Endgame</h5>

              <div class="flex">
                <button type="button" class="likeBtn">
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
                <span>2 likes</span>
              </div>
            </div>
            <p class="card-text">
              <span class="badge text-bg-secondary">Action</span>
              <span class="badge text-bg-secondary">SCI-FI</span>
            </p>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-danger">Comment</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="movie-card card">
          <img
            src="./assets/avengersendgame.jpg"
            class="card-img-top"
            alt="avengers"
          />
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="card-title">Avengers: Endgame</h5>

              <div class="flex">
                <button type="button" class="likeBtn">
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
                <span>2 likes</span>
              </div>
            </div>
            <p class="card-text">
              <span class="badge text-bg-secondary">Action</span>
              <span class="badge text-bg-secondary">SCI-FI</span>
            </p>
            <div class="d-grid gap-2">
              <a href="#" class="btn btn-danger">Comment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    `;

export default homePage;
