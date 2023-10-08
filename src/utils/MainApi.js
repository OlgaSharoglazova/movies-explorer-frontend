class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  async getProfile() {
    const response = await fetch(`${this._baseUrl}/profile`, {
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return this._checkResponse(response);
  }

  async editProfile(dataUser) {
    const response = await fetch(`${this._baseUrl}/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: `${dataUser.name}`,
        email: `${dataUser.email}`,
      }),
    });
    return this._checkResponse(response);
  }

  async getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._checkResponse);
  }

  async saveMovie(dataMovie) {
    const response = await fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(dataMovie),
    });
    return this._checkResponse(response);
  }

  async deleteCard(id) {
    const response = await fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    return this._checkResponse(response);
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.busik.nomoredomainsicu.ru",
});
