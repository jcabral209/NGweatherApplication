export interface CurrSpecs {

    cityId: number;
    cityName: string;
    windSpeed: Wind;
    windDeg: Wind;
    windGust: Wind;
    humidity: Main;
    lat: Coord;
    lon: Coord;
    temp: Main;
    pressure: Main;
    temp_min: Main;
    temp_max: Main;
    visibility: number;
    weatherIcon: Weather;
    weatherDescription: Weather;
    timezone: number;
    country: Sys;
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


// "coord": {
//     "lon": -121,
//     "lat": 37.64
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 298.89,
//     "pressure": 1012,
//     "humidity": 28,
//     "temp_min": 297.04,
//     "temp_max": 301.15
//   },
//   "visibility": 16093,
//   "wind": {
//     "speed": 7.2,
//     "deg": 270,
//     "gust": 9.3
//   },
//   "clouds": {
//     "all": 1
//   },
//   "dt": 1559844989,
//   "sys": {
//     "type": 1,
//     "id": 5789,
//     "message": 0.0111,
//     "country": "US",
//     "sunrise": 1559824973,
//     "sunset": 1559877765
//   },
//   "timezone": -25200,
//   "id": 5373900,
//   "name": "Modesto",
//   "cod": 200
