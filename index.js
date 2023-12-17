// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (value) => {
  return (fare) => {
    return fare * value;
  };
};

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
};
const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
};

const selectDifferentDrivers = (drivers, selectDriversFunc) => {
  return selectDriversFunc(drivers);
};
