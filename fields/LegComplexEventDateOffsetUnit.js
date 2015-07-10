var invert = require('invert-obj');

function LegComplexEventDateOffsetUnit (legComplexEventDateOffsetUnit) {
  this.message = legComplexEventDateOffsetUnit;
}

LegComplexEventDateOffsetUnit.prototype.value = function () {
  return this.message;
};

LegComplexEventDateOffsetUnit.Tag = '41392';

LegComplexEventDateOffsetUnit.Type = 'STRING';

module.exports = LegComplexEventDateOffsetUnit;