var invert = require('invert-obj');

function LegEventType (legEventType) {
  this.message = legEventType;
}

LegEventType.prototype.value = function () {
  return this.message;
};

LegEventType.Tag = '2060';

LegEventType.Type = 'INT';

module.exports = LegEventType;