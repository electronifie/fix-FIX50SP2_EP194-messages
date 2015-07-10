var invert = require('invert-obj');

function LegStreamTerminationDateAdjusted (legStreamTerminationDateAdjusted) {
  this.message = legStreamTerminationDateAdjusted;
}

LegStreamTerminationDateAdjusted.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateAdjusted.Tag = '40264';

LegStreamTerminationDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamTerminationDateAdjusted;