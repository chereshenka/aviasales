class Authorization {
  _serverLink = new URL("https://aviasales-test-api.kata.academy/");
  _userId = localStorage.getItem("user_id") || this.getKey();

  async getKey() {
    if (localStorage.getItem("user_id")) return;
    const url = new URL("search", this._serverLink);
    return await fetch(url)
      .then((res) => res.json())
      .then((json) => json.searchId)
      .then((id) => {
        localStorage.setItem("user_id", id);
        return id;
      });
  }
}

export default Authorization;
