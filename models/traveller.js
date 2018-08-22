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
    return journey.distance >= minDistance;
  });
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  uniqueSet = new Set(this.getModesOfTransport());
  return ([...uniqueSet]);
};
// FROM: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

module.exports = Traveller;
