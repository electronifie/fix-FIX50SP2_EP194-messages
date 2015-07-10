var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodBusinessCenter (underlyingStreamCalculationPeriodBusinessCenter) {
  this.message = underlyingStreamCalculationPeriodBusinessCenter;
}

UnderlyingStreamCalculationPeriodBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodBusinessCenter.Tag = '40557';

UnderlyingStreamCalculationPeriodBusinessCenter.Type = 'STRING';

module.exports = UnderlyingStreamCalculationPeriodBusinessCenter;