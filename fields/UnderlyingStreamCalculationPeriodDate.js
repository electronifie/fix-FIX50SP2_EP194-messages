var invert = require('invert-obj');

function UnderlyingStreamCalculationPeriodDate (underlyingStreamCalculationPeriodDate) {
  this.message = underlyingStreamCalculationPeriodDate;
}

UnderlyingStreamCalculationPeriodDate.prototype.value = function () {
  return this.message;
};

UnderlyingStreamCalculationPeriodDate.Tag = '41955';

UnderlyingStreamCalculationPeriodDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingStreamCalculationPeriodDate;