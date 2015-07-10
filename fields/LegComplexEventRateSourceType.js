var invert = require('invert-obj');

function LegComplexEventRateSourceType (legComplexEventRateSourceType) {
  this.message = legComplexEventRateSourceType;
}

LegComplexEventRateSourceType.prototype.value = function () {
  return this.message;
};

LegComplexEventRateSourceType.Tag = '41384';

LegComplexEventRateSourceType.Type = 'INT';

module.exports = LegComplexEventRateSourceType;