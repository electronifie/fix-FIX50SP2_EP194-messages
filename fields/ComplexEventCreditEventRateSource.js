var invert = require('invert-obj');

function ComplexEventCreditEventRateSource (complexEventCreditEventRateSource) {
  this.message = complexEventCreditEventRateSource;
}

ComplexEventCreditEventRateSource.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventRateSource.Tag = '41004';

ComplexEventCreditEventRateSource.Type = 'INT';

module.exports = ComplexEventCreditEventRateSource;