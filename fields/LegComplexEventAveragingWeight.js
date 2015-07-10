var invert = require('invert-obj');

function LegComplexEventAveragingWeight (legComplexEventAveragingWeight) {
  this.message = legComplexEventAveragingWeight;
}

LegComplexEventAveragingWeight.prototype.value = function () {
  return this.message;
};

LegComplexEventAveragingWeight.Tag = '41365';

LegComplexEventAveragingWeight.Type = 'FLOAT';

module.exports = LegComplexEventAveragingWeight;