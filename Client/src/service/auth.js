export default class AuthService {
  constructor(http, tokenStorage){
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async login(username, password) {
    const data = await this.http.fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async me() {
    const data = await this.http.fetch("/auth/me");
    return data;
  }

  async logout() {
    return;
  }

  async signup(username, password, name, email, url) {
    const data = await this.http.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        name,
        email,
        url
      })
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }
}
