// src/ga.js
import ReactGA from 'react-ga4';

export const initializeGA = () => {
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  if (measurementId) {
    ReactGA.initialize(measurementId);
  } else {
    console.error("Google Analytics Measurement ID is missing");
  }
};
