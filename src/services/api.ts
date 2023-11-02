import axios from "axios";
import {ICords, ICurrentWeather, IWeather} from "../types/weatherTypes.ts";

const testJSON:ICurrentWeather = {
    "coord": {
        "lon": 24.7038,
        "lat": 48.903
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 7.83,
        "feels_like": 7.36,
        "temp_min": 7.83,
        "temp_max": 7.83,
        "pressure": 1014,
        "humidity": 83,
        "sea_level": 1014,
        "grnd_level": 982
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.35,
        "deg": 175,
        "gust": 1.33
    },
    "clouds": {
        "all": 8
    },
    "dt": 1698867429,
    "sys": {
        "country": "UA",
        "sunrise": 1698815236,
        "sunset": 1698850929
    },
    "timezone": 7200,
    "id": 698459,
    "name": "Opryshovtse",
    "cod": 200
}

const test5DaysJson:IWeather = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1698915600,
      "main": {
        "temp": 284.94,
        "feels_like": 283.66,
        "temp_min": 284.94,
        "temp_max": 284.94,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 979,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 3.91,
        "deg": 139,
        "gust": 5.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 09:00:00"
    },
    {
      "dt": 1698926400,
      "main": {
        "temp": 285.62,
        "feels_like": 284.33,
        "temp_min": 285.62,
        "temp_max": 286.98,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 977,
        "humidity": 54,
        "temp_kf": -1.36
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 4.51,
        "deg": 136,
        "gust": 5.76
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 12:00:00"
    },
    {
      "dt": 1698937200,
      "main": {
        "temp": 284.03,
        "feels_like": 282.71,
        "temp_min": 283.58,
        "temp_max": 284.03,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 975,
        "humidity": 59,
        "temp_kf": 0.45
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 3.77,
        "deg": 128,
        "gust": 8.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 15:00:00"
    },
    {
      "dt": 1698948000,
      "main": {
        "temp": 281.49,
        "feels_like": 279.34,
        "temp_min": 281.49,
        "temp_max": 281.49,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 974,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 74
      },
      "wind": {
        "speed": 3.57,
        "deg": 144,
        "gust": 8.38
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-02 18:00:00"
    },
    {
      "dt": 1698958800,
      "main": {
        "temp": 280.02,
        "feels_like": 278.04,
        "temp_min": 280.02,
        "temp_max": 280.02,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 974,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.8,
        "deg": 136,
        "gust": 5.64
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-02 21:00:00"
    },
    {
      "dt": 1698969600,
      "main": {
        "temp": 279.09,
        "feels_like": 276.41,
        "temp_min": 279.09,
        "temp_max": 279.09,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 973,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 3.58,
        "deg": 133,
        "gust": 7.59
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 00:00:00"
    },
    {
      "dt": 1698980400,
      "main": {
        "temp": 278.71,
        "feels_like": 275.6,
        "temp_min": 278.71,
        "temp_max": 278.71,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 971,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 81
      },
      "wind": {
        "speed": 4.18,
        "deg": 133,
        "gust": 8.85
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 03:00:00"
    },
    {
      "dt": 1698991200,
      "main": {
        "temp": 280.18,
        "feels_like": 276.73,
        "temp_min": 280.18,
        "temp_max": 280.18,
        "pressure": 1001,
        "sea_level": 1001,
        "grnd_level": 969,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 91
      },
      "wind": {
        "speed": 5.73,
        "deg": 126,
        "gust": 11.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 06:00:00"
    },
    {
      "dt": 1699002000,
      "main": {
        "temp": 285.24,
        "feels_like": 284.02,
        "temp_min": 285.24,
        "temp_max": 285.24,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 969,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.33,
        "deg": 137,
        "gust": 10.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 09:00:00"
    },
    {
      "dt": 1699012800,
      "main": {
        "temp": 288.75,
        "feels_like": 287.75,
        "temp_min": 288.75,
        "temp_max": 288.75,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 966,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.56,
        "deg": 128,
        "gust": 10.35
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 12:00:00"
    },
    {
      "dt": 1699023600,
      "main": {
        "temp": 286.8,
        "feels_like": 286.05,
        "temp_min": 286.8,
        "temp_max": 286.8,
        "pressure": 995,
        "sea_level": 995,
        "grnd_level": 964,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 8.06,
        "deg": 127,
        "gust": 15.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 15:00:00"
    },
    {
      "dt": 1699034400,
      "main": {
        "temp": 286.18,
        "feels_like": 285.39,
        "temp_min": 286.18,
        "temp_max": 286.18,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 966,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.53,
        "deg": 170,
        "gust": 4.88
      },
      "visibility": 10000,
      "pop": 0.09,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 18:00:00"
    },
    {
      "dt": 1699045200,
      "main": {
        "temp": 286.41,
        "feels_like": 285.62,
        "temp_min": 286.41,
        "temp_max": 286.41,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 967,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.75,
        "deg": 184,
        "gust": 5.34
      },
      "visibility": 10000,
      "pop": 0.21,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 21:00:00"
    },
    {
      "dt": 1699056000,
      "main": {
        "temp": 285.23,
        "feels_like": 284.3,
        "temp_min": 285.23,
        "temp_max": 285.23,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 967,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.85,
        "deg": 179,
        "gust": 5.28
      },
      "visibility": 10000,
      "pop": 0.15,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 00:00:00"
    },
    {
      "dt": 1699066800,
      "main": {
        "temp": 282.97,
        "feels_like": 282.08,
        "temp_min": 282.97,
        "temp_max": 282.97,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 968,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 85
      },
      "wind": {
        "speed": 2.06,
        "deg": 119,
        "gust": 2.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 03:00:00"
    },
    {
      "dt": 1699077600,
      "main": {
        "temp": 282.62,
        "feels_like": 282.62,
        "temp_min": 282.62,
        "temp_max": 282.62,
        "pressure": 1002,
        "sea_level": 1002,
        "grnd_level": 970,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 0.62,
        "deg": 200,
        "gust": 1.04
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 06:00:00"
    },
    {
      "dt": 1699088400,
      "main": {
        "temp": 285.9,
        "feels_like": 284.69,
        "temp_min": 285.9,
        "temp_max": 285.9,
        "pressure": 1001,
        "sea_level": 1001,
        "grnd_level": 970,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.56,
        "deg": 152,
        "gust": 1.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 09:00:00"
    },
    {
      "dt": 1699099200,
      "main": {
        "temp": 286.4,
        "feels_like": 285.24,
        "temp_min": 286.4,
        "temp_max": 286.4,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 969,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.01,
        "deg": 344,
        "gust": 1.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 12:00:00"
    },
    {
      "dt": 1699110000,
      "main": {
        "temp": 284.01,
        "feels_like": 282.98,
        "temp_min": 284.01,
        "temp_max": 284.01,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 968,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.59,
        "deg": 299,
        "gust": 1.04
      },
      "visibility": 10000,
      "pop": 0.35,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 15:00:00"
    },
    {
      "dt": 1699120800,
      "main": {
        "temp": 283.75,
        "feels_like": 282.9,
        "temp_min": 283.75,
        "temp_max": 283.75,
        "pressure": 999,
        "sea_level": 999,
        "grnd_level": 967,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.69,
        "deg": 306,
        "gust": 2.37
      },
      "visibility": 10000,
      "pop": 0.46,
      "rain": {
        "3h": 0.49
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 18:00:00"
    },
    {
      "dt": 1699131600,
      "main": {
        "temp": 282.33,
        "feels_like": 282.33,
        "temp_min": 282.33,
        "temp_max": 282.33,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 967,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.18,
        "deg": 286,
        "gust": 1.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 21:00:00"
    },
    {
      "dt": 1699142400,
      "main": {
        "temp": 281.07,
        "feels_like": 280.24,
        "temp_min": 281.07,
        "temp_max": 281.07,
        "pressure": 999,
        "sea_level": 999,
        "grnd_level": 968,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.67,
        "deg": 224,
        "gust": 1.64
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 00:00:00"
    },
    {
      "dt": 1699153200,
      "main": {
        "temp": 279.84,
        "feels_like": 278.89,
        "temp_min": 279.84,
        "temp_max": 279.84,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 968,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 1.61,
        "deg": 196,
        "gust": 1.6
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 03:00:00"
    },
    {
      "dt": 1699164000,
      "main": {
        "temp": 280.26,
        "feels_like": 278.74,
        "temp_min": 280.26,
        "temp_max": 280.26,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 969,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 2.26,
        "deg": 160,
        "gust": 3.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 06:00:00"
    },
    {
      "dt": 1699174800,
      "main": {
        "temp": 287.09,
        "feels_like": 285.85,
        "temp_min": 287.09,
        "temp_max": 287.09,
        "pressure": 999,
        "sea_level": 999,
        "grnd_level": 968,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 3.97,
        "deg": 185,
        "gust": 6.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 09:00:00"
    },
    {
      "dt": 1699185600,
      "main": {
        "temp": 287.82,
        "feels_like": 286.6,
        "temp_min": 287.82,
        "temp_max": 287.82,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 966,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 81
      },
      "wind": {
        "speed": 4.81,
        "deg": 173,
        "gust": 8
      },
      "visibility": 10000,
      "pop": 0.28,
      "rain": {
        "3h": 0.14
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 12:00:00"
    },
    {
      "dt": 1699196400,
      "main": {
        "temp": 285.58,
        "feels_like": 284.34,
        "temp_min": 285.58,
        "temp_max": 285.58,
        "pressure": 995,
        "sea_level": 995,
        "grnd_level": 964,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.45,
        "deg": 134,
        "gust": 9.68
      },
      "visibility": 10000,
      "pop": 0.16,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 15:00:00"
    },
    {
      "dt": 1699207200,
      "main": {
        "temp": 285.01,
        "feels_like": 283.95,
        "temp_min": 285.01,
        "temp_max": 285.01,
        "pressure": 993,
        "sea_level": 993,
        "grnd_level": 962,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.72,
        "deg": 150,
        "gust": 9.42
      },
      "visibility": 10000,
      "pop": 0.48,
      "rain": {
        "3h": 0.25
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 18:00:00"
    },
    {
      "dt": 1699218000,
      "main": {
        "temp": 285.86,
        "feels_like": 284.88,
        "temp_min": 285.86,
        "temp_max": 285.86,
        "pressure": 993,
        "sea_level": 993,
        "grnd_level": 962,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.17,
        "deg": 183,
        "gust": 10.04
      },
      "visibility": 10000,
      "pop": 0.23,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 21:00:00"
    },
    {
      "dt": 1699228800,
      "main": {
        "temp": 283.55,
        "feels_like": 282.63,
        "temp_min": 283.55,
        "temp_max": 283.55,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 966,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 7.17,
        "deg": 299,
        "gust": 13.32
      },
      "visibility": 10000,
      "pop": 0.69,
      "rain": {
        "3h": 0.62
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 00:00:00"
    },
    {
      "dt": 1699239600,
      "main": {
        "temp": 282.49,
        "feels_like": 279.9,
        "temp_min": 282.49,
        "temp_max": 282.49,
        "pressure": 1002,
        "sea_level": 1002,
        "grnd_level": 971,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 37
      },
      "wind": {
        "speed": 5.03,
        "deg": 277,
        "gust": 12.33
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 03:00:00"
    },
    {
      "dt": 1699250400,
      "main": {
        "temp": 281.72,
        "feels_like": 280.03,
        "temp_min": 281.72,
        "temp_max": 281.72,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 973,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 2.86,
        "deg": 256,
        "gust": 8.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 06:00:00"
    },
    {
      "dt": 1699261200,
      "main": {
        "temp": 285.71,
        "feels_like": 284.48,
        "temp_min": 285.71,
        "temp_max": 285.71,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 976,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 26
      },
      "wind": {
        "speed": 7.41,
        "deg": 259,
        "gust": 11.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 09:00:00"
    },
    {
      "dt": 1699272000,
      "main": {
        "temp": 286.25,
        "feels_like": 284.97,
        "temp_min": 286.25,
        "temp_max": 286.25,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 978,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 25
      },
      "wind": {
        "speed": 6.27,
        "deg": 266,
        "gust": 8.46
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 12:00:00"
    },
    {
      "dt": 1699282800,
      "main": {
        "temp": 283.1,
        "feels_like": 281.68,
        "temp_min": 283.1,
        "temp_max": 283.1,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 979,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 2.87,
        "deg": 264,
        "gust": 6.22
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 15:00:00"
    },
    {
      "dt": 1699293600,
      "main": {
        "temp": 282.11,
        "feels_like": 280.56,
        "temp_min": 282.11,
        "temp_max": 282.11,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 981,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 2.76,
        "deg": 262,
        "gust": 6.69
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 18:00:00"
    },
    {
      "dt": 1699304400,
      "main": {
        "temp": 281.28,
        "feels_like": 280.59,
        "temp_min": 281.28,
        "temp_max": 281.28,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 982,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 1.57,
        "deg": 232,
        "gust": 3.04
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 21:00:00"
    },
    {
      "dt": 1699315200,
      "main": {
        "temp": 280.31,
        "feels_like": 279.61,
        "temp_min": 280.31,
        "temp_max": 280.31,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 983,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 15
      },
      "wind": {
        "speed": 1.46,
        "deg": 194,
        "gust": 1.58
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-07 00:00:00"
    },
    {
      "dt": 1699326000,
      "main": {
        "temp": 280.42,
        "feels_like": 279.57,
        "temp_min": 280.42,
        "temp_max": 280.42,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 984,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 1.6,
        "deg": 205,
        "gust": 1.86
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-07 03:00:00"
    },
    {
      "dt": 1699336800,
      "main": {
        "temp": 280.64,
        "feels_like": 280.64,
        "temp_min": 280.64,
        "temp_max": 280.64,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 985,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 1.13,
        "deg": 216,
        "gust": 1.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-07 06:00:00"
    }
  ],
  "city": {
    "id": 698459,
    "name": "Opryshovtse",
    "coord": {
      "lat": 48.903,
      "lon": 24.703
    },
    "country": "UA",
    "population": 0,
    "timezone": 7200,
    "sunrise": 1698901732,
    "sunset": 1698937232
  }
}

export class WeatherApi {
    static async get5DaysForecast(cords:ICords) {
        //https://api.openweathermap.org/data/2.5/weather?lat=48.9029632&lon=24.7037952&appid=343a2924195d9903810b0193b3f9c5f5&units=metric
        //const response = await axios.get<IWeather>(API_URL + `forecast?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`);
        return test5DaysJson;
    }

    static async getCurrentWeather(cords:ICords) {
        const response = testJSON;
        console.log(response)
        //const response = await axios.get<IWeather>(API_URL + `weather?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`);
        return response;
    }
}