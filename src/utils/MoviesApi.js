class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  async getMovies() {
    const response = await fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return this._checkResponse(response);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
});
