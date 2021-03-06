export interface ICurrSpecs {
    lon: number;
    lat: number;
    main: string;
    description: string;
    icon: string;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    visibility: number;
    Speed: number;
    Gust: number;
    Deg: number;
    dt: number;
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
    id: number;
    name: string;
}

export interface ISearchSpecs {
    id: number;
    name: string;
    lon: number;
    lat: number;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    dt: number;
    speed: number;
    deg: number;
    country: string;
    rain: number;
    snow: number;
    main: string;
    description: string;
    icon: string;
    state;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface Sys {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IForecast {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    weatherMain: string;
    description: string;
    icon: string;
    windSpeed: number;
    windDeg: number;
    dt: string;
    country: string;
    timezone: number;
    id: number;
    name: string;
    lon: number;
    lat: number;
    polution: number;
}

export interface IWeather {
    lon: number;
    lat: number;
    weatherMain: string;
    description: string;
    icon: string;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    visibility: number;
    windSpeed: number;
    windGust: number;
    windDeg: number;
    dt: string;
    dTime: string;
    country: string;
    sunrise: number;
    sunset: number;
    timezone: number;
    id: number;
    name: string;
}

export interface IState {
    country: string;
    state: string;
}
