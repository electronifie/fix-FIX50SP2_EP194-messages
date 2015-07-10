var invert = require('invert-obj');

function NoComplexEventCreditEvents (noComplexEventCreditEvents) {
  this.message = noComplexEventCreditEvents;
}

NoComplexEventCreditEvents.prototype.value = function () {
  return this.message;
};

NoComplexEventCreditEvents.Tag = '40997';

NoComplexEventCreditEvents.Type = 'NUMINGROUP';

module.exports = NoComplexEventCreditEvents;