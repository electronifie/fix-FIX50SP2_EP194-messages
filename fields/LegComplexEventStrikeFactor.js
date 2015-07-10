var invert = require('invert-obj');

function LegComplexEventStrikeFactor (legComplexEventStrikeFactor) {
  this.message = legComplexEventStrikeFactor;
}

LegComplexEventStrikeFactor.prototype.value = function () {
  return this.message;
};

LegComplexEventStrikeFactor.Tag = '2240';

LegComplexEventStrikeFactor.Type = 'FLOAT';

module.exports = LegComplexEventStrikeFactor;