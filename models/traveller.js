const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  });
};

// Traveller.prototype.getJourneysByTransport = function (transport) {
//   return this.journeys.find((journey) => {
//     return journey.transport === transport;
//   });
// }; //Stopped giving results after found one instance

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
}; //filters and gives all instances, unlike find method

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0); //total starts at zero; must be placed here so that it knows it is dealing with a number and not an object.  Do not actually need +=, can just put +
};
// ruby will always return something whether it was told to or not; JavaScriptneeds to be told.

Traveller.prototype.getUniqueModesOfTransport = function () {
  uniqueSet = new Set(this.getModesOfTransport());
  return ([...uniqueSet]);
};
// FROM: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// return [...new Set(this.getModesOfTransport())];

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportation = this.getModesOfTransport();
//   return transportation.filter((mode, index) => {
//     return transportation.indexOf(mode) === index;
//   });
// };

module.exports = Traveller;
