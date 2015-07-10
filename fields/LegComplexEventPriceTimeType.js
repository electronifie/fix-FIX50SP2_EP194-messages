var invert = require('invert-obj');

function LegComplexEventPriceTimeType (legComplexEventPriceTimeType) {
  this.message = legComplexEventPriceTimeType;
}

LegComplexEventPriceTimeType.prototype.value = function () {
  return this.message;
};

LegComplexEventPriceTimeType.Tag = '2231';

LegComplexEventPriceTimeType.Type = 'INT';

module.exports = LegComplexEventPriceTimeType;