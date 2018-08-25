class Weather {
  constructor(city, state) {
    this.apiKey = 'c7f577f87f171c841f5eac49cfb2a60f';
    this.city = city;
    this.state = state;
  }

  // Fetch weather
  async getWeather() {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=${this.city}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change location
  changeLocation(city) {
    this.city = city;
  }
}
