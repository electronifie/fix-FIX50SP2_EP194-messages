var invert = require('invert-obj');

function LegStreamTerminationDateOffsetUnit (legStreamTerminationDateOffsetUnit) {
  this.message = legStreamTerminationDateOffsetUnit;
}

LegStreamTerminationDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateOffsetUnit.Tag = '40262';

LegStreamTerminationDateOffsetUnit.Type = 'STRING';

module.exports = LegStreamTerminationDateOffsetUnit;