var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodBusinessDayConvention (underlyingStreamCalculationPeriodBusinessDayConvention) {
  this.message = underlyingStreamCalculationPeriodBusinessDayConvention;
}

UnderlyingStreamCalculationPeriodBusinessDayConvention.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodBusinessDayConvention.Tag = '40556';

UnderlyingStreamCalculationPeriodBusinessDayConvention.Type = 'INT';

module.exports = UnderlyingStreamCalculationPeriodBusinessDayConvention;