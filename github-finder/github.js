class GitHub {
  constructor() {
    this.client_id = '94fe986a32b82bc15bee';
    this.client_secret = '5b4e9ca656cffc9a0511b3a33ab36268821c199f';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
