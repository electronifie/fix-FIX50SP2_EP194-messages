var invert = require('invert-obj');

function ComplexEventCreditEventPeriod (complexEventCreditEventPeriod) {
  this.message = complexEventCreditEventPeriod;
}

ComplexEventCreditEventPeriod.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventPeriod.Tag = '41001';

ComplexEventCreditEventPeriod.Type = 'INT';

module.exports = ComplexEventCreditEventPeriod;