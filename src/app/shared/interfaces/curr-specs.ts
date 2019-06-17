export interface ICurrSpecs {
    lon: Coord;
    lat: Coord;
    main: Weather;
    description: Weather;
    icon: Weather;
    temp: Main;
    pressure: Main;
    humidity: Main;
    temp_min: Main;
    temp_max: Main;
    visibility: number;
    Speed: Wind;
    Gust: Wind;
    Deg: Wind;
    dt: number;
    country: Sys;
    sunrise: Sys;
    sunset: Sys;
    timezone: number;
    id: number;
    name: string;
}

export interface ISearchSpecs {
    id: number;
    name: string;
    lon: Coord;
    lat: Coord;
    temp: Main;
    pressure: Main;
    humidity: Main;
    temp_min: Main;
    temp_max: Main;
    dt: number;
    speed: Wind;
    deg: Wind;
    country: Sys;
    rain: string;
    snow: string;
    main: Weather;
    description: Weather;
    icon: Weather;
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
