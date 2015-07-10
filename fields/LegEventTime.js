var invert = require('invert-obj');

function LegEventTime (legEventTime) {
  this.message = legEventTime;
}

LegEventTime.prototype.value = function () {
  return this.message;
};

LegEventTime.Tag = '2062';

LegEventTime.Type = 'UTCTIMESTAMP';

module.exports = LegEventTime;