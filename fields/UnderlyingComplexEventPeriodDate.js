var invert = require('invert-obj');

function UnderlyingComplexEventPeriodDate (underlyingComplexEventPeriodDate) {
  this.message = underlyingComplexEventPeriodDate;
}

UnderlyingComplexEventPeriodDate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventPeriodDate.Tag = '41727';

UnderlyingComplexEventPeriodDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingComplexEventPeriodDate;