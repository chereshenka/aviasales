class Authorization {
  _serverLink = new URL("https://aviasales-test-api.kata.academy/");

  async getKey() {
    const url = new URL("search", this._serverLink);
    return await fetch(url)
      .then((res) => res.json())
      .then((json) => json.searchId)
      .then((id) => id);
  }
}

export default Authorization;
