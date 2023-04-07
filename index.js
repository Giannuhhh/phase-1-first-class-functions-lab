// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

fareDoubler(10);
fareQuintupler(10);


function fareTripler(fare) {
    const fareMultiplier = createFareMultiplier(3);
    return fareMultiplier(fare);
}

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}
