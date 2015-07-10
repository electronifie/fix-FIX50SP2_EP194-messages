var invert = require('invert-obj');

function UnderlyingComplexEventCreditEventPeriod (underlyingComplexEventCreditEventPeriod) {
  this.message = underlyingComplexEventCreditEventPeriod;
}

UnderlyingComplexEventCreditEventPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventCreditEventPeriod.Tag = '41720';

UnderlyingComplexEventCreditEventPeriod.Type = 'INT';

module.exports = UnderlyingComplexEventCreditEventPeriod;