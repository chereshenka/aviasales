class Authorization {
  _serverLink = new URL("https://aviasales-test-api.kata.academy/");
  _userId = localStorage.getItem("user_id") || this.getKey();

  async getKey() {
    if (localStorage.getItem("user_id")) return;
    const url = new URL("search", this._serverLink);
    const key = await fetch(url).then((data) => data.json());
    localStorage.setItem("user_id", key.searchId);
    return key.searchId;
  }
}

export default Authorization;
