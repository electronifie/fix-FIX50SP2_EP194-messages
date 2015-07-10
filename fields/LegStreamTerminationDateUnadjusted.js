var invert = require('invert-obj');

function LegStreamTerminationDateUnadjusted (legStreamTerminationDateUnadjusted) {
  this.message = legStreamTerminationDateUnadjusted;
}

LegStreamTerminationDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegStreamTerminationDateUnadjusted.Tag = '40257';

LegStreamTerminationDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegStreamTerminationDateUnadjusted;