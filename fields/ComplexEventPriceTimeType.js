var invert = require('invert-obj');

function ComplexEventPriceTimeType (complexEventPriceTimeType) {
  this.message = complexEventPriceTimeType;
}

ComplexEventPriceTimeType.prototype.value = function () {
  return this.message;
};


ComplexEventPriceTimeType.Keys = {
  'EXPIRATION': '1',
  'IMMEDIATE': '2',
  'SPECIFIED_DATE_TIME': '3',
};

ComplexEventPriceTimeType.Tag = '1489';

ComplexEventPriceTimeType.Type = 'INT';

ComplexEventPriceTimeType.Values = invert(ComplexEventPriceTimeType.Keys);

module.exports = ComplexEventPriceTimeType;