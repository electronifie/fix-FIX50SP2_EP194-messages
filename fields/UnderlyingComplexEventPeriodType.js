var invert = require('invert-obj');

function UnderlyingComplexEventPeriodType (underlyingComplexEventPeriodType) {
  this.message = underlyingComplexEventPeriodType;
}

UnderlyingComplexEventPeriodType.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPeriodType.Tag = '41730';

UnderlyingComplexEventPeriodType.Type = 'INT';

module.exports = UnderlyingComplexEventPeriodType;