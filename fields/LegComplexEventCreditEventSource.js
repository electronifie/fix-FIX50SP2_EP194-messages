var invert = require('invert-obj');

function LegComplexEventCreditEventSource (legComplexEventCreditEventSource) {
  this.message = legComplexEventCreditEventSource;
}

LegComplexEventCreditEventSource.prototype.value = function () {
  return this.message;
};

LegComplexEventCreditEventSource.Tag = '41399';

LegComplexEventCreditEventSource.Type = 'STRING';

module.exports = LegComplexEventCreditEventSource;