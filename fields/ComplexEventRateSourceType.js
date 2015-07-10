var invert = require('invert-obj');

function ComplexEventRateSourceType (complexEventRateSourceType) {
  this.message = complexEventRateSourceType;
}

ComplexEventRateSourceType.prototype.value = function () {
  return this.message;
};

ComplexEventRateSourceType.Tag = '41015';

ComplexEventRateSourceType.Type = 'INT';

module.exports = ComplexEventRateSourceType;