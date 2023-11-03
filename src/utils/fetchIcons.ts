import {
  CloudyIcon,
  NightIcon,
  NightRainIcon,
  SnowIcon,
  SunnyCloudyIcon,
  SunnyIcon,
  SunnyRainIcon
} from "../assets/icons.ts";
import {WeatherType} from "../types/weatherTypes.ts";

export function fetchIcon(weather: string, hour: number = 15): string {
  if (hour >= 21 || hour <= 6) {
    switch (weather as WeatherType) {
      case WeatherType.Clouds: {
        return CloudyIcon
      }
      case WeatherType.Rain: {
        return NightRainIcon
      }
      case WeatherType.Snow: {
        return SnowIcon
      }
      default: {
        return NightIcon;
      }
    }
  } else {
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

}