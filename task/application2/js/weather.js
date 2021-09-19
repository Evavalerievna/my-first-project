'use strict';

/** @param {Object} data */
export const getCountry = data => {
    console.log(data);
    return data.location.country;
};

/** @param {Object} data */
export const getIcon = data => {
  return data.current.weather_icons[0];
};

/** @param {Object} data */
export const getTemperature = data => {
  return data.current.temperature;
};