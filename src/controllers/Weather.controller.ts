interface TestResponse {
  message: string;
}

export default class WeatherController {
  public async getWeatherForLocation(): Promise<TestResponse> {
    return {
      message: "beep boop!",
    };
  }
}