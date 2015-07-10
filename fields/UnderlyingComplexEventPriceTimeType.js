var invert = require('invert-obj');

function UnderlyingComplexEventPriceTimeType (underlyingComplexEventPriceTimeType) {
  this.message = underlyingComplexEventPriceTimeType;
}

UnderlyingComplexEventPriceTimeType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPriceTimeType.Tag = '2051';

UnderlyingComplexEventPriceTimeType.Type = 'INT';

module.exports = UnderlyingComplexEventPriceTimeType;