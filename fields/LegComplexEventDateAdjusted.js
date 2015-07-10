var invert = require('invert-obj');

function LegComplexEventDateAdjusted (legComplexEventDateAdjusted) {
  this.message = legComplexEventDateAdjusted;
}

LegComplexEventDateAdjusted.prototype.value = function () {
  return this.message;
};

LegComplexEventDateAdjusted.Tag = '41395';

LegComplexEventDateAdjusted.Type = 'LOCALMKTDATE';

module.exports = LegComplexEventDateAdjusted;