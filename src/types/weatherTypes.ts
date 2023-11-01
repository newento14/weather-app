export interface ICords {
    lat: number,
    lon: number
}

export interface ICurrentWeather {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    rain: {
        "1h": number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface IWeather {
    cod: number,
    message: any,
    cnt: number,
    list: IWeatherInfo[],
    "city": {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    }
}

export enum WeatherType {
    'Clouds',
    'Rain',
    'Snow',
    'Clear',
}

export interface IWeatherInfo {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: {
        id: number,
        main: WeatherType,
        description: string,
        icon: string
    }
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number,
    }
    visibility: number,
    pop: number,
    sys: {
        pod: string
    },
    dt_txt: string
}