import {CloudyIcon, SnowIcon, SunnyCloudyIcon, SunnyIcon, SunnyRainIcon} from "../assets/icons.ts";
import {WeatherType} from "../types/weatherTypes.ts";

export function fetchIcon(weather: string): string {
  switch (weather as WeatherType) {
    case WeatherType.Clear: {
      return SunnyIcon
    }
    case WeatherType.Clouds: {
      return CloudyIcon
    }
    case WeatherType.Rain: {
      return SunnyRainIcon
    }
    case WeatherType.Snow: {
      return SnowIcon
    }
    default: {
      return SunnyCloudyIcon;
    }
  }
}