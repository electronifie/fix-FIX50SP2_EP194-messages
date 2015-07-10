var invert = require('invert-obj');

function UnderlyingComplexEventRateSourceType (underlyingComplexEventRateSourceType) {
  this.message = underlyingComplexEventRateSourceType;
}

UnderlyingComplexEventRateSourceType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventRateSourceType.Tag = '41734';

UnderlyingComplexEventRateSourceType.Type = 'INT';

module.exports = UnderlyingComplexEventRateSourceType;