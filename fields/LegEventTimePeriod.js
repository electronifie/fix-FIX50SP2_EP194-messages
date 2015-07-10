var invert = require('invert-obj');

function LegEventTimePeriod (legEventTimePeriod) {
  this.message = legEventTimePeriod;
}

LegEventTimePeriod.prototype.value = function () {
  return this.message;
};

LegEventTimePeriod.Tag = '2064';

LegEventTimePeriod.Type = 'INT';

module.exports = LegEventTimePeriod;