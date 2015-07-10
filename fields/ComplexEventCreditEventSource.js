var invert = require('invert-obj');

function ComplexEventCreditEventSource (complexEventCreditEventSource) {
  this.message = complexEventCreditEventSource;
}

ComplexEventCreditEventSource.prototype.value = function () {
  return this.message;
};

ComplexEventCreditEventSource.Tag = '41030';

ComplexEventCreditEventSource.Type = 'STRING';

module.exports = ComplexEventCreditEventSource;