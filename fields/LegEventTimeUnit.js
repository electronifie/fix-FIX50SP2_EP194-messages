var invert = require('invert-obj');

function LegEventTimeUnit (legEventTimeUnit) {
  this.message = legEventTimeUnit;
}

LegEventTimeUnit.prototype.value = function () {
  return this.message;
};

LegEventTimeUnit.Tag = '2063';

LegEventTimeUnit.Type = 'STRING';

module.exports = LegEventTimeUnit;