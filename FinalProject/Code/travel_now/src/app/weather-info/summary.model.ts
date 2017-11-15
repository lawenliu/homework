/**
 * A Summary represents an agent that sends messages
 */
export class Summary {
  description: string;
  constructor(public sunrise: string,
              public sunset: string,
              public humidity: string,
              public pressure: string,
              public visibility: string,
              public windChill: string,
              public windDirection: string,
              public windSpeed: string,
              public pubDate: string,
              public temp: string,
              public condition: string) {
    this.description = "Today' weather condition is [" + this.condition + "]" + ", temperature is [" + this.temp + "]. "
      + "Today's sunrise time is [" + this.sunrise + "], and today's sunset time is [" + this.sunset + "]. " 
      + "Humidity is [" + this.humidity + "], pressure is [" + this.pressure + "], and visibility is [" + this.visibility + "]. "
      + "Wind speed is [" + this.windSpeed + "], wind direction is [" + this.windDirection + "], and wind chill is [" + this.windChill + "]."; 
  }
}
