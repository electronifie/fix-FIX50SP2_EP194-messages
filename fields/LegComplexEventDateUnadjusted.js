var invert = require('invert-obj');

function LegComplexEventDateUnadjusted (legComplexEventDateUnadjusted) {
  this.message = legComplexEventDateUnadjusted;
}

LegComplexEventDateUnadjusted.prototype.value = function () {
  return this.message;
};

LegComplexEventDateUnadjusted.Tag = '41389';

LegComplexEventDateUnadjusted.Type = 'LOCALMKTDATE';

module.exports = LegComplexEventDateUnadjusted;