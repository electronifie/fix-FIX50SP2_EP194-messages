var invert = require('invert-obj');

function ComplexEventPeriodDate (complexEventPeriodDate) {
  this.message = complexEventPeriodDate;
}

ComplexEventPeriodDate.prototype.value = function () {
  return this.message;
};

ComplexEventPeriodDate.Tag = '41008';

ComplexEventPeriodDate.Type = 'LOCALMKTDATE';

module.exports = ComplexEventPeriodDate;