var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodDateType (underlyingStreamCalculationPeriodDateType) {
  this.message = underlyingStreamCalculationPeriodDateType;
}

UnderlyingStreamCalculationPeriodDateType.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodDateType.Tag = '41956';

UnderlyingStreamCalculationPeriodDateType.Type = 'INT';

module.exports = UnderlyingStreamCalculationPeriodDateType;